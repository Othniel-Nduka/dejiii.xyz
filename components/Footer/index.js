/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <section className="footer-container">
      <div className="d-flex">
        <div className="left-section">
          <img src="/logo.svg" alt="" />
          <p className="about-text mt-2">Designed and Developed by me</p>
        </div>
        <div className="right-section">
          <p className="footer-links-header mb-3">Links</p>
          <div className="small-text">LinkedIn</div>
          <div className="mt-1 small-text">Instagram</div>
          <div className="mt-1 small-text">Twitter</div>
          <div className="mt-1 small-text">Resume</div>
          <div className="mt-1 small-text">Blog</div>
        </div>
      </div>
      <p className="footer-text mt-5"> &#169; Copyright Dejiii 2022</p>
    </section>
  );
};
