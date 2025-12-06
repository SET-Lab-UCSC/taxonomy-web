import "./modulepreload-polyfill-DaKOjhqt.js";
/* empty css                */
import { l as loadObsAsJson } from "./csvtojson-DRLF1_1V.js";
document.addEventListener("DOMContentLoaded", async () => {
  const submissions = await loadObsAsJson();
  const list = document.getElementById("csv-list");
  const set = /* @__PURE__ */ new Set();
  submissions.forEach((row) => {
    console.log(row.Interface_Elements);
    const values = row.Interface_Elements.split(",").map((v) => v.trim());
    values.forEach((v) => set.add(v));
  });
  set.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
  });
});
//# sourceMappingURL=interface-xPT6pKph.js.map
