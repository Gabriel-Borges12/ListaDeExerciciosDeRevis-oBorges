// GABRIEL CAMARGO DE SOUZA BORGES


document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');
    const weatherResult = document.getElementById('weather-result');

    const apiKey = '31556042d5a5ad090e099d10f3d78b7b';

    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            getWeather(city);
        } else {
            weatherResult.innerHTML = '<p>Por favor, digite o nome de uma cidade.</p>';
        }
    });

    function getWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica os dados recebidos da API
                if (data.cod === 200) {
                    displayWeather(data);
                } else {
                    weatherResult.innerHTML = '<p>Cidade não encontrada. Por favor, tente novamente.</p>';
                }
            })
            .catch(error => {
                console.error(error); // Exibe qualquer erro no console
                weatherResult.innerHTML = '<p>Ocorreu um erro. Por favor, tente novamente.</p>';
            });
    }

    function displayWeather(data) {
        const { name, main, weather } = data;
        const weatherHtml = `
            <h2>${name}</h2>
            <p>${weather[0].description}</p>
            <p>Temperatura: ${main.temp}°C</p>
            <p>Umidade: ${main.humidity}%</p>
            <p>Pressão: ${main.pressure} hPa</p>
        `;
        weatherResult.innerHTML = weatherHtml;
    }
});
