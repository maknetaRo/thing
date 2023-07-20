const canvas = document.querySelector(".canvas-container canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#F9F6EE";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

const img = new Image();
img.src = "../filters/venti-views-ZWJSu9L-jHQ-unsplash.jpg";

img.addEventListener("load", () => {
  let imgWidth = img.width;
  let imgHeight = img.height;

  let scale_factor = Math.min(
    canvas.width / img.width,
    canvas.height / img.height
  );
  let x = canvas.width / 2 - (imgWidth / 2) * scale_factor;
  let y = canvas.height / 2 - (imgHeight / 2) * scale_factor;

  ctx.drawImage(img, x, y, imgWidth * scale_factor, imgHeight * scale_factor);
});
