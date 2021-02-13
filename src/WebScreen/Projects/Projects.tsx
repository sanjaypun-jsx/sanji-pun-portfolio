/** @format */

import { Col, Row, Typography } from "antd";
import ProjectCard from "Components/ProjectCard/ProjectCard";
import "./Projects.scss";
import { ProjectList } from "Files/Projects.js";

const Projects = () => {
  return (
    <Row justify='space-between' align='middle' className='flex-row-projects'>
      <Col xs={2} sm={2} md={2} lg={2} className='projects'>
        <Typography.Title
          level={2}
          className='rotate-text-projects technologies-text'
        >
          Hello World.
        </Typography.Title>
      </Col>
      <Col xs={20} sm={20} md={18} lg={18} span={20}>
        {ProjectList &&
          ProjectList.map((project, index) => {
            return <ProjectCard key={index} index={index} project={project} />;
          })}
      </Col>
    </Row>
  );
};
export default Projects;
