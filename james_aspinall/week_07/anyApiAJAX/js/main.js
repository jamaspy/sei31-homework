// Migrain Day == Come back and do more 

$(document).ready(function () {

    // $("form").on("submit", function (event) {
    //     event.preventDefault();
    //     const apiKey = "50c719f0069ef8c0674620849d3bdb5f";
    //     const city = $("#cityInput").val();
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    //     $.ajax(url).done(function (data) {
    //         const weather = data.weather[0].main
    //         const weatherIcon = data.weather[0].icon
    //         const iconcode = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    //         $("#cover").text(`The current weather in ${city} is ${weather}`)
    //         $('#icon').attr('src', iconcode);
    //     });
    // });

    const apiKey = "50c719f0069ef8c0674620849d3bdb5f";
    const londonWeather = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${apiKey}`;
    const parisWeather = `https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${apiKey}`;
    const madridWeather = `https://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&appid=${apiKey}`;
  
    $.ajax(londonWeather).done(function (data) {
        const weather = data.weather[0].main
        const temp = data.main.temp
        const weatherIcon = data.weather[0].icon
        const iconcode = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        $("#london").text(`London: ${weather} & ${temp}℃`)
        $('#londonIcon').attr('src', iconcode);
    });

    $.ajax(parisWeather).done(function (data) {
        const weather = data.weather[0].main
        const temp = data.main.temp
        const weatherIcon = data.weather[0].icon
        const iconcode = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        $("#paris").text(`Paris: ${weather} & ${temp}℃`)
        $('#parisIcon').attr('src', iconcode);
    });

    $.ajax(madridWeather).done(function (data) {
        const weather = data.weather[0].main
        const temp = data.main.temp
        const weatherIcon = data.weather[0].icon
        const iconcode = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        $("#madrid").text(`Madrid: ${weather} & ${temp}℃`)
        $('#madridIcon').attr('src', iconcode);
    });

});

