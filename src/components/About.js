import React from "react";
import myImage from "../images/image.jpg";
function About() {
  return (
    <div className="about-me">
      <div className="about-me-text">
        <h3>01.About me</h3>
        <p>
          Hi, Im Evgeni Iseev. I enjoy creating programsthat may simplify our
          future. For the past three years I gain rich expirience in variety of
          programming languages,frameworks and tools. I belive that all our
          dreams can come true, if we have the courage to pursue them.
        </p>
      </div>
      <div className="about-me-img">
        <img src={myImage} alt="image" />
      </div>
    </div>
  );
}

export default About;
