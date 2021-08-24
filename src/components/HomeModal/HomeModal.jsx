import "./HomeModal.scss";
import { useRef } from "react";

// Components
import { CreditCard, Cash, PayPal } from "../../img/svg/svg";

const HomeModal = () => {
  const modal = useRef();
  const cancelBtn = useRef();

  const closeModal = (e) => {
    if (e.target === modal.current || e.target === cancelBtn.current) {
      modal.current.classList.remove("homemodal__active");
    }
  };
  return (
    <div ref={modal} className="homemodal" onClick={closeModal}>
      <form className="homemodal__form">
        <h1 className="homemodal__h1">payment</h1>
        <p className="homemodal__text">3 payment method available</p>
        <div className="homemodal__payment_method">
          <div className="homemodal__payment_method-header">payment method</div>
          <ul className="homemodal__payment_method-box">
            <li className="homemodal__payment_method-list">
              <input
                className="homemodal__payment_method-radio"
                type="radio"
                name="payment_card"
                id="credit-card"
              />
              <label
                className="homemodal__payment_method-label"
                htmlFor="credit-card"
              >
                <CreditCard />
                <span className="homemodal__payment_method-label-text">
                  credit card
                </span>
              </label>
            </li>
            <li className="homemodal__payment_method-list">
              <input
                className="homemodal__payment_method-radio"
                type="radio"
                name="payment_card"
                id="paypal"
              />
              <label
                className="homemodal__payment_method-label"
                htmlFor="paypal"
              >
                <PayPal />
                <span className="homemodal__payment_method-label-text">
                  paypal
                </span>
              </label>
            </li>
            <li className="homemodal__payment_method-list">
              <input
                className="homemodal__payment_method-radio"
                type="radio"
                name="payment_card"
                id="cash"
              />
              <label className="homemodal__payment_method-label" htmlFor="cash">
                <Cash />
                <span className="homemodal__payment_method-label-text">
                  cash
                </span>
              </label>
            </li>
          </ul>
          <div className="homemodal__form-input_text">Cardholder Name</div>
          <input
            className="homemodal__form-input"
            type="text"
            placeholder="Levi Ackerman"
            autoComplete="off"
          />
          <div className="homemodal__form-input_text">Card Number</div>
          <input
            className="homemodal__form-input"
            type="number"
            placeholder="2564 1421 0897 1244"
            autoComplete="off"
          />
          <ul className="homemodal__form-bottom_ul">
            <li className="homemodal__form-bottom_list">
              <div className="homemodal__form-input_text">Expiration Date</div>
              <input
                className="homemodal__form-input"
                type="number"
                placeholder="02/2022"
                autoComplete="off"
              />
            </li>
            <li className="homemodal__form-bottom_list">
              <div className="homemodal__form-input_text">CVV</div>
              <input
                className="homemodal__form-input"
                type="password"
                placeholder="....."
                autoComplete="off"
              />
            </li>
          </ul>

          <ul className="homemodal__form-bottom_ul">
            <li className="homemodal__form-bottom_list">
              <div className="homemodal__form-input_text">Order Type</div>
              <select className="homemodal__form-select">
                <option value="dine">Dine In</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
              </select>
            </li>
            <li className="homemodal__form-bottom_list">
              <div className="homemodal__form-input_text">Table no.</div>
              <input
                className="homemodal__form-input"
                type="text"
                placeholder="140"
                autoComplete="off"
                disabled
              />
            </li>
          </ul>
        </div>

        <div className="homemodal__form-buttons">
          <button ref={cancelBtn} className="homemodal__form-btn" type="button">
            cancel
          </button>
          <button
            className="homemodal__form-btn homemodal__form-btn-submit"
            type="submit"
          >
            Confirm Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeModal;
