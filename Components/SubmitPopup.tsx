import * as React from 'react';
import { useState } from 'react';
import './Styles/SubmitPopup.css';

export default function SubmitPopup(props) {
  return props.trigger ? (
    <div className="modal">
      <div className="modal-content">
        <h2>{props.header}</h2>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
