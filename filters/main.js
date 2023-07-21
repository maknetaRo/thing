const canvas = document.querySelector(".canvas-container canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#F9F6EE";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

const img = new Image();
img.src = "../filters/venti-views-ZWJSu9L-jHQ-unsplash.jpg";

img.addEventListener("load", () => {
  let imgWidth = img.width;
  let imgHeight = img.height;
  console.log(imgWidth);
  console.log(imgHeight);

  let scale_factor = Math.min(
    canvas.width / img.width,
    canvas.height / img.height
  );
  let x = canvas.width / 2 - (imgWidth / 2) * scale_factor;
  let y = canvas.height / 2 - (imgHeight / 2) * scale_factor;

  let scaleWidth = imgWidth * scale_factor;
  let scaleHeight = imgHeight * scale_factor;

  ctx.drawImage(img, x, y, scaleWidth, scaleHeight);
  return { x, y, scaleWidth, scaleHeight };
});

// filter functions
const applySepia = (x, y, scaleWidth, scaleHeight) => {
  ctx.filter = "sepia(80%)";
  ctx.drawImage(img, x, y, scaleWidth, scaleHeight);
};
const applyBrightness = (x, y, scaleWidth, scaleHeight) => {
  ctx.filter = "brightness(190%)";
  ctx.drawImage(img, x, y, scaleWidth, scaleHeight);
};
const applyGrayscale = (x, y, scaleWidth, scaleHeight) => {
  ctx.filter = "grayscale(100%)";
  ctx.drawImage(img, x, y, scaleWidth, scaleHeight);
};

const applyContrast = (x, y, scaleWidth, scaleHeight) => {
  ctx.filter = "contrast(150%)";
  ctx.drawImage(img, x, y, scaleWidth, scaleHeight);
};

const applyDefault = (x, y, scaleWidth, scaleHeight) => {
  ctx.drawImage(img, x, y, scaleWidth, scaleHeight);
};

// applying filters clicking image from slider
const filterNodes = document.querySelectorAll(".filters-item img");
const filters = Array.from(filterNodes);
const filterFunctions = [
  applyDefault,
  applySepia,
  applyBrightness,
  applyGrayscale,
  applyContrast,
];
// doesn't work
for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", filterFunctions[i]());
}
