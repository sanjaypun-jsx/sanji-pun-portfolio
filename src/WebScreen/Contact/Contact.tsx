/** @format */

import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import "./Contact.scss";

const Contact = () => {
  return (
    <Row justify='space-around' align='middle' className='flex-row-contact'>
      <Col span={22} className='contact'>
        <Typography.Title level={3}>Reach Out to me.</Typography.Title>
        <Typography.Title level={3}>iamsanjaypun@gmail.com</Typography.Title>
        <Typography.Title level={3}>+977-9843807911</Typography.Title>
        <Typography.Link href='www.google.com' target='_blank'>
          <LinkedinFilled
            style={{ marginRight: 20, fontSize: 30, color: "#000000" }}
          />
        </Typography.Link>
        <Typography.Link href='www.google.com' target='_blank'>
          <GithubOutlined style={{ fontSize: 30, color: "#000000" }} />
        </Typography.Link>
        {/*<Typography.Title level={5}>
          Check out my blog! (Not Released Yet)
        </Typography.Title>*/}
      </Col>

      <Col span={2} className='projects'>
        <Typography.Title level={2} className='rotate-text technologies-text'>
          Get in Touch.
        </Typography.Title>
      </Col>
    </Row>
  );
};
export default Contact;
