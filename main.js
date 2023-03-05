const head_drobDawn = document.querySelector(".head_drobDawn")
const headerOpenMenu = document.querySelector(".headerOpenMenu")
const closeContainer = document.querySelector(".closeContainer")
const openMenuContent = document.querySelector(".openMenuContent")

head_drobDawn.addEventListener("click", () => {
    headerOpenMenu.classList.add("openActive")
    openMenuContent.classList.add("openContentActive")
})

closeContainer.addEventListener("click", () => {
    headerOpenMenu.classList.remove("openActive")
    openMenuContent.classList.remove("openContentActive")

})


const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    if(scrollY >= 100){
        header.classList.add("headerFixed")
    }else{
        header.classList.remove("headerFixed")

    }
})

document.addEventListener("mousemove", parallax);

function parallax (e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 120;
        var y = (e.clientY * moving_value) / 120;
        move.style.transform = "translateX("+ x + "px) translateY(" + y + "px)"
    })
}

AOS.init();