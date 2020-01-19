// Api key: d7806145bb8be16f5b6abf0546b1a119

document.querySelector('#btnCity').addEventListener('click', () => {
    var appid = "d7806145bb8be16f5b6abf0546b1a119";
    var cityName = $("#inputCity").val();

    if (cityName === '') {
        $("#divWeather").empty();
        $("#divWeather").append("<p style='color: #B22222'>Nie wpisałeś nazwy miejscowości!<br> Spróbuj jeszcze raz.</p>");
    }

    else {
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&lang=pl&appid=" + appid, function (data) {
            $("#divWeather").empty();
            $("#divWeather").append("<strong>Miejscowość: </strong>" + data.name + "<br>");
            $("#divWeather").append("<strong>Opis pogody: </strong>" + data.weather[0].description + "<br>");
            $("#divWeather").append("<strong>Temperatura: </strong>" + data.main.temp + " &#8451<br>");
            $("#divWeather").append("<strong>Prędkość wiatru: </strong>" + data.wind.speed + " m/s<br>");
            $("#divWeather").append("<strong>Ciśnienie: </strong>" + data.main.pressure + " hPa");
            $("#divWeather").append("<img class='center' src='' alt='Ikona pogody' id='iconWeather'></img>");

            var iconCode = data.weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            $('#iconWeather').attr('src', iconUrl);
        })
            .fail(function () {
                $("#divWeather").empty();
                $("#divWeather").append("<p style='color: #B22222'>Wpisałeś niepoprawną nazwę miejscowości!<br> Spróbuj jeszcze raz.</p>");
            })
    }
})