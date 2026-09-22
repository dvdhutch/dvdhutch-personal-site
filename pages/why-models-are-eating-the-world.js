import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function WhyModelsAreEatingTheWorld() {
  const subtitle = 'This is an adaptation of <em><a href="https://a16z.com/why-software-is-eating-the-world/">Why Software Is Eating the World</a></em> by Marc Andreessen, originally published on August 20, 2011.';
  
  return (
    <Layout useHomeHeading subtitle={subtitle}>
      <Head>
        <title>Why Models Are Eating the World - {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingMd} style={{ fontWeight: 800 }}>Why Models Are Eating the World</h1>
        
        <p>Models are eating the world.</p>

        <p>More than 25 years after the peak of the dot-com bubble, a handful of AI companies are sparking controversy in Silicon Valley, due to their rapidly growing private market valuations and the staggering sums they are spending on compute. With scars from Webvan, Pets.com and the last few hype cycles still fresh in the investor psyche, people are asking, "Isn't this just a dangerous new bubble?"</p>

        <p>I, along with others, would argue the other side of the case. Many of the new AI companies are building real, fast-growing businesses with customers who pay for what they use. And, perhaps most telling, you can't have a bubble when people are constantly screaming "Bubble!"</p>

        <p>But too much of the debate is still around financial valuation, as opposed to the underlying value of what these companies are building. My own theory is that we are in the middle of a dramatic and broad technological and economic shift in which companies built on models are poised to take over large swathes of the economy.</p>

        <p>More and more major businesses and industries already run on models—from movies to agriculture to national defense—and many of the winners are Silicon Valley-style start-ups invading and overturning established industry structures. Over the next 10 years, I expect many more industries to be disrupted by models, with new world-beating companies doing the disruption in more cases than not.</p>

        <p>Why is this happening now?</p>

        <p>Seven decades into the computer revolution, two decades into the modern Internet, and a little more than a decade since deep learning started to work, all of the technology required for models to transform industries finally works and can be delivered at global scale.</p>

        <p>Billions of people carry a smartphone, and hundreds of millions now talk to an AI assistant every week—a habit that barely existed a few years ago. That puts the full power of a model in the pocket of nearly everyone, every moment of every day.</p>

        <p>On the back end, anyone with a credit card can call a frontier model through an API, which makes it easy to launch new global start-ups in many industries—without training a model of their own or building new infrastructure. And the price of a given level of model capability has fallen by orders of magnitude in just a few years, and keeps falling.</p>

        <p>With lower start-up costs and a vastly expanded market, the result is an economy in which, for the first time, almost any task that can be described in words can be handed to software—the dream of every AI researcher since the 1950s, finally delivered, several generations later.</p>

        <p>Perhaps the single most dramatic early example of models eating a traditional business is homework help. For years, Chegg built a large business selling students step-by-step answers. Then ChatGPT arrived and gave students a tutor that could answer almost any question for free. In 2023, Chegg told investors that ChatGPT was hurting its growth, and its stock fell by nearly half in a single day.</p>

        <p>Oops.</p>

        <p>Of course, many of today's biggest consumer companies were quietly model companies all along. Netflix and Spotify win in large part because their recommendation models decide what you watch and hear next. Every photo taken on a modern phone is processed by models before you ever see it. Google and Meta, the largest advertising businesses in history, run on models that decide which ad to show to whom, billions of times a day.</p>

        <p>What's new is that models have moved from ranking and recommending to actually doing the work. Customer support is being rebuilt around AI agents that resolve most requests without a human. And software engineering itself—the profession that ate the world last time—is being transformed, as coding assistants write a growing share of the code at companies large and small.</p>

        <p>Models are also eating much of the value chain of industries that are widely viewed as primarily existing in the physical world. Waymo's driverless cars already carry paying passengers through city streets with no one behind the wheel. Retailers and shippers like Walmart and FedEx depend on models to forecast demand and route inventory. And the success or failure of airlines hinges on their ability to price tickets and optimize routes and yields—with models.</p>

        <p>Oil and gas companies use models to interpret seismic data and decide where to drill. Agriculture is increasingly powered by models as well, from satellite analysis of soils to sprayers that use computer vision to tell weeds from crops, plant by plant.</p>

        <p>The financial services industry has run on models for decades, from quantitative trading to credit scoring. Practically every card transaction, from a cup of coffee to a new car, is checked by a fraud model in the fraction of a second before it's approved.</p>

        <p>Health care and education, in my view, are next up for fundamental transformation. Both are gigantic, critical industries that have historically been highly resistant to entrepreneurial change, and both are primed for tipping by great new entrepreneurs building on models. Imagine a doctor who has read every paper, or a tutor with infinite patience for every child.</p>

        <p>Even national defense increasingly runs on models. The modern combat soldier is embedded in a web of them that provides intelligence, communications, logistics and targeting. Autonomous drones fly missions without putting human pilots at risk. Intelligence agencies use models to sift through far more data than any team of analysts could.</p>

        <p>Companies in every industry need to assume that a model revolution is coming. That includes the software industry itself. Great incumbent software companies are increasingly threatened with irrelevance by AI-native start-ups whose products don't just store work, but do it.</p>

        <p>In some industries, particularly those with a heavy real-world component such as oil and gas, the model revolution is primarily an opportunity for incumbents. But in many industries, new ideas built on models will result in the rise of new Silicon Valley-style start-ups that invade existing industries with impunity. Over the next 10 years, the battles between incumbents and insurgents will be epic. Joseph Schumpeter, the economist who coined the term "creative destruction," would be proud.</p>

        <p>And while people watching the values of their 401(k)s bounce up and down might doubt it, this is a profoundly positive story for the American economy, in particular. It's not an accident that most of the leading AI labs are American companies. Our combination of great research universities, a pro-risk business culture, deep pools of innovation-seeking capital and reliable business and contract law is unprecedented and unparalleled in the world.</p>

        <p>Still, we face several challenges.</p>

        <p>First of all, the frontier moves fast, and building on it is expensive. A product that looks magical today can be a free feature of the next model release. The good news is that the companies that do succeed in these conditions are going to be extremely strong and resilient.</p>

        <p>Secondly, many people in the U.S. and around the world lack the education and skills required to participate in the great new companies coming out of the model revolution. This is a tragedy, since every company building with models is starved for people who know how to use them well. This problem is even worse than it looks, because many workers in existing industries will be stranded on the wrong side of the disruption and may never be able to work in their fields again. There's no way through this problem other than education, and we have a long way to go.</p>

        <p>Finally, the new companies need to prove their worth. They need to build strong cultures, delight their customers, establish their own competitive advantages and, yes, justify their rising valuations. No one should expect building a new high-growth company on models in an established industry to be easy. It's brutally difficult.</p>

        <p>The best of the new companies are really good at what they do. If they perform to expectations, they are going to be highly valuable cornerstone companies in the global economy, eating markets far larger than the technology industry has historically been able to pursue.</p>

        <p>Instead of constantly questioning their valuations, let's seek to understand how the new generation of technology companies are doing what they do, what the broader consequences are for businesses and the economy and what we can collectively do to expand the number of innovative new companies created in the U.S. and around the world.</p>

        <p>That's the big opportunity. I know where I'm spending my time.</p>
      </section>
    </Layout>
  );
}

