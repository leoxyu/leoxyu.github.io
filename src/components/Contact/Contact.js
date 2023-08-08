import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">contact me at</div>
        <div className="BigCard">
          <Email>
            <span>lleeooyu@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:lleeooyu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              send mail
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
