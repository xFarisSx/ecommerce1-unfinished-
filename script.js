const url = window.location.pathname.replace("/", "").trim();
console.log(url);
const header = document.querySelector("#header");
const urls = [...document.querySelectorAll("#navbar li a")];
console.log(urls);
const hero = document.querySelector("#hero");

urls.forEach(function (cur, i, arr) {
    cur.classList.remove("active");
    if (cur.getAttribute("href") == url) {
        cur.classList.add("active");
    }
});

const hiddens = [...document.querySelectorAll(".hidden")];

document.addEventListener("scroll", function (e) {
    // const headerR = header.getBoundingClientRect();
    if (window.scrollY > 0) {
        header.classList.add("shadow");
    } else {
        header.classList.remove("shadow");
    }
});

hiddens.forEach(function (cur) {
    document.addEventListener("scroll", function (e) {
        if (window.scrollY > cur.getBoundingClientRect().y + window.screenY) {
            cur.classList.remove("hidden");
        }
    });
});
