import "../css/Portfolio.css";

function Portfolio(props) {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-header">PORTFOLIO PROJECTS</div>
      <ul className="portfolio-list">
        <li className="linealert">
          <h1>LINE ALERT</h1>
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
          <h1>THISCORD</h1>
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
            Full stack clone of Discord built on Ruby on Rails, React, and
            PostgresQL; Integrated WebSocket API allowing for live instant
            messaging
          </h3>
        </li>
        <li className="typerdrive">
          <h1>TYPER DRIVE</h1>
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
          <h3>
            Typing-based game built with JavaScript, HTML, and CSS; Animations
            created through JavaScript Canvas
          </h3>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
