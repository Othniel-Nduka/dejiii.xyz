import Head from 'next/head';
import {
  About,
  Footer,
  LandingPage,
  PastProjects,
  NavBar,
} from '../components';

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Dejiii | Abdulazeez Adeyiga | Frontend Engineer</title>
        <meta
          name="Dejiii"
          content="Abdulazeez Adeyiga (Dejiii) is a Frontend Engineer highly skilled at developing scalable web and mobile applications."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#111111" />
      </Head>

      <main className="container">
        <NavBar />
        <LandingPage />
        <About />
        <PastProjects />
      </main>
      <footer className="footer-wrapper">
        <Footer />
      </footer>
      {/* <div className="absolute">test</div> */}
    </div>
  );
}
