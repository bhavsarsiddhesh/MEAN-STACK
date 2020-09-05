let Weatherinfo = function () {
    let xhr = new XMLHttpRequest();


    let city = document.querySelector("#input").children[0].value || "Mumbai";
    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=8e76204928f2cef03deb57009846f65b&units=metric&q=" + city;



    xhr.open("GET", url);

    xhr.onload = () => {

        const refjson = JSON.parse(xhr.responseText);

        WeatherRes(refjson);
    };

    xhr.send();

};

let WeatherRes = (refjson) => {

    const maxtemp = refjson.main.temp_max;
    const mintemp = refjson.main.temp_min;

    let Input = document.querySelector("#result");

    let newElement = Input.children[0].children[0].cloneNode("true");

    newElement.value = "MAX TEMP " + maxtemp + " " + "MIN TEMP " + mintemp;
    newElement.style.color = "green";
    Input.insertBefore(newElement, Input.firstChild);
};
