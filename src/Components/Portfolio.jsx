/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Python for beginners trophy!",
    description:
      "I got my first trophy after finished my first learning path on the Microsoft Learn platform",
    url: "https://learn.microsoft.com/es-es/training/achievements/learn.beginner-python.trophy?username=CMDaniela&sharingId=B40CCF31AC00151",
  },
  {
    title: "Obtain my Alpha Milestone on Microsoft Learn Student Ambassador",
    description:
      "I got my certificate in Microsoft Learn Student Ambassador's program for completing my first learning path on the Microsoft Learn platform",
    url: "https://studentambassadors.microsoft.com/studentambassadors/certificate/b146ac85-3342-4d3a-a797-dc7c4ce9ca8a",
  },
  {
    title: "My first challenge completed in Microsoft Learn",
    description:
      'I decided to take the "Start your career in application development and tools" challenge and completed it. Achievement that helped me to learn tools like Git, GitHub and others.',
    url: "https://learn.microsoft.com/es-es/users/cmdaniela/challenges",
  },
  {
    title: "My first repository in GitHub",
    description:
      "As part of the challenge, I learned some things about GitHub as an introduction, learning that helped me to create my first repository on GitHub from a template.",
    url: "https://github.com/dantrixxheron/curso-intro-github",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
