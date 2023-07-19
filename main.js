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

// add contrast
const contrast = document.querySelector("#contrast");
const applyContrast = () => {
  contrast.addEventListener("change", (e) => {
    const rangeValue = e.target.value;
    context.filter = "contrast(" + rangeValue + "%)";
    context.drawImage(base_img, 0, 0);
  });
};

applyContrast();

// add grayscale()
const grayScale = document.querySelector("#gray-scale");
const applyGrayScale = () => {
  grayScale.addEventListener("change", (e) => {
    const rangeValue = e.target.value;
    context.filter = "grayscale(" + rangeValue + "%)";
    context.drawImage(base_img, 0, 0);
  });
};

applyGrayScale();

// add invert
const invert = document.querySelector("#invert");
const applyInvert = () => {
  invert.addEventListener("change", (e) => {
    const rangeValue = e.target.value;
    context.filter = "invert(" + rangeValue + "%)";
    context.drawImage(base_img, 0, 0);
  });
};

applyInvert();

// add saturate()

const saturate = document.querySelector("#saturate");
const applySaturate = () => {
  saturate.addEventListener("change", (e) => {
    const rangeValue = e.target.value;
    context.filter = "saturate(" + rangeValue + "%)";
    context.drawImage(base_img, 0, 0);
  });
};

applySaturate();

// add sepia()
const sepia = document.querySelector("#sepia");
const applySepia = () => {
  sepia.addEventListener("change", (e) => {
    const rangeValue = e.target.value;
    context.filter = "sepia(" + rangeValue + "%)";
    context.drawImage(base_img, 0, 0);
  });
};

applySepia();

// add opacity (?)
const opacity = document.querySelector("#opacity");
console.log(opacity);
const applyOpacity = () => {
  opacity.addEventListener("change", (e) => {
    console.log("I'm changed");
    const rangeValue = e.target.value;
    console.log(rangeValue);
    context.filter = "opacity(" + rangeValue + "%)";
    console.log(context.filter);
    context.drawImage(base_img, 0, 0);
  });
};

applyOpacity();

// TODO
//  drop-shadow(),  hue-rotate()
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
