var cityInput = $(".cityInput");

function displayCity(event) {
  console.log("start");
  var city = cityInput.val();
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=72b61cc00bf39a2adc799dabd6e77cf4",
  }).then(function (response) {
    console.log(response);
  });
}

$(".submit").on("click", function (event) {
  event.preventDefault();
  displayCity();
});
