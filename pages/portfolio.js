// pages/portfolio.js
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Portfolio</h1>
        <p>Work in progress...</p>
      </section>
    </Layout>
  );
}
