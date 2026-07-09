import "./WhyChoose.css";
import { FaCheck } from "react-icons/fa";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
function WhyChoose() {
  return (
    <section className="why-choose">

      <div className="why-dark">

        <div className="why-container">

          <div className="why-left">

            <span className="why-tag">
              WHY CHOOSE US
            </span>

            <h2>
              We are Building a
              <br />
              Sustainable Future
            </h2>

            <div className="feature">

              <div className="icon-circle">
                <FaCheck />
              </div>

              <div>
                <h3>Best Energy Solution</h3>

                <p>
                  The best energy solution depends on several
                  factors including your location, budget and
                  environmental considerations.
                </p>
              </div>

            </div>

            <div className="feature">

              <div className="icon-circle">
                <FaCheck />
              </div>

              <div>
                <h3>24/7 Technical Support</h3>

                <p>
                  We provide reliable technical support to keep
                  your renewable energy systems running smoothly.
                </p>
              </div>

            </div>

          </div>

          <div className="why-right">

            <p>
              We believe in a future where renewable energy
              sources play a vital role in reducing carbon
              emissions and creating a sustainable planet.
            </p>

          </div>

        </div>

      </div>

      <div className="why-bottom">

  <div className="bottom-container">

    <div className="stats">

  <div className="stat-item">

    <div className="progress-circle">

      <CircularProgressbar
        value={50}
        text="50%"
        styles={buildStyles({
          pathColor: "#d6722d",
          trailColor: "#ececec",
          textColor: "#222",
          strokeLinecap: "round",
        })}
      />

    </div>

    <div className="stat-text">

      <h3>Projects</h3>

      <p>Completed</p>

    </div>

  </div>

  <div className="stat-item">

    <div className="progress-circle">

      <CircularProgressbar
        value={90}
        text="90%"
        styles={buildStyles({
          pathColor: "#d6722d",
          trailColor: "#ececec",
          textColor: "#222",
          strokeLinecap: "round",
        })}
      />

    </div>

    <div className="stat-text">

      <h3>Clients</h3>

      <p>Satisfied</p>

    </div>

  </div>

</div>
  </div>

</div>

      <div className="contact-card">

  <h2>Fill the Form</h2>

  <form>

    <input type="text" placeholder="Your Name" />

    <input type="email" placeholder="Email Address" />

    <input type="text" placeholder="Phone Number" />

    <textarea
      placeholder="Message"
      rows="5"
    ></textarea>

    <button type="submit">
      Send Message
    </button>

  </form>

</div>

    </section>
  );
}

export default WhyChoose;