import { getIndustryNews, type IndustryNewsItem } from "@/lib/industryNews";

const FALLBACK_NEWS: IndustryNewsItem[] = [
  {
    id: 1,
    title:
      "Navi Raises $100 Million Funding From Prosus: Sachin Bansal’s Fintech Gets Its First Institutional Cheque",
    url: "https://www.convergence-now.com/fintech/navi-raises-100-million-funding-from-prosus-sachin-bansals-fintech-gets-its-first-institutional-cheque/",
    image: "https://www.convergence-now.com/wp-content/uploads/2026/08/Navi-Rasies.jpeg",
  },
  {
    id: 2,
    title: "NTA Faces AI Use Allegations Over UGC-NET Paper Errors",
    url: "https://www.convergence-now.com/artificial-intelligence/nta-faces-ai-use-allegations-over-ugc-net-paper-errors/",
    image: "https://www.convergence-now.com/wp-content/uploads/2026/08/onvrt-2026-08-20T173312.723.jpg",
  },
  {
    id: 3,
    title: "India’s Space Startup Ecosystem Reaches 440 as Private Sector Push Gathers Pace",
    url: "https://www.convergence-now.com/startup/indias-space-startup-ecosystem-reaches-440-as-private-sector-push-gathers-pace/",
    image: "https://www.convergence-now.com/wp-content/uploads/2026/08/India_Space_Startup.jpeg",
  },
  {
    id: 4,
    title: "Great Nicobar May Host Green AI Data Centre Amid ₹92,000 Cr Infra Push",
    url: "https://www.convergence-now.com/artificial-intelligence/great-nicobar-may-host-green-ai-data-centre-amid-₹92000-cr-infra-push/",
    image: "https://www.convergence-now.com/wp-content/uploads/2026/08/onvrt-2026-08-20T151539.649.jpg",
  },
  {
    id: 5,
    title: "OpenAI Slows AI Development After Rogue Agent Hacks Hugging Face",
    url: "https://www.convergence-now.com/artificial-intelligence/openai-slows-ai-development-after-rogue-agent-hacks-hugging-face/",
    image: "https://www.convergence-now.com/wp-content/uploads/2026/08/OpenAI-announces.jpeg",
  },
];

export default async function IndustryNewsSection() {
  const news = await getIndustryNews();
  const items = news.length > 0 ? news : FALLBACK_NEWS;

  return (
    <section className="section-padding section-ai-communities">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div
            className="col-xl-4 col-lg-5 col-md-9 col-7 order-1 order-lg-1"
            data-aos="fade-up"
          >
            <div className="ci-news-home-logo" data-aos="fade-up">
              {" "}
              <a href="https://www.convergence-now.com/" target="_blank" rel="noreferrer">
                <img
                  loading="lazy"
                  src="/images/convergence-now-news-CI-home-logo.png"
                  alt="Convergence Now News"
                  title="Convergence Now"
                />
              </a>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-5 col-md-12 col-12 order-3 order-lg-2"
            data-aos="fade-up"
          >
            <div className="ci-news-heading">All the Industry News at One Place</div>
          </div>
          <div
            className="col-xl-2 col-lg-2 col-md-3 col-5 order-2 order-lg-3 text-end"
            data-aos="fade-up"
          >
            <a
              href="https://www.convergence-now.com/"
              className="ci-news-read-btn"
              target="_blank"
              rel="noreferrer"
            >
              Read All News <i className="far fa-arrow-right btn-arrow-icon" />
            </a>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-12" data-aos="fade-up">
            <div className="owl-carousel owl-theme" id="ai-communities-carousel-home">
              {items.map((item) => (
                <div className="item" key={item.id}>
                  <div className="home-carousel-block-main">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <div className="home-carousel-img-block-main">
                        <img loading="lazy" src={item.image} alt={item.title} />
                      </div>
                      <div className="home-carousel-text-main">
                        <div className="home-ci-news-text">{item.title}</div>
                        <span className="home-ci-news-btn">
                          <i className="far fa-arrow-right btn-arrow-icon" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
