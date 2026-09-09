const button = document.getElementById("adviceButton");
 
button.addEventListener("click", function () {
  document.getElementById("status").textContent = "Completed";
 
  document.getElementById("recommendation").textContent =
    "Do not irrigate the tomato crop today if heavy rain is expected.";
 
  document.getElementById("answer").textContent =
    "RainGourd AI recommends avoiding unnecessary irrigation when sufficient rainfall is expected. Check the latest local weather before irrigating.";
});
