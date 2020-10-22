import React from 'react';
import dignityhealth from '../../../../style/images/dignity-health.png';

const Topbar = (props: any) => {
  
  return (
    <header>
      <div className="orange-bar"></div>
      <div className="nav-less-banner">
        <div className="container de-padded-logo-image-container">
          <div className="row">
            <div className="col-sm-10 header-center">
              <div className="logo-container">
                <a href="#">
                  <img src={dignityhealth} className="logo-image" alt="Dignity Health" />
                </a>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="language-toggle-container">
              </div>
            </div>
          </div>
        </div>      
        </div>
	  </header>
  );
};

export default Topbar;
