import React from 'react';

import './Header.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';
const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase The New Flavor' />
      <h1 className='app__header-h1'>The Key to fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Sit Earth Lobortis Sed Ages Vivamus Molestie. How To Sauce Your Own Chocolate Tips. Et, Penatibus Aliquam Amet Earthus</p>
      <button className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
