const headerNav = document.querySelector(".header-menu");
document.addEventListener("scroll", (event)=>{
    var scroll_position = window.scrollY; 
    if (scroll_position>0)
    {
    headerNav.classList.add("header-menu-fixed");
    document.querySelector(".header-logo").style.color="black";
    return;
    }
    headerNav.classList.remove("header-menu-fixed");
    document.querySelector(".header-logo").style.color="white";
});