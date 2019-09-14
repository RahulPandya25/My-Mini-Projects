const footer = document.querySelector("footer");
const section = document.querySelector("section");

const callback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("yeyyy");

      var img = document.createElement("img");
      img.setAttribute("src", "https://source.unsplash.com/random/");
      img.setAttribute("alt", "Random");

      section.appendChild(img);
    }
  });
};

const options = {
  rootMargin: "0px 0px 0px 0px"
};

const observer = new IntersectionObserver(callback, options);

observer.observe(footer);
