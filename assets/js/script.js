document.getElementById('hamBtn').onclick = function () {
    document.getElementById('hero-section').style.display = "none";
    document.getElementById('about-us-section').style.display = "none";
    document.getElementById('why-us-section').style.display = "none";
    document.getElementById('product-section').style.display = "none";
    document.getElementById('gallery-section').style.display = "none";
    document.getElementById('footer-section').style.display = "none";
    document.getElementById('copyright-section').style.display = "none";
    document.getElementById('hamBtn').style.display = "none";
    document.getElementById('closeBtn').style.display = "flex";
    document.getElementById('mobileNav').style.display = "flex";
}


document.getElementById('closeBtn').onclick = function () {
    document.getElementById('hero-section').style.display = "inherit";
    document.getElementById('about-us-section').style.display = "inherit";
    document.getElementById('about-us-section').style.display = "inherit";
    document.getElementById('why-us-section').style.display = "inherit";
    document.getElementById('product-section').style.display = "inherit";
    document.getElementById('gallery-section').style.display = "inherit";
    document.getElementById('footer-section').style.display = "inherit";
    document.getElementById('copyright-section').style.display = "inherit";
    document.getElementById('hamBtn').style.display = "inherit";
    document.getElementById('closeBtn').style.display = "none";
    document.getElementById('mobileNav').style.display = "none";
}