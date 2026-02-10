import React from "react";

// If you have real demo URLs, replace the `demoUrl` placeholders below.
const projects = [
  {
    name: "JetSetGo",
    description: "Travel booking experience with clear flows and engaging visuals.",
    repoUrl: "https://github.com/OmarAlawneh01/JetSetGo.git",
    demoUrl: "", // e.g. "https://jetsetgo-demo.example.com"
  },
  {
    name: "Online Store",
    description: "Clean storefront layout with focus on product discovery.",
    repoUrl: "",
    demoUrl: "", // e.g. "https://online-store-demo.example.com"
  },
  {
    name: "Task Management System",
    description: "Task planning and tracking system built for clear team workflows.",
    repoUrl: "",
    demoUrl: "",
  },
  {
    name: "Games Website",
    description: "A fast, clean gaming portal with modern UI and smooth navigation.",
    repoUrl: "",
    demoUrl: "https://gf-now.com/",
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
              <p className="proj-placeholder">
                {project.demoUrl
                  ? "Open the live demo to see this project in action."
                  : "Demo coming soon – stay tuned for a live preview."}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
