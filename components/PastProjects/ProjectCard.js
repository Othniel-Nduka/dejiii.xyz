import { Fade } from 'react-reveal';

/* eslint-disable @next/next/no-img-element */
export const ProjectCard = ({ link, src, id, title, industry }) => {
  return (
    <Fade delay={1000}>
      <div className="project-card">
        <a href={link} target="_blank" key={id} rel="noreferrer">
          <img src={src} alt="" className="w-100" />
          <div className="project-description">
            <h2 className="project-title">{title}</h2>
            <div className="project-industry">Industry: {industry}</div>
          </div>
        </a>
      </div>
    </Fade>
  );
};
