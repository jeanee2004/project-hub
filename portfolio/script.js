(function () {
  "use strict";
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || !sections.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = links[sections.indexOf(entry.target)];
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(function (l) { l.classList.remove("is-active"); });
        link.classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(function (section) { observer.observe(section); });
})();
