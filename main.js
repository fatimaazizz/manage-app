
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

const slider = new A11YSlider(document.querySelector('.slider'), {
    dots:true,
    arrows: false, 
    slidesToShow: 1,
    responsive: {
        768: {
          slidesToShow: 2,
          arrows: false,
          dots:false,
          
        },
        1280: {
          slidesToShow: 3,
        }
      }
  });