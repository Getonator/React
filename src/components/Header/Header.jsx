import React from 'react';
import './Header.module.css';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://e7.pngegg.com/pngimages/86/962/png-clipart-staff-of-hermes-physician-doctor-of-medicine-caduceus-as-a-symbol-of-medicine-symbol-miscellaneous-logo.png'/>
        </header>
    )
}

export default Header;