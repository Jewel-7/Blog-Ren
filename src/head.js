export const head = (imageUrl) => {
  const div = document.createElement("div");
  div.classList.add("logo");
  const img = document.createElement("img");
  img.classList.add("logo-image");
  img.src = imageUrl;
  img.alt = "logo-des";

  div.appendChild(img);

  return div;
};
