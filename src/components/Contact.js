import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  return (
    <div className="contact-wrapper">
      <a href="mailto: leo.chung97@gmail.com?body= Hello Leo,">
        Email Me
        <FontAwesomeIcon icon={faEnvelopeOpenText} size="3x" />
      </a>
    </div>
  );
}

export default Contact;
