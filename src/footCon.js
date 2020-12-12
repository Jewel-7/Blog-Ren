export const footContent = (content) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.classList.add("foot-des");
  p.innerHTML = content;
  div.appendChild(p);

  return div;
};
