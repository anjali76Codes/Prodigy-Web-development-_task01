


function changeMain(){
    var navbar = document.getElementById('navbar');
    var scrollvalue = window.scrollY;
    // console.log(scrollvalue);
    if(scrollvalue < 90){
        navbar.classList.remove('mainColor');
    }
    else{
        navbar.classList.add('mainColor')
    }
    }
    window.addEventListener('scroll',changeMain);
const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("activeLink");
}

if(pageName === "about.html"){
    document.querySelector(".home").classList.add("activeLink");
}

if(pageName === "services.html"){
    document.querySelector(".home").classList.add("activeLink");
}

if(pageName === "contact.html"){
    document.querySelector(".home").classList.add("activeLink");
}



