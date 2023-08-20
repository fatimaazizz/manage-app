const mobileNavBtn=document.querySelector(".mobile-nav-button");
const mobileNav=document.querySelector(".mobile-nav");
const body=document.querySelector("body");
mobileNavBtn.addEventListener("click", ()=>
{
    mobileNav.toggleAttribute('opened');
    mobileNavBtn.classList.toggle("nav-open");
    body.classList.toggle("menuOpenBody")
}
);
