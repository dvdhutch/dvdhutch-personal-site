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
        <p>I live in New York and attend Teachers College, Columbia University. My previous experience includes:</p>
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
        <ul className={utilStyles.arrowList}>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={`${utilStyles.lightTextColor} ${utilStyles.indentedText}`}>The role of <a href="https://www.ted.com/talks/sal_khan_the_amazing_ai_super_tutor_for_students_and_teachers/c">artificial intelligence</a> in the future of education</span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={`${utilStyles.lightTextColor} ${utilStyles.indentedText}`}>The <a href="http://paulgraham.com/cities.html">stories</a> cities tell</span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={`${utilStyles.lightTextColor} ${utilStyles.indentedText}`}><a href="https://www.noahpinion.blog/p/interview-patrick-collison-co-founder">American Dynamism</a></span>
          </li>
          <li className={utilStyles.workItem}>
            <span className={utilStyles.arrow}>▶</span>
            <span className={`${utilStyles.lightTextColor} ${utilStyles.indentedText}`}><a href="https://sites.psu.edu/academy/2023/12/03/tales-of-water-and-mountains/">Early American History</a></span>
          </li>
        </ul>
      </section>

<section className={utilStyles.headingMd}>
  <h2>Education</h2>
  <div className={utilStyles.workContainer}>
    <div className={utilStyles.workRow}>
      <div className={utilStyles.workTitle}>MA, <a href="https://www.tc.columbia.edu">Teachers College, Columbia University</a></div>
      <div className={utilStyles.workDate}>2024-</div>
    </div>
    <div className={utilStyles.workRow}>
      <div className={utilStyles.workTitle}>BME, <a href="https://www.shc.psu.edu">Penn State Schreyer Honors College</a></div>
      <div className={utilStyles.workDate}>2020-2024</div>
    </div>
    <div className={utilStyles.workRow}>
      <div className={utilStyles.workTitle}><a href="https://www.academy.psu.edu">Presidential Leadership Academy at Penn State</a></div>
      <div className={utilStyles.workDate}>2021-2024</div>
    </div>
  </div>
  <p> <a class='button' href="https://twitter.com/dvdhutch">Twitter</a></p>
        <p> <a class='button' href="mailto:davidmhutchinson@hotmail.com">Email</a></p>
        <p> <a class='button' href="https://www.linkedin.com/in/dvdhutch/">LinkedIn</a></p>
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
