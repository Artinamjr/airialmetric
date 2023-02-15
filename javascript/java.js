const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation")

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active")
});

var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1
    }
},3000);

/***/
