import React from "react";

import imageUniversity from "../images/universityLogo.png";

const imageUniAltText = "University of Colima's logo";
const Education = () => {
  return (
    <section id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={imageUniversity}
            style={{
              width: "100%",
              height: "40%",
              borderRadius: "10px",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            }}
            alt={imageUniAltText}
          />
        </div>
        <div style={{ maxWidth: "60%", padding: "2rem" }}>
          <h3 style={{ color: "#4E567E" }}>Universidad de Colima</h3>
          <p className="small"> Bachelor&apos;s degree in Software Engineering</p>
          <p className="small">2022 - Now</p>
          <p className="small">Colima, Mexico.</p>
        </div>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={imageUniversity}
            style={{
              width: "100%",
              height: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            }}
            alt={imageUniAltText}
          />
        </div>
        <div style={{ maxWidth: "60%", padding: "2rem" }}>
          <h3 style={{ color: "#4E567E" }}>Universidad de Colima</h3>
          <p className="small"> Associate Degree in Analyst Programmer </p>
          <p className="small">2019 - 2022 </p>
          <p className="small">Colima, Mexico.</p>
        </div>
      </div>
    </section>
  );
};
export default Education;
