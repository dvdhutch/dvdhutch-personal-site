import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hi, I'm David 👋 </p>
        <p> I'm interested in making education work better for the next generation of teachers. </p>
        <p> I lead <a href="https://suoni-build-3.webflow.io/">Suoni</a>, where we work on making resources more accessible for teachers. </p>
        <p> I study music education at <a href="https://www.arts.psu.edu">Penn State</a> and am a scholar in the <a href="https://www.academy.psu.edu">Presidential Leadership Academy</a>.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Essays</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => ( 
            <li className={utilStyles.listItem} key={id}>
             <Link href={`/posts/${id}`}>
               <a>{title}</a>
              </Link>
              <br />
             <small className={utilStyles.lightText}>
               <Date dateString={date} />
             </small>
           </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}