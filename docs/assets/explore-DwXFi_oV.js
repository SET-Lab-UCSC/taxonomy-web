/* empty css                */
import { l as loadCsvAsJson } from "./csvtojson-QvTtu82S.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
document.addEventListener("DOMContentLoaded", async () => {
  const submissions = await loadCsvAsJson();
  submissions.reverse();
  const container = document.querySelector(".carousel-container");
  container.innerHTML = "";
  submissions.forEach((item) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    carouselItem.innerHTML = `
        <img src="${item.URL}" alt="${item.Application || "Submission"}" class="carousel-image" />
        <p class="carousel-caption">${item.Application || "Untitled"}</p>
      `;
    container.appendChild(carouselItem);
  });
  const btnLeft = document.querySelector(".carousel-nav-left");
  const btnRight = document.querySelector(".carousel-nav-right");
  btnLeft.addEventListener("click", () => {
    container.scrollBy({ left: -container.clientWidth * 0.9, behavior: "smooth" });
  });
  btnRight.addEventListener("click", () => {
    container.scrollBy({ left: container.clientWidth * 0.9, behavior: "smooth" });
  });
});
//# sourceMappingURL=explore-DwXFi_oV.js.map
