// Write your code here
let lightbulb = document.querySelectorAll(".lightbulb");
let count = 0
let span = document.querySelector("span")


lightbulb.forEach(element => {
    element.addEventListener("click", function(){
       if(element.classList.contains('active')){
        count ++;
        element.classList.remove("active")
       } else{
        count ++;
        element.classList.add("active")
       }
       span.innerHTML = count
    })
});