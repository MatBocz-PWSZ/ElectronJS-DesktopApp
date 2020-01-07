//app: https://api.openweathermap.org/data/2.5/weather?q=Warszawa&units=metric&lang=pl&appid=d7806145bb8be16f5b6abf0546b1a119

var appId = "d7806145bb8be16f5b6abf0546b1a119";

$(document).ready(function () {
    $('#btnCity').click(function () {
        var inputCity = $('#inputCity').val();

        if (inputCity === '') {
            alert("Wpisz nazwę miasta!");
        }
        else {
            $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Warszawa&units=metric&lang=pl&appid=d7806145bb8be16f5b6abf0546b1a119', function (data) {
                console.log(data);
                $('#pogoda').empty();
                $('#pogoda').append("Pogoda w " + data.name);
                alert(data.name);
            });
        }
    })
})