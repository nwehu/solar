import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Green CTA */}

      <div className="footer-cta">

        <h2>
          Fastest & secure way to get
          <br />
          clean, safe and renewable
          <br />
          energy
        </h2>

        <button>
          GET FREE A QUOTE
        </button>

      </div>

      {/* Footer Body */}

      

        <div className="footer-main">

  {/* Logo */}

  <div className="footer-col">

    <h2 className="footer-logo">
      SOLURIS
    </h2>

    <p>012 Brooklyn Street, 57</p>

    <p>New York, USA</p>

    <p>needhelp@domain.com</p>

    <h3 className="phone">
      999 333 0000
    </h3>

  </div>

  {/* Services */}

  <div className="footer-col">

    <h3 className="footer-title">
      Service
    </h3>

    <ul>

      <li>Reliability & Punctuality</li>

      <li>Trusted Franchise</li>

      <li>Warehouse Storage</li>

      <li>Real Time Tracking</li>

      <li>Transparent Pricing</li>

    </ul>

  </div>

  {/* Pages */}

  <div className="footer-col">

    <h3 className="footer-title">
      Pages
    </h3>

    <ul>

      <li>About</li>

      <li>New Projects</li>

      <li>Our History</li>

      <li>Contact</li>

      <li>Blog Posts</li>

    </ul>

  </div>

  {/* Newsletter */}

  <div className="footer-col">

    <h3 className="footer-title">
      Newsletter
    </h3>

    <p className="newsletter-text">
      Subscribe our newsletter to get our latest update & news.
    </p>

    <div className="newsletter-box">

      <input
        type="email"
        placeholder="Your Email Address..."
      />

      <button>
        →
      </button>

    </div>

  </div>

</div>

      

    </footer>
  );
}

export default Footer;