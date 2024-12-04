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
        <p>I live in New York and am an MA candidate at <Link href="https://columbia.edu"><a target="_blank">Columbia University</a></Link>, where I'm involved in the <Link href="https://www.snowdaylearninglab.org/team"><a target="_blank">Snow Day Learning Lab</a></Link> and <Link href="https://tltlab.org/"><a target="_blank">Transformative Learning Technologies Lab</a></Link>.</p>
        <p>Before that, I've had a number of experiences building and teaching, but always invested in <Link href="https://map.simonsarris.com/p/careful-technology"><a target="_blank">beautiful craft</a></Link>, <Link href="https://x.com/McConaughey/status/1822981269099028696"><a target="_blank">good design</a></Link>, and <Link href="https://linkedin.com/in/dvdhutch/#volunteering_experience"><a target="_blank">helping others</a></Link>.</p>
        <h3>Experience</h3>
        <ul className={utilStyles.arrowList}>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={utilStyles.indentedText}>Zankel Fellow at <Link href="https://columbia.edu"><a target="_blank">Columbia University</a></Link></span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={`${utilStyles.lightTextColor} ${utilStyles.indentedTextLight}`}>I teach kids how to code robots and advise an <Link href="https://www.firstlegoleague.org/"><a>FLL team</a></Link></span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={utilStyles.indentedText}>CS Teacher at <Link href="https://las.ch"><a>Leysin American School</a></Link></span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={`${utilStyles.lightTextColor} ${utilStyles.indentedTextLight}`}>Fundamental AI/ML concepts: beginner Python skills, pattern matching, supervised/unsupervised learning</span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span> 
            <span className={utilStyles.indentedText}>First product hire at <Link href="https://liveohana.ai"><a target="_blank">Ohana</a></Link></span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={`${utilStyles.lightTextColor} ${utilStyles.indentedTextLight}`}>Built the <Link href="https://www.dhutch.fyi/portfolio/ohana_blog"><a>company blog</a></Link> and the <Link href="https://www.dhutch.fyi/portfolio/ohana_neighborhood"><a>neighborhood information tool</a></Link></span>
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h3>Education</h3>
        <ul className={utilStyles.arrowList}>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={utilStyles.indentedText}>MA, <a href="https://www.tc.columbia.edu" target="_blank">Teachers College, Columbia University</a></span>
            <span className={utilStyles.workDate}>2024-</span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={utilStyles.indentedText}><a href="https://www.shc.psu.edu" target="_blank">Penn State Schreyer Honors College</a></span>
            <span className={utilStyles.workDate}>2020-2024</span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={utilStyles.indentedText}><a href="https://www.academy.psu.edu" target="_blank">Presidential Leadership Academy at Penn State</a></span>
          </li>
        </ul>
        <p> <a className='button' href="https://twitter.com/dvdhutch" target="_blank">Twitter</a></p>
        <p> <a className='button' href="https://www.linkedin.com/in/dvdhutch/" target="_blank">LinkedIn</a></p>
      </section>


      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section> */}
    </Layout>
  );
}
