const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const header = document.querySelector("header");

const callback = function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
    console.log(header);
    console.log(entry);
  });
};

const options = {
  rootMargin: "-120px 0px 0px 0px"
};

const observer = new IntersectionObserver(callback, options);

observer.observe(sec1);
