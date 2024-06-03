const toggle = document.getElementById("togglein");
if (localStorage.getItem("darkmode") === "true") {
  toggle.checked = true;
  document.body.classList.add("darkmode");
}
toggle.addEventListener("click", () => {
  if (toggle.checked == true) {
    document.body.classList.add("darkmode");
  } else {
    document.body.classList.remove("darkmode");
  }
  localStorage.setItem("darkmode", toggle.checked);
});
