window.onscroll = ()=>{addStickyClass()};

const navbar = document.getElementById("navbar")
const sticky = navbar.offsetTop;

const addStickyClass = () =>{
    window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

const scrollAbout = ()=>{
    document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
}

const scrollLanding = ()=>{
    document.querySelector('.landing').scrollIntoView({ behavior: 'smooth' });
}

const scrollFooter = ()=>{
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
}