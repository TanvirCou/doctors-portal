import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Navbar from '../../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;