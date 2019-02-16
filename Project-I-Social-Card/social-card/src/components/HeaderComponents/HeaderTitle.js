import React from 'react';
import './Header.css';
const toDay = new Date().getTime();
console.log(toDay);

const HeaderTitle = () => {
    return (
        <div className="flexbox2">
            <h4>Lambda School</h4>
            <p>@Lambda School · 26 jan</p>
        </div>
    );
};

export default HeaderTitle;
