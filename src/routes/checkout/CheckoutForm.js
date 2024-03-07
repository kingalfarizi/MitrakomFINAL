import React from "react";
import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import ResetLocation from "../../helpers/ResetLocation";
import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import Tick from "../../assets/images/success-tick.png";
import useSnap from "../payment/useSnap";
import rupiah from "helpers/rupiah";

const CheckoutForm = ({
  currentUser,
  totalPayment,
  productsQuantity,
  taxes,
}) => {
  const [formValue, setFormValue] = useState({
    fullname: currentUser.fullname,
    email: currentUser.email,
    address: currentUser.address,
    number: currentUser.number,
    chooseDelivery: "",
    promoCode: "",
  });
  const [submit, setSubmit] = useState(false);
  const [promoCode, setPromoCode] = useState(false);
  const [formError, setFormError] = useState({});
  const [transactionId, setTransactionId] = useState(0);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const { snapEmbed } = useSnap();

  const togglePromocode = () => {
    setPromoCode(!promoCode);
  };

  const cart = JSON.parse(sessionStorage.getItem("cartItems")) || null;

  let mappedCart;
  if (cart) {
    mappedCart = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      ItemPrice: item.ItemPrice,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      idUser: currentUser.id,
      barang: mappedCart,
      metodePengiriman: formValue.chooseDelivery,
      metodePembayaran: "midtrans",
      promoCode: formValue.promoCode,
      userDetail: currentUser,
      cartDetail: cart,
    };

    sessionStorage.setItem("orderItems", JSON.stringify(data));
    setFormError(validateForm(formValue));
    setSubmit(true);
    // ResetLocation();
  };

  useEffect(() => {
    if (submit && Object.keys(formError).length === 0) {
      const dataPost = sessionStorage.getItem("orderItems");
      fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataPost,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSearchParams({ id: data.data.token });
          setTransactionId(data.data.id);
          snapEmbed(data.data.token, "snap-container", {
            onSuccess: function (result) {
              console.log("success", result);
              navigate("/menu");
              window.location.href = "/menu";
              // setSnapShow(false);
            },
            onPending: function (result) {
              console.log("pending", result);
              navigate("/menu");
              window.location.href = "/menu";
              // setSnapShow(false);
            },
            onClose: function () {
              navigate("/menu");
              window.location.href = "/menu";

              // setSnapShow(false);
            },
          });

          sessionStorage.removeItem("cartItems");
          sessionStorage.removeItem("orderItems");
          sessionStorage.removeItem("cartQuantity");

          // setTimeout(() => {
          //   window.location.href = `/payment`;
          // }, 1500);
        })
        .catch((err) => console.log(err));
      // return navigate("/payment");
    }
  }, [submit, formError, navigate]);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validateForm = (value) => {
    let errors = {};
    if (!value.chooseDelivery) {
      errors.chooseDelivery = "Please choose a delivery type";
    }
    if (!value.promoCode && promoCode) {
      errors.promoCode = "Please indicate your promo code";
    }
    if (value.promoCode && value.promoCode.length < 5 && promoCode) {
      errors.promoCode = "Invalid promo code!";
    }

    return errors;
  };

  return (
    <section className="checkout-personal-information">
      {submit && Object.keys(formError).length === 0 ? (
        <article className="success-payment">
          <div
            id="snap-container"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 999999,
              width: "100%",
              height: "100%",
            }}
          ></div>

          <section className="success-payment-title">
            <h2>Your food is on the way!</h2>
            <p>
              Thank you for the order. We will update your order status once the
              restaurant confirms it.{" "}
            </p>
          </section>
          <img src={Tick} alt="" aria-hidden="true" />
          <section className="payment-details">
            <p>
              Amount paid: <span>{totalPayment} $</span>
            </p>
            <p>
              Transaction id: <span>{transactionId}</span>
            </p>
            <h3>Est. delivery time: 24mins.</h3>
          </section>
          <section className="success-payment-redirection">
            <Link
              className="active-button-style"
              to="/order"
              onClick={ResetLocation}
            >
              Track my order
            </Link>
            <Link to="/menu" onClick={ResetLocation}>
              Order something else
            </Link>
          </section>
        </article>
      ) : (
        <>
          <h3>
            Personal information{" "}
            <span>
              <Link onClick={ResetLocation} to="/profile">
                Edit profile
              </Link>
            </span>
          </h3>
          <section>
            <p>{currentUser.fullname}</p>
            <p>{currentUser.email}</p>
            {currentUser.address !== null ? (
              <p>{currentUser.address}</p>
            ) : (
              <p className="checkout-address">
                You haven't added address yet
                <span>
                  <Link onClick={ResetLocation} to="/profile">
                    Add address
                  </Link>
                </span>
              </p>
            )}
            <span className="fullname-error-cpage">{formError.address}</span>
            {currentUser.number !== null ? (
              <p>{currentUser.number}</p>
            ) : (
              <p className="checkout-number">
                Please add you contact number
                <span>
                  <Link onClick={ResetLocation} to="/profile">
                    Add number
                  </Link>
                </span>
              </p>
            )}
            <span className="fullname-error-cpage">{formError.number}</span>
          </section>
          <form onSubmit={handleSubmit}>
            <h3>Delivery details</h3>
            <label
              htmlFor="takeaway"
              className="takeaway-option"
              name="chooseDelivery"
            >
              <RiShoppingBagLine />
              Takeaway
              <input
                className="takeaway"
                type="radio"
                placeholder="Address"
                value="takeaway"
                name="chooseDelivery"
                onChange={handleValidation}
              />
            </label>
            <label
              htmlFor="delivery"
              className="delivery-option"
              name="chooseDelivery"
            >
              <FaShippingFast />
              Delivery
              <input
                className="delivery"
                type="radio"
                placeholder="Address"
                value="delivery"
                name="chooseDelivery"
                onChange={handleValidation}
              />
            </label>
            <span className="fullname-error-cpage">
              {formError.chooseDelivery}
            </span>
            <section className="promo-code">
              {promoCode === false ? (
                <p onClick={togglePromocode}>I have a promo code!</p>
              ) : (
                <React.Fragment>
                  <p onClick={togglePromocode}>No promo code</p>
                  <input
                    name="promoCode"
                    className=" pop-font"
                    type="text"
                    placeholder="Enter the 5-digit code"
                    onChange={handleValidation}
                    value={formValue.promoCode}
                  />
                </React.Fragment>
              )}
              <span className="fullname-error-cpage">
                {formError.promoCode}
              </span>
            </section>
            <article className="checkout-carttotals">
              {productsQuantity === 0 ? null : (
                <section className="cart-totals">
                  {/* <section className="totals-content">
                    <h4 className="cart-totals-sum">Tax 10%:</h4>
                    <p>$ {taxes}</p>
                  </section> */}
                  <section className="totals-content">
                    <h4 className="cart-totals-sum">Quantity:</h4>
                    <p> {productsQuantity}</p>
                  </section>
                  <section className="totals-content">
                    <h4 className="cart-totals-sum">Total:</h4>
                    <p> {
                    rupiah
                    (totalPayment)}</p>
                  </section>
                </section>
              )}
            </article>
            <button type="submit" className="active-button-style">
              Proceed to payment
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default CheckoutForm;
