import React from "react";
// Each project now has a short inline video demo.
const projects = [
  {
    name: "JetSetGo",
    description:
      "Travel booking experience with clear, intuitive flows and engaging visuals.",
    repoUrl: "https://github.com/OmarAlawneh01/JetSetGo.git",
    demoUrl: "",
    videoSrc: "https://res.cloudinary.com/dmdbcrae4/video/upload/v1770744431/jetsetgo-video_i4slca.mp4",
  },
  {
    name: "Online Store",
    description:
      "Responsive storefront layout with a focus on clean product discovery.",
    repoUrl: "https://github.com/OmarAlawneh01/Online-Store-System-",
    demoUrl: "",
    videoSrc: "https://res.cloudinary.com/dmdbcrae4/video/upload/v1770822036/online_store_video_mkbaqx.mp4",
  },
  {
    name: "Task Management System",
    description:
      "Task planning and tracking system built for smooth, collaborative workflows.",
    repoUrl: "https://github.com/OmarAlawneh01/Task-Management-system-",
    demoUrl: "",
    videoSrc: "https://res.cloudinary.com/dmdbcrae4/video/upload/v1770822222/Task-mangament_video_pgn6jw.mp4",
  },
  {
    name: "Games Website",
    description:
      "A fast, modern gaming portal with smooth navigation and bold visuals.",
    repoUrl: "https://github.com/OmarAlawneh01/Blog-project",
    demoUrl: "",
    videoSrc: "https://res.cloudinary.com/dmdbcrae4/video/upload/v1770822256/video_for_the_game_website_aea1lw.mp4",
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
