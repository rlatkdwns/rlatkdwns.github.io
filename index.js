const button = document.getElementById("bg-button");
const body = document.querySelector("body");
let currentImageIndex = -1; // set the initial index to -1 so that the first image will always be different

button.addEventListener("click", () => {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]; // list of images to cycle through
  let index = Math.floor(Math.random() * images.length); // pick a random index from the list

  // check if the current image is the same as the new image
  while (index === currentImageIndex) {
    index = Math.floor(Math.random() * images.length);
  }

  currentImageIndex = index; // update the current image index

  body.classList.add("blur-effect"); // add the blur-effect class to trigger the softening effect
  body.style.backgroundImage = `url("${images[index]}")`; // set the background image to the one at the random index
  setTimeout(() => body.classList.remove("blur-effect"), 500); // remove the blur-effect class after a short delay to return to the normal image
});
