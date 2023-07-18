// 1. uploading an image
const canvas = document.querySelector("#canvas");
const context = document.querySelector("#canvas").getContext("2d");

const reader = new FileReader();
const base_img = new Image();

const uploadImage = (e) => {
  reader.addEventListener("load", () => {
    base_img.addEventListener("load", () => {
      canvas.width = base_img.width;
      canvas.height = base_img.height;
      context.drawImage(base_img, 0, 0);
    });
    base_img.src = reader.result;
  });
  reader.readAsDataURL(e.target.files[0]);
};

const uploadBtn = document.querySelector("#uploadImg");
uploadBtn.addEventListener("change", uploadImage);

// 2. change image brightness
const brightness = document.querySelector("#brightness");
const changeBrightness = () => {
  brightness.addEventListener("change", (e) => {
    const rangeValue = e.target.value;
    context.filter = "brightness(" + rangeValue + "%)";
    context.drawImage(base_img, 0, 0);
  });
};
changeBrightness();

// add blur filter
const blur = document.querySelector("#blur");
const applyBlur = () => {
  blur.addEventListener("change", (e) => {
    const rangeValue = e.target.value;
    context.filter = "blur(" + rangeValue + "px)";
    context.drawImage(base_img, 0, 0);
  });
};

applyBlur();

// TODO
// add contrast(), drop-shadow(), grayscale(), hue-rotate(), invert(), saturate(), sepia(),
// add flip vertical and horizonatal
// make them all work together
// scale image to fit canvas width and height

// downloading image
const downloadBtn = document.querySelector(".download-btn");

const downloadImg = () => {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png";
  link.click();
};

downloadBtn.addEventListener("click", downloadImg);
