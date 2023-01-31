import "../css/Info.css";

function Info(props) {
  return (
    <div className="info-wrapper">
      <div>
        <a
          href="https://www.linkedin.com/in/swchung/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
      <div>
        <a
          href="https://github.com/leochung97"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
      <div>
        <a href="resume.pdf" download="Leo Chung - Resume">
          Resume ↗
        </a>
      </div>
    </div>
  );
}

export default Info;
