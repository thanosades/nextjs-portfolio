import { useRef } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Projects from '../components/Projects';
import getPortfolioProjects from '../lib/getPortfolioProjects';
import styles from '../styles/Home.module.css';

export default function Home({ projects }) {
  const ref = useRef();

  const scrollToMission = () => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop - 60
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Thanos Dimitriades | Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Web developer portfolio for Thanos Dimitriades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero scrollToMission={scrollToMission} />
        <div ref={ref}></div>
        <Mission />
        <Projects projects={projects} />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const projects = await getPortfolioProjects();

  return {
    props: {
      projects
    }
  };
}
