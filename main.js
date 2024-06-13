const button = document.getElementById("search_button");
const input = document.getElementById("input_city");

async function getData(cityname) {
  const web =
    "http://api.weatherapi.com/v1/current.json?key=5a4d0f3311e6468f8bd21019240705&q=" +
    cityname +
    "&aqi=no";
  const promise = await fetch(web);
  return await promise.json();
}

button.addEventListener("click", async () => {
  const a = input.value;
  const result = await getData(a);
  console.log(result);
  const sh_result = document.getElementById("sh_result");
  sh_result.innerHTML =
    "<div id='temp_info'><div>Location==>" +
    result.location.name +
    "," +
    result.location.region +
    "," +
    result.location.country +
    "<br>" +
    "Current temp==>" +
    result.current.temp_c +
    "°C/" +
    result.current.temp_f +
    "F" +
    "<br>Condition==>" +
    result.current.condition.text +
    "<br>" +
    "Wind speed==>" +
    result.current.wind_kph +
    "kph" +
    "<br>" +
    "Wind dir==>" +
    result.current.wind_dir +
    "</div>" +
    '<div id="icon"><img src="http:' +
    result.current.condition.icon +
    '" alt="Weather Icon" ></div></div>';
});
