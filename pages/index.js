import Head from 'next/head';
import Image from 'next/image';
import getPortfolioProjects from '../lib/getPortfolioProjects';
import Projects from '../components/Projects';
import styles from '../styles/Home.module.css';

export default function Home({ repositories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thanos Dimitriades - portfolio</title>
        <meta name="description" content="Web developer portfolio for Thanos Dimitriades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Thanos Dimitriades</h1>
       <h2>Web Developer</h2>
       <p>Coming soon...</p>
       <Projects repositories={repositories} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const repositories = await getPortfolioProjects(process.env.GITHUB_AUTH_TOKEN);
  return {
    props: {
      repositories: null
    }
  };
}
