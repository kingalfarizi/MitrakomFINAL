import React from 'react'
//Images
import Visa from '../../assets/images/payment-methods/visa-icon.svg'
import MasterCard from '../../assets/images/payment-methods/mastercard-icon.svg'
import ApplePay from '../../assets/images/payment-methods/applepay-icon.svg'
import GooglePay from '../../assets/images/payment-methods/googlepay-icon.svg'

export default class FooterContact extends React.Component {
  render() {
    return (
      <section className="footer-contact  flex-container flex-column">
        <h3>Memiliki Pertanyaan?</h3>
        <p>+62 852-8146-8516</p>
        <p>mitrakomcs@gmail.com</p>
        <p>8:00 - 23:00</p>
        <section className="accepted-payments">
          <img width="50" height="50" src={Visa} alt="Visa card" />
          <img width="50" height="50" src={MasterCard} alt="Mastercard card" />
          <img width="50" height="50" src={ApplePay} alt="Apple pay" />
          <img
            width="50"
            height="50"
            className="googlepay"
            src={GooglePay}
            alt="Google pay"
          />
        </section>
      </section>
    )
  }
}
