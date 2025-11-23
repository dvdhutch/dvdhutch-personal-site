import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I live in New York and lead <a href="https://www.helvetica-labs.com/" target="_blank">Helvetica Labs</a>, where we're building <a href="https://www.vevey.ai/" target="_blank">Vevey</a>, an AI game engine.</p>
        <p>Before that I've enjoyed building products and teaching. Some highlights include:</p>
        <ul>
          <li>
            Built <a href="https://www.landmarkr.app/" target="_blank">Landmarkr</a>
            <ul>
              <li className={utilStyles.lightText}>Daily geography guessing puzzle with over 40,000 plays (launched Oct 2025)</li>
            </ul>
          </li>
          <li>
            Zankel Fellow at Columbia University
            <ul>
              <li className={utilStyles.lightText}>TA for a robotics course</li>
            </ul>
          </li>
          <li>
            CS Teacher at <a href="https://www.las.ch/" target="_blank">Leysin American School</a>
            <ul>
              <li className={utilStyles.lightText}>Intro AI/ML at Swiss boarding school</li>
            </ul>
          </li>
          <li>
            Intern at <a href="https://liveohana.ai/" target="_blank">Ohana</a>
            <ul>
              <li className={utilStyles.lightText}>Product for real estate tech, backed by <a href="https://en.wikipedia.org/wiki/Spencer_Rascoff" target="_blank">Zillow founder</a></li>
            </ul>
          </li>
          <li>
            Researcher at Penn State
            <ul>
              <li className={utilStyles.lightText}>Published <a href="https://honors.libraries.psu.edu/catalog/9008dmh6286" target="_blank">undergraduate thesis</a> on GPT-3 in education following its launch</li>
            </ul>
          </li>
        </ul>
        <img src="/images/1500x500.jpeg" alt="" style={{ width: '100%', maxWidth: '100%', marginTop: '2rem', marginBottom: '2rem' }} />
        <p>
          <Link href="/about"><a>What I'm reading and writing</a></Link>
        </p>
        <p>
          Connect with me on <a href="https://twitter.com/dvdhutch" target="_blank">twitter</a> or <a href="https://www.linkedin.com/in/dvdhutch/" target="_blank">linkedin</a>, or send a note to david at vevey dot ai.
        </p>
      </section>
    </Layout>
  );
}
