window.onscroll = ()=>{addStickyClass()};

const navbar = document.getElementById("navbar")
const sticky = navbar.offsetTop;

const addStickyClass = () =>{
    window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

const smoothScroll = ()=>{
    document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
}