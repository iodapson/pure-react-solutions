import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'proptypes';

function CreditCard({ cardInfo }) {
  //*<span className="card-number">{cardInfo.cardNumber}</span>
  return (
    <div className="credit-card">
      <span className="bank-name">{cardInfo.bankName}</span>
      <div className="card-number-row">
        <CreditCardNumber theCardNumber={cardInfo.cardNumber} />
        <span className="first-four-digits-of-card-number">{cardInfo.firstFourDigitsOfCardNumber}</span>
      </div>
      <div className="card-validity-details">
        <span className="valid-thru-text">VALID THRU</span>
        <span className="validity-date">{cardInfo.validityDate}</span>
      </div>
      <CardHolderName theCardHolderName={cardInfo.cardHolderName} />
    </div>
  )
}
CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    bankName: PropTypes.string,
    cardHolderName: PropTypes.string,
    cardNumber: PropTypes.arrayOf(PropTypes.string),
    firstFourDigitsOfCardNumber: PropTypes.string,
    validityDate: PropTypes.string
  })
}

function CreditCardNumber({ theCardNumber }) {
  let items = React.Children.toArray(theCardNumber);
  let returnedArray = Array.of(items.map( (item, index) => <span key={index} className="four-digits-chunk">{item}</span>));
  items = null;
  return (
    <span className="credit-card-number">{returnedArray}</span>
  )
}

function CardHolderName({ theCardHolderName }) {
  let items = React.Children.toArray(theCardHolderName);
  let returnedJSX = Array.of(items.map( (item, index) => <span key={index} className="name-part">{item}</span>));
  items = null;
  return (
    <span className="card-holder-name">{returnedJSX}</span>
  )
}
let cardInfoObject = {
  bankName: "Big Bank, Inc.",
  cardHolderName: ["DUPE", "AKINOLA"],
  cardNumber: ["1234", "5678", "8765", "4321"],
  firstFourDigitsOfCardNumber: "1234",
  validityDate: "08/19"
}

ReactDOM.render(
  <React.StrictMode>
    <CreditCard cardInfo={cardInfoObject} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
