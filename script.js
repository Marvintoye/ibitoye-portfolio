const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const openProjects = document.getElementById("openProjects");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const projectsContainer = document.getElementById("projectsContainer");
const projectPreview = document.getElementById("projectPreview");

const githubUser = "octocat";

const setThemeIcon = () => {
  themeToggle.textContent = body.classList.contains("light") ? "☀️" : "🌙";
};

setThemeIcon();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  setThemeIcon();
});

openProjects.addEventListener("click", () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
});

const createRepoCard = (repo) => {
  const article = document.createElement("article");
  article.className = "repo";
  article.innerHTML = `
    <h4>${repo.name}</h4>
    <p>${repo.description || "No description provided."}</p>
    <a href="${repo.html_url}" target="_blank" rel="noreferrer">View repository →</a>
  `;
  return article;
};

fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated`)
  .then((res) => res.json())
  .then((repos) => {
    if (!Array.isArray(repos)) {
      throw new Error("GitHub API response was not an array");
    }

    const selected = repos.slice(0, 6);
    selected.forEach((repo, index) => {
      const card = createRepoCard(repo);
      projectsContainer.appendChild(card);

      if (index < 3) {
        projectPreview.appendChild(createRepoCard(repo));
      }
    });
  })
  .catch(() => {
    const fallback = document.createElement("p");
    fallback.className = "muted";
    fallback.textContent = "Could not load projects right now. Please check GitHub connection.";
    projectsContainer.appendChild(fallback);
    projectPreview.appendChild(fallback.cloneNode(true));
  });
