const inputBox = document.getElementById("inputbox");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

button.addEventListener("click", function(e){

const value = button.innerText;

/* CALCULATOR LOGIC */

if(value === "AC"){
expression="";
inputBox.value="";
history.innerText="";
}

else if(value === "DEL"){
expression = expression.slice(0,-1);
inputBox.value = expression;
}

else if(value === "="){
try{
history.innerText = expression;
expression = eval(expression).toString();
inputBox.value = expression;
}
catch{
inputBox.value = "Error";
expression="";
}
}

else{
expression += value;
inputBox.value = expression;
}

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

/* PARTICLE EFFECT */

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

/* KEYBOARD SUPPORT */

document.addEventListener("keydown",(e)=>{

if(!isNaN(e.key) || "+-*/.%".includes(e.key)){
expression += e.key;
inputBox.value = expression;
}

if(e.key === "Enter"){
history.innerText = expression;
expression = eval(expression).toString();
inputBox.value = expression;
}

if(e.key === "Backspace"){
expression = expression.slice(0,-1);
inputBox.value = expression;
}

if(e.key === "Escape"){
expression="";
inputBox.value="";
history.innerText="";
}

});
