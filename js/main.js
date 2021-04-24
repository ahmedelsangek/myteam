/*---------------------- Start Homa Page Html ---------------*/
// Start Navbar In Mobile Device

//Open and Close Navbar
let openNav = document.querySelector(".open-nav");
let closeNav = document.querySelector(".close-nav");
let navBar = document.querySelector(".nav-right");
let overLay = document.querySelector(".overlay");

openNav.addEventListener("click", () => {
    navBar.classList.add("nav-opening");
    overLay.style.display = "block";
})
closeNav.addEventListener("click", () => {
    navBar.classList.remove("nav-opening");
    overLay.style.display = "none";
})



/*---------------------- End Homa Page Html ----------------*/


/*------------- Start Aboute Html ------*/
//Satrt Directors
let crossButton = document.querySelectorAll(".directors .cross");
let carts = document.querySelectorAll(".directors .cart");

crossButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        carts.forEach((cart) => {
            if (e.target.dataset.index === cart.dataset.index) {
                cart.classList.toggle("show-back-cart");
                btn.classList.toggle("rotate");
            }
        })
    })
})
/*------------- End Aboute Html ------*/