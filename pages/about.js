import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout useHomeHeading>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am from Williamsport, PA and enjoy reading and writing about science, history, and geography, particularly with a focus on technological progress, markets, and economic history. Some things I've been reading and thinking about recently:</p>
        <ul>
          <li>
            In 2011 Andreesen Horowitz published <em><a href="https://a16z.com/why-software-is-eating-the-world/" target="_blank">Why Software Is Eating the World</a></em>
            <ul>
              <li className={utilStyles.lightText}>Today, you can swap every mention of 'software' and replace it with 'models'</li>
              <li className={utilStyles.lightText}>E.g. <em>Why Models are Eating the World</em></li>
            </ul>
          </li>
          <li>
            <a href="https://sites.psu.edu/academy/2023/11/03/a-brief-history-of-the-university/" target="_blank">A Brief History of the University</a>
            <ul>
              <li className={utilStyles.lightText}>I wrote a deep dive on the history of how and why universities work, and why they may or may not be in peril</li>
            </ul>
          </li>
          <li>
            Reading <em><a href="https://www.amazon.com/Land-Promise-Economic-History-United/dp/0061834807" target="_blank">Land of Promise: An Economic History of the United States</a></em>
          </li>
          <li>
            <a href="https://sites.psu.edu/academy/2023/12/03/tales-of-water-and-mountains/" target="_blank">Tales of water and mountains</a>
            <ul>
              <li className={utilStyles.lightText}>A reflection on the forces that shaped my hometown of Williamsport, PA, particularly during its first 100 years</li>
            </ul>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

