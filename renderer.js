// Api key: d7806145bb8be16f5b6abf0546b1a119

document.querySelector('#btnCity').addEventListener('click', () => {
    var appid = "d7806145bb8be16f5b6abf0546b1a119";

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + appid, function (data) {
        console.log(data);
        $("#divWeather").append("<p>" + data.name + "</p>");
    })
})