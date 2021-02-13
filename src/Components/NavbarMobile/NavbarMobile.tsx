/** @format */
import "./NavbarMobile.scss";

import React, { useState } from "react";
import { Drawer, Button, Space, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const NavbarMobile: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='nav-mobile'>
      <Button onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        placement='right'
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Space direction='vertical' className='mob-nav'>
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
      </Drawer>
    </div>
  );
};
export default NavbarMobile;
