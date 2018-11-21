
function getWeather(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let data = '';
        request.open('GET',url);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if ((request.status == 200)) {
                    data = JSON.parse(this.response);
                    resolve(data);
                } else {
                    reject(new Error());
                }

            }
        }
        request.send();
    })
}

getWeather('http://ip-api.com/json').then(data =>{
    getWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=bf60c7cca9ba7d27aa20f720b3d78bec`).then(data =>{
        console.log(data);
    });
});