console.log('The Script.js file works!');

function trigger() {
    const input = document.getElementById('input').value;
    if (event.keyCode === 13 && input !== '') {
        event.preventDefault();
        document.getElementById('myBtn').click()
    }
}

function getData() {

    let cityName = document.getElementById('input').value.replace(/\b\w/g, l => l.toUpperCase());
    document.getElementById('place').textContent = cityName;

    let city = cityName;
    console.log(city);

    const appID = '1e2744f54600c98b66019bd3c92053f6';

    const api_url = 'https://api.openweathermap.org/data/2.5/weather?q='
        + city + '&units=metric&appid=' + appID;

    async function getAPI() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);

        console.log(data.main.temp);

        const icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        console.log(icon);
        document.getElementById('icon').setAttribute('src', icon);

        const weather = document.getElementById('weather').textContent = data.main.temp + ' C°';
        const min = document.getElementById('min').textContent = data.main.temp_min + ' C°';
        const max = document.getElementById('max').textContent = data.main.temp_max + ' C°';
        const humid = document.getElementById('humidity').textContent = data.main.humidity + '%';

    }
    getAPI();

    document.getElementById('input').value = '';
}







