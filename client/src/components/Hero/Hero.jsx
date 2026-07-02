import "./Hero.css";
import heroImage from "../../assets/images/hero1.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">

        <h1>
          Energize Society <br />
          Reliable Energy
        </h1>

        <p>
          Ecology Limited are a fully independent specialist 
          ecological consultancy, working across the UK. 
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Discover More
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;