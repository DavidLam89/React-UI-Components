import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
    <div className ="flexbox1">
        <div className ="imgcontainer">
            <ImageThumbnail />
        </div>
        <div className ="contentcontainer">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
    )
};

export default HeaderContainer;