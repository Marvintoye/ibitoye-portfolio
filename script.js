// 3D tilt

VanillaTilt.init(document.querySelectorAll(".tilt"), {
max:15,
speed:400
});


// modal

function openModal(){
document.getElementById("modal").style.display="block";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}


// dark mode

const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
document.body.classList.toggle("light");
}


// GitHub project loader

fetch("https://api.github.com/users/YOURUSERNAME/repos")

.then(res => res.json())

.then(data => {

let container = document.getElementById("projectsContainer");

data.slice(0,6).forEach(repo => {

let div = document.createElement("div");

div.classList.add("repo");

div.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description"}</p>
<a href="${repo.html_url}" target="_blank">View Repo</a>
`;

container.appendChild(div);

});

});
