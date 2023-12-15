import './shipping.scss';

import React from 'react';

import { Country, State } from 'country-state-city';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

export const ShippingPage = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry('IN').map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
            {/* Add the code for the STATE DROPDOWN*/}
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          {/* Enter thr code for contact            */}
          <div>
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" />
          </div>
          <Popup
            trigger={
              <Link to="/myorder">
                <button type="button">Confirm Order</button>
              </Link>
            }
            position="right center"
          >
            <div
              style={{
                color: 'red',
                transform: 'translate(0%,-50%)',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};
