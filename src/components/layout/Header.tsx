import * as React from 'react';

import headerIcon from '../../assets/images/user-icon.png';
// import headerIcon from '../../assets/images/user-icon.png'

const Header = () => {
  // const headerIcon = '../../assets/images/user-icon.png'
  return (
    <>
       <header className="header">
            <img src={headerIcon} alt="" className="header__icon mr-sm" />
            <span className="text__title-lg">Practitioner</span>
       </header>
    </>
  );
};


export default Header;
