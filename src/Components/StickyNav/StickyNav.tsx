/** @format */

import "./StickyNav.scss";
import { Space, Typography } from "antd";
import { NavLink } from "react-router-dom";

const StickyNav = () => {
  return (
    <Space direction='vertical' className='sticky-nav'>
      <NavLink
        to='/'
        exact
        activeClassName='activeClass'
        className='hoverEffect'
      >
        <div className='custom-line' />
        <Typography.Text>About</Typography.Text>
      </NavLink>
      <NavLink
        to='/projects'
        activeClassName='activeClass'
        className='hoverEffect'
      >
        <div className='custom-line' />
        <Typography.Text>Projects</Typography.Text>
      </NavLink>
      <NavLink
        to='/skills'
        activeClassName='activeClass'
        className='hoverEffect'
      >
        <div className='custom-line' />
        <Typography.Text>Skills</Typography.Text>
      </NavLink>
      <NavLink
        to='/contact'
        activeClassName='activeClass'
        className='hoverEffect'
      >
        <div className='custom-line' />
        <Typography.Text>Contact</Typography.Text>
      </NavLink>
    </Space>
  );
};
export default StickyNav;
