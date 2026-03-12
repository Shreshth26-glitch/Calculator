const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", function(e){

/* RIPPLE EFFECT */

const circle = document.createElement("span");
circle.classList.add("ripple");

const diameter = Math.max(button.clientWidth, button.clientHeight);
const radius = diameter / 2;

circle.style.width = circle.style.height = `${diameter}px`;

circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

button.appendChild(circle);

setTimeout(()=>{
circle.remove();
},600);


/* PARTICLE EXPLOSION */

for(let i=0;i<6;i++){

const particle = document.createElement("span");
particle.classList.add("particle");

const x = (Math.random() - 0.5) * 100;
const y = (Math.random() - 0.5) * 100;

particle.style.setProperty("--x",`${x}px`);
particle.style.setProperty("--y",`${y}px`);

particle.style.left = `${e.offsetX}px`;
particle.style.top = `${e.offsetY}px`;

button.appendChild(particle);

setTimeout(()=>{
particle.remove();
},600);

}

});

});