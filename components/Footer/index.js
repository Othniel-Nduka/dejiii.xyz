const year = new Date().getFullYear();

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <section className="footer-container">
      <div className="d-flex">
        <div className="left-section">
          <img src="/logo.svg" alt="" className="logo" />
        </div>
        <div className="right-section">
          <p className="footer-links-header mb-3">Links</p>
          <div className="small-text">
            <a
              href="https://www.linkedin.com/in/abdulazeez-adeyiga/"
              targer="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-1 small-text">
            <a
              href="https://www.instagram.com/1st.deji/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="mt-1 small-text">
            <a
              href="https://www.twitter.com/1stdeji/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="mt-1 small-text">
            <a
              href="https://drive.google.com/file/d/1sibdTYKGd2KErorWDgFUyZUiiU7805zg/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="mt-1 small-text">Blog</div>
        </div>
      </div>
      <hr className="mt-5 " />
      <p className="about-text mt-2">Designed and Developed by me</p>
      <p className="footer-text"> &#169; Copyright Dejiii {year}</p>
    </section>
  );
};
