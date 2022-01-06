import { ProjectCard } from "./ProjectCard";

export const PastProjects = () => {
  const data = [
    {
      id: 1,
      title: "NewHomes",
      industry: "Real Estate",
      path: "/newhomes.png",
      link: "https://newhomes.ng",
    },
    {
      id: 3,
      title: "DABA (Digital Abundance)",
      industry: "EdTech",
      path: "/daba.png",
      link: "https://daba.school",
    },
    {
      id: 4,
      title: "Aorthar",
      industry: "Software Development",
      path: "/aorthar.png",
      link: "https://aorthar.com",
    },
    {
      id: 5,
      title: "Spottr",
      industry: "Social Marketing",
      path: "/spottr.png",
      link: "https://thespottrapp.com/",
    },
    {
      id: 6,
      title: "Bitmasta",
      industry: "FinTech",
      path: "/bitmasta.png",
      link: "https://bitmasta.io",
    },
    {
      id: 7,
      title: "Boundlesspay",
      industry: "FinTech",
      path: "/boundlesspay.png",
      link: "https://boundlesspay.com/",
    },
    // { id: 8, title: "Realwears", industry: "Fashion", path: "/realwears.png" },
  ];

  return (
    <section className="project-wrapper">
      <p className="center-text large-green-text">Projects</p>
      <h1 className="center-text desc-text mb-4 w-100 mt-1">
        Some reputable projects I’ve worked on in the past
      </h1>

      <section className="project-display">
        {data.map(({ link, id, path, title, industry }) => (
          <ProjectCard
            key={id}
            link={link}
            src={path}
            title={title}
            industry={industry}
          />
        ))}
      </section>

      <p className="center-text large-green-text mt-2">Say Hello</p>
      <h1 className="center-text medium-text mb-4">
        <a href="mailto:hellodejiii@gmail.com" target="_blank" rel="noreferrer">
          hellodejiii@gmail.com
        </a>
      </h1>
    </section>
  );
};

export default PastProjects;
