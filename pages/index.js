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
        <p> <b> What important truth do very few people agree with you on? </b> </p>
        <p> <b> Or, to the entrepreneur, what valuable company is nobody building? <a href="https://en.wikipedia.org/wiki/Zero_to_One">(<i>Thiel</i>)</a> </b> </p>
        <p> I work as a Product Manager at <a href="https://www.liveohana.ai">Ohana</a> and am an incoming teacher at the <a href="https://www.goprojectnyc.org">GO Project</a> in New York. </p>
        <p> Previously, I led <a href="https://www.suoni.co">Suoni</a>, where I worked on making resources more accessible for teachers. </p>
        <p> I am a student in the <a href="https://www.shc.psu.edu">Penn State Schreyer Honors College</a> and a fellow in the <a href="https://www.academy.psu.edu">Presidential Leadership Academy at Penn State</a>.
        </p>
        <p> <a class='button' href="https://twitter.com/dvdhutch">Twitter</a></p>
        <p> <a class='button' href="mailto:davidmhutchinson@hotmail.com">Email</a></p>
        <p> <a class='button' href="https://drive.google.com/file/d/1k3JSrN3WBgRfVW_7n5N2oYpYJyrzM0oG/view?usp=sharing">Resume</a></p>
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