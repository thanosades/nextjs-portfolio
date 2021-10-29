import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import getPortfolioProjects from '../lib/getPortfolioProjects';
import styles from '../styles/Home.module.css';

export default function Home({ repositories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thanos Dimitriades - portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Web developer portfolio for Thanos Dimitriades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <Hero />
       <Projects repositories={repositories} />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const repositories = await getPortfolioProjects(process.env.GITHUB_AUTH_TOKEN);
  
  return {
    props: {
      repositories
    }
  };
}
