import "./News.css";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";

import { FiArrowUpRight } from "react-icons/fi";

const newsArticles = [
  {
    image: hero1,
    category: "SOLAR ENERGY",
    date: "July 2026",
    title: "The Future of Solar Energy",
    description:
      "Discover how solar energy is helping homes and businesses move toward a cleaner and more sustainable future.",
  },
  {
    image: hero2,
    category: "RENEWABLE ENERGY",
    date: "July 2026",
    title: "Why Renewable Energy Matters",
    description:
      "Renewable energy solutions can help reduce environmental impact while providing reliable and efficient power.",
  },
  {
    image: hero3,
    category: "CLEAN ENERGY",
    date: "July 2026",
    title: "Building a Sustainable Future",
    description:
      "Learn how modern clean energy technologies are changing the way we produce and use electricity.",
  },
];

function News() {
  return (
    <div className="news-page">

      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-overlay">

          <span>OUR NEWS</span>

          <h1>Latest News & Articles</h1>

          <p>Home / News</p>

        </div>
      </section>

      {/* News Section */}
      <section className="news-section">

        <div className="news-header">

          <span className="news-tag">
            LATEST NEWS
          </span>

          <h2>
            Latest News & Insights
          </h2>

          <p>
            Stay updated with the latest news, ideas and insights
            about solar energy and renewable energy solutions.
          </p>

        </div>

        <div className="news-grid">

          {newsArticles.map((article, index) => (

            <article className="news-card" key={index}>

              <div className="news-image">

                <img
                  src={article.image}
                  alt={article.title}
                />

                <span className="news-category">
                  {article.category}
                </span>

              </div>

              <div className="news-content">

                <span className="news-date">
                  {article.date}
                </span>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.description}
                </p>

                <button className="news-read-more">
                  Read More
                  <FiArrowUpRight />
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default News;