import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";
import { useSearchParams, useLocation } from "react-router-dom";
import useSnap from "../payment/useSnap";

const EmptyCart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("id");
  const { snapEmbed } = useSnap();

  useEffect(() => {
    const token = searchParams.get("id");

    const embedSnap = () => {
      if (token) {
        snapEmbed(token, "snap-container", {
          onSuccess: function (result) {
            console.log("success", result);
            navigate("/checkout");
          },
          onPending: function (result) {
            console.log("pending", result);
            navigate("/checkout");
          },
          onClose: function () {
            navigate("/checkout");
          },
        });
      }
    };

    // Menunda eksekusi snapEmbed
    const delay = setTimeout(() => {
      embedSnap();
    }, 500);

    // Membersihkan timeout jika komponen dibongkar sebelum timeout berakhir
    return () => clearTimeout(delay);
  }, [searchParams, snapEmbed, navigate]);

  return (
    <React.Fragment>
      <h3>Oh, tidak, keranjang anda masih kosong!</h3>
      <p>Sepertinya Anda belum menambahkan apa pun ke keranjang Anda.</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
        Jelajahi Produk
      </Link>

      {token && (
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
      )}
    </React.Fragment>
  );
};

export default EmptyCart;
