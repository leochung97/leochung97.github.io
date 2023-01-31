import "../css/Portfolio.css";

function Portfolio(props) {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-header">PORTFOLIO PROJECTS</div>
      <ul className="portfolio-list">
        <li className="linealert">
          <a
            href="https://aa-linealert.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            LINE ALERT ↗
          </a>
          <h2>
            2022 |{" "}
            <a
              href="https://github.com/leochung97/LineAlert"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </h2>
          <h3>
            Full stack application designed to alert users of hazards /
            discomforts on NYC subways; Built on the MERN stack (MongoDB,
            Express, React, Node.js)
          </h3>
        </li>
        <li className="thiscord">
          <a
            href="https://thiscord.onrender.com/#/"
            target="_blank"
            rel="noreferrer"
          >
            THISCORD ↗
          </a>
          <h2>
            2022 |{" "}
            <a
              href="https://github.com/leochung97/Thiscord"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </h2>
          <h3>
            Full stack clone of Discord built on Ruby on Rails, React, Ruby on
            Rails, and WebSockets
          </h3>
        </li>
        <li className="typerdrive">
          <a
            href="https://leochung97.github.io/Typer-Drive/"
            target="_blank"
            rel="noreferrer"
          >
            TYPER DRIVE ↗
          </a>
          <h2>
            2022 |{" "}
            <a
              href="https://github.com/leochung97/Typer-Drive"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </h2>
          <h3>Typing-based combat game built with JavaScript, HTML, and CSS</h3>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
