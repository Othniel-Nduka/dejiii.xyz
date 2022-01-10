/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export const About = () => {
  return (
    <section className="about-wrapper">
      <div>
        <img
          src="/pp.png"
          alt="Dejiii | Abdulazeez Adeyiga | Frontend Developer"
          className="display-picture"
        />
      </div>
      <article>
        <h1 className="about-header">
          What I’ve been up to for the past 4 years
        </h1>
        <p className="small-text">
          I have built software products for companies and startups around the
          world ranging from simple to complex solutions while maintaining
          standard software development processes and practices...
        </p>
        <p className="small-text mt-2">
          I have experience with technologies like Typescript, React and Next
          JS, React Native and Node and I have a solid background in designing
          User interfaces using Figma and Adobe Xd.
        </p>
        <p className="small-text mt-2">
          What matters more is how I have helped tech companies and startups
          create experience with their softwares through building useful and
          functional softwares.
        </p>
      </article>
    </section>
  );
};
