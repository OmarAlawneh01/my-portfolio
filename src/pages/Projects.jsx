import React from "react";
import jetsetVideo from "../assets/videos/jetsetgo-video.mp4";
import storeVideo from "../assets/videos/online-store-video.mp4";
import taskVideo from "../assets/videos/task-mangament video.mp4";
import gamesVideo from "../assets/videos/video for the game website.mp4";

// Each project now has a short inline video demo.
const projects = [
  {
    name: "JetSetGo",
    description:
      "Travel booking experience with clear, intuitive flows and engaging visuals.",
    repoUrl: "https://github.com/OmarAlawneh01/JetSetGo.git",
    demoUrl: "",
    videoSrc: jetsetVideo,
  },
  {
    name: "Online Store",
    description:
      "Responsive storefront layout with a focus on clean product discovery.",
    repoUrl: "",
    demoUrl: "",
    videoSrc: storeVideo,
  },
  {
    name: "Task Management System",
    description:
      "Task planning and tracking system built for smooth, collaborative workflows.",
    repoUrl: "",
    demoUrl: "",
    videoSrc: taskVideo,
  },
  {
    name: "Games Website",
    description:
      "A fast, modern gaming portal with smooth navigation and bold visuals.",
    repoUrl: "",
    demoUrl: "https://gf-now.com/",
    videoSrc: gamesVideo,
  },
];

function Projects() {
  return (
    <section className="projects" id="project">
      <h2 className="title">My Projects</h2>
      <p className="projects-subtitle">Selected work with short demos.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="proj-card reveal">
            <div className="proj-head">
              <h3>{project.name}</h3>
              <div>
                {project.repoUrl && (
                  <a
                    className="proj-link"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    className="proj-link"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: project.repoUrl ? "0.5rem" : 0 }}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>

            <p className="proj-desc">{project.description}</p>

            <div className="proj-media">
              {project.videoSrc ? (
                <video
                  className="proj-video"
                  src={project.videoSrc}
                  controls
                  muted
                  loop
                  playsInline
                />
              ) : (
                <p className="proj-placeholder">
                  {project.demoUrl
                    ? "Open the live demo to see this project in action."
                    : "Demo coming soon – stay tuned for a live preview."}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
