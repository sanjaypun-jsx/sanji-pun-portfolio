/** @format */

import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import NavbarMobile from "Components/NavbarMobile/NavbarMobile";
import "./TopNav.scss";

const TopNav = () => {
  return (
    <Row justify='space-between' align='middle'>
      <Col xs={12} sm={12} md={16} lg={18} xl={20}>
        <Typography.Title level={4}>Sanji Pun</Typography.Title>
      </Col>
      <Col
        className='nav-col'
        xs={8}
        sm={4}
        md={3}
        lg={2}
        xl={1}
        style={{
          textAlign: "right",
        }}
      >
        <Typography.Link
          href='https://www.linkedin.com/in/sanjipun/'
          target='_blank'
        >
          <LinkedinFilled
            style={{ marginRight: 20, fontSize: 30, color: "#000000" }}
          />
        </Typography.Link>
        <Typography.Link href='https://github.com/sanjipun' target='_blank'>
          <GithubOutlined
            style={{ marginRight: 20, fontSize: 30, color: "#000000" }}
          />
        </Typography.Link>
        <NavbarMobile />
      </Col>
    </Row>
  );
};
export default TopNav;
