let hi  = document.getElementById("Hello");

console.log(hi);
//console.log(hi.innerHTML);

hi.addEventListener("click", greeting);

function greeting(){
  hi.innerHTML = "bye";
}
