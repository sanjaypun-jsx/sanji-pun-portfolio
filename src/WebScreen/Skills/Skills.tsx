/** @format */

import { Col, Row, Typography } from "antd";
import { useState } from "react";
import "./Skills.scss";
import antd from "Assets/ant design.png";
import ts from "Assets/ts.png";
import mui from "Assets/mui.png";
import bt from "Assets/bt.png";
import js from "Assets/js.png";
import css from "Assets/css.png";
import react from "Assets/react.png";
import html from "Assets/html.png";

const Skills = () => {
  const [cors, setCors] = useState({
    xCor: 0,
    yCor: 0,
  });
  const [showImg, setShowImg] = useState({
    showHtml: false,
    showReact: false,
    showCss: false,
    showJS: false,
    showTS: false,
    showBootstrap: false,
    showMUI: false,
    showAntD: false,
  });
  const handleMouseOut = () => {
    setShowImg({
      ...showImg,
      showHtml: false,
      showAntD: false,
      showBootstrap: false,
      showMUI: false,
      showTS: false,
      showJS: false,
      showCss: false,
      showReact: false,
    });
  };
  return (
    <Row justify='center' align='middle' className='flex-row'>
      <Col className='col-style technologies' xs={19} sm={20} lg={14} md={19}>
        <Typography.Title level={2} className='title-color'>
          What I Use?
        </Typography.Title>
        {showImg.showHtml && (
          <img
            src={html}
            alt='img'
            className='style-img'
            style={{
              height: 120,
              width: 120,
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 200,
            }}
          />
        )}
        {showImg.showReact && (
          <img
            src={react}
            alt='img'
            style={{
              height: 120,
              width: 120,
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 200,
            }}
          />
        )}
        {showImg.showAntD && (
          <img
            src={antd}
            alt='img'
            style={{
              height: 120,
              width: 120,
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 200,
            }}
          />
        )}
        {showImg.showMUI && (
          <img
            src={mui}
            alt='img'
            style={{
              height: 120,
              width: 120,
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 200,
            }}
          />
        )}
        {showImg.showBootstrap && (
          <img
            src={bt}
            alt='img'
            style={{
              height: 120,
              width: 120,
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 200,
            }}
          />
        )}
        {showImg.showCss && (
          <img
            src={css}
            alt='img'
            style={{
              height: 120,
              width: 120,
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 200,
            }}
          />
        )}
        {showImg.showJS && (
          <img
            src={js}
            alt='img'
            style={{
              height: 120,
              width: 120,
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 200,
            }}
          />
        )}
        {showImg.showTS && (
          <img
            src={ts}
            alt='img'
            style={{
              height: 120,
              width: 120,
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 200,
            }}
          />
        )}
        <h3
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg({ ...showImg, showHtml: true });
          }}
          onMouseOut={handleMouseOut}
        >
          HTML
        </h3>
        <h3
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg({ ...showImg, showReact: true });
          }}
          onMouseOut={handleMouseOut}
        >
          ReactJS
        </h3>
        <h3
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg({ ...showImg, showCss: true });
          }}
          onMouseOut={handleMouseOut}
        >
          CSS/SCSS
        </h3>
        <h3
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg({ ...showImg, showJS: true });
          }}
          onMouseOut={handleMouseOut}
        >
          Javascript
        </h3>
        <h3
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg({ ...showImg, showTS: true });
          }}
          onMouseOut={handleMouseOut}
        >
          Typescript
        </h3>
        <Typography.Title level={2} className='title-color'>
          UI Frameworks
        </Typography.Title>
        <h3
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg({ ...showImg, showBootstrap: true });
          }}
          onMouseOut={handleMouseOut}
        >
          Bootstrap
        </h3>
        <h3
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg({ ...showImg, showMUI: true });
          }}
          onMouseOut={handleMouseOut}
        >
          Material UI
        </h3>
        <h3
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg({ ...showImg, showAntD: true });
          }}
          onMouseOut={handleMouseOut}
        >
          Ant Design
        </h3>
      </Col>
      <Col xs={4} sm={4} md={4} lg={5}>
        <Typography.Title level={2} className='rotate-text technologies-text'>
          Technologies.
        </Typography.Title>
      </Col>
    </Row>
  );
};
export default Skills;
