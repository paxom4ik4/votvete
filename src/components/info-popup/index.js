import React from 'react';

import "./info-popup.css";

const InfoPopup = props => {
    return (
        <div className={props.className || "info-popup"}>
            <div className={`info-popup_content ${props.type}`}>{props.children}</div>
        </div>
    )
}

export default InfoPopup;