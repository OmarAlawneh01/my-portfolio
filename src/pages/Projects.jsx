import React from "react";
import jetsetgovideo from "../assets/videos/jetsetgo-video.mp4";
import onlinestorevideo from "../assets/videos/online-store-video.mp4";
import taskmangamentvideo from "../assets/videos/task-mangament video.mp4";
import gamewebsitevideo from "../assets/videos/video for the game website.mp4";

function Projects() {
  return (
    <section className="projects" id="project">
      <h2 className="title">My Projects</h2>
      <p className="projects-subtitle">Selected work with short demos.</p>

      <div className="projects-grid">
        <article className="proj-card reveal">
          <div className="proj-head">
            <h3>JetSetGo</h3>
            <a
              className="proj-link"
              href="https://github.com/OmarAlawneh01/JetSetGo.git"
            >
              GitHub
            </a>
          </div>
          <p className="proj-desc">
            Travel booking experience with clear flows and engaging visuals.
          </p>
          <div className="proj-media">
            <video className="proj-video" controls>
              <source src={jetsetgovideo} type="video/mp4" />
            </video>
          </div>
        </article>

        <article className="proj-card reveal">
          <div className="proj-head">
            <h3>Online Store</h3>
            <a className="proj-link" href="#">
              Live Soon
            </a>
          </div>
          <p className="proj-desc">
            Clean storefront layout with focus on product discovery.
          </p>
          <div className="proj-media">
            <video className="proj-video" controls>
              <source src={onlinestorevideo} type="video/mp4" />
            </video>
          </div>
        </article>

        <article className="proj-card reveal">
          <div className="proj-head">
            <h3>Task Mangment System</h3>
            <a className="proj-link" href="#">
              Live Soon
            </a>
          </div>
          <p className="proj-desc">
            Task planning and tracking system built for clear team workflows.
          </p>
          <div className="proj-media">
            <video className="proj-video" controls>
              <source src={taskmangamentvideo} type="video/mp4" />
            </video>
          </div>
        </article>

        <article className="proj-card reveal">
          <div className="proj-head">
            <h3>Games Website</h3>
            <a className="proj-link" href="https://gf-now.com/">
              Visit
            </a>
          </div>
          <p className="proj-desc">
            A fast, clean gaming portal with modern UI and smooth navigation.
          </p>
          <div className="proj-media">
            <video className="proj-video" controls>
              <source src={gamewebsitevideo} type="video/mp4" />
            </video>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
