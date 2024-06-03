const locationButton = document.getElementById("locationButton");
locationButton.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition((position) => {
    input.value = position.coords.latitude + "," + position.coords.longitude;
  });
});
