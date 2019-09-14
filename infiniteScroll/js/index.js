const footer = document.querySelector("footer");
const section = document.querySelector("section");

const RandomImgUrls = [
  "https://source.unsplash.com/user/erondu/800x600",
  "https://source.unsplash.com/user/erondu/800",
  "https://source.unsplash.com/random/800x600",
  "http://lorempixel.com/800/600",
  "https://placeimg.com/800/600/any",
  "https://picsum.photos/800/600",
  "https://picsum.photos/800"
];

const callback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      var img = document.createElement("img");
      img.setAttribute(
        "src",
        RandomImgUrls[Math.floor(Math.random() * RandomImgUrls.length)]
      );
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
