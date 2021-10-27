import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'proptypes';

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <AddressLabel person={fromPerson} />
      <span className="receiver-address-label">
        <AddressLabel person={toPerson} />
      </span>
      <span className="stamp">
        <span className="stamp-text"><Stamp /></span>
      </span>
    </div>
  )
}

function AddressLabel({ person }) {
  return (
    <div className="address-label">
      <div className="sender-box">
        <span className="sender-name">{person.fullname}</span>
      </div>
      <div className="sender-address-box">
        <span className="sender-address-street">
          {person.address.street}
        </span>
        <br />
        <span className="sender-address-state-and-postal">
          {person.address.stateAndPostal}
        </span>
      </div>
    </div>
  )
}
AddressLabel.propTypes = {
  person: PropTypes.shape({
    firstname: PropTypes.string,
    surname: PropTypes.string,
    fullname: PropTypes.string,
    address: PropTypes.objectOf(PropTypes.string)
  })
};

const stamp = "STAMP";
// Note that Stamp below is actually a component
const Stamp = () => <span className="stamp-text">{stamp}</span>;
Stamp.propTypes = {
  stamp: PropTypes.string
}

const senderPerson = {
  firstname: "Mike",
  surname: "Bloomberg",
  fullname: "Mike Bloomberg",
  address: {
    street: "123 Fake St",
    stateAndPostal: "Boston, MA 02118"
  }
}

const receiverPerson = {
  firstname: "Oprah",
  surname: "Winfreh",
  //fullname: `${firstname} + " " + ${surname}`, // invalid code
  fullname: "Oprah Winfreh",
  address: {
    street: "123 Fake St",
    stateAndPostal: "San Francisco, CA 94101"
  }
};


ReactDOM.render(
  <React.StrictMode>
    <Envelope toPerson={receiverPerson} fromPerson={senderPerson} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
