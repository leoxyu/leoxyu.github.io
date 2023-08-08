import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  // Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">about me</div>
        <div className="BigCard">
          {/* <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          /> */}
          <div className="AboutBio">
            hey, my name is <strong>leo yu</strong> and im a developer based in the greater vancouver area. i like creating things not only in code, but also in art, games or video format.
          </div>
          <div className="AboutBio tagline2">
            here are some of the technologies i have the most experience with.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
