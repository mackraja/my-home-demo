import React from 'react';
import callIcon from '../../../../style/images/Icon_Contact_Call.png';
import chatIcon from '../../../../style/images/Icon_Contact_Chat.png';
import emailIcon from '../../../../style/images/Icon_Contact_Email.png';

const Footer = (props: any) => { 

  return (
    <footer>
      <nav className="footer-button-nav">
        <p className="fancy-heading"><span>Need Help?</span></p>
        <div id="IconButtonFooter" className="icon-button-footer">
        </div>
        <div className="container">
        <div className="row">
          <div className="hidden-md col-lg-2"></div>
          <div className="col-xs-12 col-sm-4 col-lg-3">
              <a href="tel:844-274-8497" className="footer-icon-button" >
                  <img src={callIcon} alt="Call Us" />
                    <span>Call us at 844.274.8497</span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a href="mailto:hello@dignityhealth.org" className="footer-icon-button">
                <img src={emailIcon} alt="Email Us" />
                  <span>Email us</span>
              </a>
              </div>
              <div className="col-xs-12 col-sm-3">
                <a href="#" className="footer-icon-button" title="Chat with us">
                  <img src={chatIcon} alt="Chat With Us" />
                  <span>Chat with us</span>
                </a>
              </div>
                <div className="hidden-md col-lg-1"></div>
          </div>
        </div>
	      </nav>
      <div className="clearfix"></div>
	</footer>
  );
};

export default Footer;
