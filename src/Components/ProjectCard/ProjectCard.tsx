/** @format */

import { Col, Row, Typography } from "antd";
import { useState } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ project, index }: any) => {
  const [showImg, setShowImg] = useState(false);
  const [cors, setCors] = useState({ xCor: 0, yCor: 0 });
  console.log(showImg);
  return (
    <Row>
      <Col span={24} className='project-card'>
        {showImg && project.src ? (
          <img
            src={project.src}
            alt='img'
            style={{
              position: "absolute",
              left: cors.xCor - 800,
              top: cors.yCor - 300,
              width: 300,
              height: 200,
            }}
          />
        ) : (
          ""
        )}
        {index === 0 ? (
          <Typography.Title level={3} className='red-color'>
            Main Projects
          </Typography.Title>
        ) : (
          ""
        )}

        <h3
          onClick={() => window.open(project.Link, "_blank")}
          onMouseMove={(e) => {
            setCors({ xCor: e.clientX, yCor: e.clientY });
            setShowImg(true);
          }}
          onMouseOut={(e) => {
            setShowImg(false);
          }}
        >
          {project.projectName}
        </h3>

        {project?.Projects &&
          project?.Projects.map((pr: any, i: number) => {
            return (
              <div>
                {i === 0 ? (
                  <Typography.Title level={3} className='red-color'>
                    Other Small Projects
                  </Typography.Title>
                ) : (
                  ""
                )}
                <h3 key={i}>{pr.ProjectName}</h3>
              </div>
            );
          })}
      </Col>
    </Row>
  );
};
export default ProjectCard;
