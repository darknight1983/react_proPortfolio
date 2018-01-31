import React, { Component } from 'react';
import './Contact.css'


class Contact extends Component {
  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
          <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
            <div className="demo-contact mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Dallas</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <ul className="contact-list mdl-list">
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-icon">location_on</i>
                    Dallas, Tx
                  </span>
                </li>
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-icon">email</i>
                    gjacolby83@gmail.com
                  </span>
                </li>
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-icon">email</i>
                    darknightnov@gmail.com
                  </span>
                </li>
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-icon">contact_phone</i>
                    (214) 504-8935
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}


export default Contact
