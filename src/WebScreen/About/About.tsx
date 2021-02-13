/** @format */

import { Button, Col, Row, Typography } from "antd";
import TypeWriter from "Components/TypeWriter/TypeWriter";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <Row
      gutter={[20, 20]}
      justify='center'
      align='middle'
      style={{ width: "auto", height: "80vh" }}
      className='row-about'
    >
      <Col className='col-style' xs={24} sm={18} md={9} lg={9}>
        <Typography.Title level={1} className='title-name'>
          Sanji
        </Typography.Title>
        <Typography.Title level={1} className='title-name'>
          Pun
        </Typography.Title>
        <div className='btn-grp'>
          <Link to='/contact'>
            <Button size='large' className='button-style'>
              Hire Me
            </Button>
          </Link>
          <Link to='/Files/Resume-SanjayKPun.pdf' target='_blank' download>
            <Button size='large' className='button-style'>
              Resume
            </Button>
          </Link>
        </div>
      </Col>
      <Col
        className='col-style'
        xs={20}
        sm={18}
        md={7}
        lg={7}
        style={{ textAlign: "right" }}
      >
        <Typography.Title level={4}>Sanjay Kr Pun</Typography.Title>
        <Typography.Title level={4}>Web Developer</Typography.Title>
        <Typography.Title level={4} className='title-color'>
          ReactJS & AntD
        </Typography.Title>
        <TypeWriter />
      </Col>
      <Col xs={2} sm={2} md={1} lg={1}>
        <Typography.Title level={2} className='rotate-text'>
          Portfolio.
        </Typography.Title>
      </Col>
    </Row>
  );
};
export default About;
