import React from "react";
//components
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

const CheckoutBtn = ({ className, validLogin, activateLoginModal }) => {
  return (
    <React.Fragment>
      {validLogin ?
        <LinkButton
          onClick={ResetLocation}
          to="/checkout"
          className={className}
        >Pembayaran</LinkButton>
        :
        <button className={className} onClick={() => { ResetLocation(); activateLoginModal() }}>
          Pembayaran</button>
      }
    </React.Fragment>

  );
}

export default CheckoutBtn;
