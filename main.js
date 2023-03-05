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

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const slide4 = document.querySelector(".slide4");
const slideButton1 = document.querySelector(".slideButton1")
const slideButton2 = document.querySelector(".slideButton2");
const slideButton3 = document.querySelector(".slideButton3");
const slideButton4 = document.querySelector(".slideButton4");

slideButton2.addEventListener("click", () => {
    slide2.classList.add("slide2Active")
    slide3.classList.remove("slide3Active")
    slide4.classList.remove("slide4Active")
    slideButton1.classList.remove("activeShadow")
    slideButton2.classList.add("activeShadow")
    slideButton3.classList.remove("activeShadow")
    slideButton4.classList.remove("activeShadow")

})

slideButton1.addEventListener("click", () => {
    slide2.classList.remove("slide2Active")
    slide3.classList.remove("slide3Active")
    slide4.classList.remove("slide4Active")
    slideButton1.classList.add("activeShadow")
    slideButton2.classList.remove("activeShadow")
    slideButton3.classList.remove("activeShadow")
    slideButton4.classList.remove("activeShadow")

})

slideButton3.addEventListener("click", () => {
    slide3.classList.add("slide3Active")
    slide4.classList.remove("slide4Active")
    slide2.classList.remove("slide2Active")
    slideButton1.classList.remove("activeShadow")
    slideButton2.classList.remove("activeShadow")
    slideButton3.classList.add("activeShadow")
    slideButton4.classList.remove("activeShadow")

})

slideButton4.addEventListener("click", () => {
    slide4.classList.add("slide4Active")
    slide2.classList.remove("slide2Active")
    slide3.classList.remove("slide3Active")
    slideButton1.classList.remove("activeShadow")
    slideButton2.classList.remove("activeShadow")
    slideButton3.classList.remove("activeShadow")
    slideButton4.classList.add("activeShadow")
})


const buttLeft = document.querySelector(".buttLeft");
const buttRight = document.querySelector(".buttRight");
const art1_slideGlob = document.querySelector(".art1_slideGlob");
const slidClient = document.querySelector(".slidClient");

buttRight.onclick = () => {
    art1_slideGlob.scrollBy({
        left: slidClient.clientWidth,
        behavior: "smooth"
    })
}

buttLeft.onclick = () => {
    art1_slideGlob.scrollBy({
        left: -slidClient.clientWidth,
        behavior: "smooth"
    })
}