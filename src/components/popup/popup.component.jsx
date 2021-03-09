import React from 'react';
import './popup.component.css';

export const Popup = () => {
    return(
      <div className="popup-wrapper">
          <div ClassName="popup-header">
              <p>Hello</p>
          </div>
          <div className="popup-content">
              <div className="popup-body">
                <h4>Popup</h4> 
              </div>
            <div className="popup-footer">
                <button className="btn-cancel">Close</button>
            </div>
          </div>
      </div>
    )
}