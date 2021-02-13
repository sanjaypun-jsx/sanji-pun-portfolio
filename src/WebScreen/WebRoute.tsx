/** @format */
import React from "react";
import "./WebRoute.scss";
import { Col, Row, Affix } from "antd";
import TopNav from "Components/TopNav/TopNav";
import About from "./About/About";
import { Route, Switch, useLocation } from "react-router-dom";
import Projects from "./Projects/Projects";
import {
  ComponentTransition,
  AnimationTypes,
} from "react-component-transition";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const WebRoute = () => {
  const location = useLocation();

  return (
    <Row>
      <Col span={24}>
        <Affix offsetTop={0}>
          <TopNav />
        </Affix>
      </Col>
      <Col span={24}>
        <ComponentTransition
          enterAnimation={AnimationTypes.slideUp.enter}
          exitAnimation={AnimationTypes.slideDown.exit}
        >
          <Switch key={location.key} location={location}>
            <Route exact path='/' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </ComponentTransition>
      </Col>
    </Row>
  );
};

export default WebRoute;
