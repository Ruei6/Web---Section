// ---- Edit this data with your own info ----

// demo: the project's page. Either a folder inside this portfolio (e.g. projects/my-project/index.html)
//       or a live link such as your GitHub Pages address. It is shown as a preview.
// code: the link to the project's code (your GitHub repository).
const projects = [
  {
    title: "Rooms Within Ourselves",
    description: "A digital museum where you can explore, identify and search inside yourself to look for answers.",
    tech: "HTML, CSS, JavaScript",
    demo: "rooms-within-ourselves/index.html",
    code: "https://github.com/Ruei6/Rooms-Within-Ourselves"
  }
];

// ---- Recent Projects ----

const projectList = document.getElementById("project-list");
projects.forEach(function (project) {
  const li = document.createElement("li");

  const title = document.createElement("div");
  title.className = "name";
  title.textContent = project.title;

  const description = document.createElement("div");
  description.textContent = project.description;

  const tech = document.createElement("div");
  tech.className = "tech";
  tech.textContent = project.tech;

  const preview = document.createElement("iframe");
  preview.className = "preview";
  preview.src = project.demo;
  preview.title = project.title + " preview";
  preview.loading = "lazy";

  const links = document.createElement("div");
  links.className = "links";

  const demoLink = document.createElement("a");
  demoLink.href = project.demo;
  demoLink.target = "_blank";
  demoLink.rel = "noopener";
  demoLink.textContent = "Open project";

  const codeLink = document.createElement("a");
  codeLink.href = project.code;
  codeLink.target = "_blank";
  codeLink.rel = "noopener";
  codeLink.textContent = "View code";

  links.append(demoLink, codeLink);

  li.append(title, description, tech, preview, links);
  projectList.appendChild(li);
});
