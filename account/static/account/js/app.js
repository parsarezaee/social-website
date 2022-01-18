"use strict";
const passwordInput = document.querySelector("#pass");
const eyeButton = document.querySelector(".is-pass-visible");
eyeButton.addEventListener("click", () => {
  if (eyeButton.classList.contains("deactive")) {
    eyeButton.setAttribute("src", "/static/account/img/open.svg");
    passwordInput.setAttribute("type", "text");
    eyeButton.classList.remove("deactive");
  } else {
    eyeButton.setAttribute("src", "/static/account/img/close.svg");
    passwordInput.setAttribute("type", "password");
    eyeButton.classList.add("deactive");
  }
});
