// smooth scroll

const lenis = new Lenis()

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// tilt cards

VanillaTilt.init(document.querySelectorAll(".tilt"),{
max:15,
speed:400
})


// modal

function openModal(){
document.getElementById("modal").style.display="block"
}

function closeModal(){
document.getElementById("modal").style.display="none"
}


// github projects

fetch("https://api.github.com/users/YOURUSERNAME/repos")

.then(res=>res.json())

.then(data=>{

let container=document.getElementById("githubProjects")

data.slice(0,6).forEach(repo=>{

let div=document.createElement("div")

div.innerHTML=`

<h3>${repo.name}</h3>

<p>${repo.description}</p>

<a href="${repo.html_url}">View Repo</a>

`

container.appendChild(div)

})

})
