var currentUnix = new Date();
var locationInput = '';
userStorage = window.localStorage;

var locationLatitude = 0;
var locationLongitude = 0;

if (userStorage.getItem('savedLocation1') !== undefined) {
    document.querySelector('#savedLocation1').textContent = userStorage.getItem('savedLocation1');
}

if (userStorage.getItem('savedLocation2') !== undefined) {
    document.querySelector('#savedLocation2').textContent = userStorage.getItem('savedLocation2');
}

if (userStorage.getItem('savedLocation3') !== undefined) {
    document.querySelector('#savedLocation3').textContent = userStorage.getItem('savedLocation3');
}

if (userStorage.getItem('savedLocation4') !== undefined) {
    document.querySelector('#savedLocation4').textContent = userStorage.getItem('savedLocation4');
}

if (userStorage.getItem('savedLocation5') !== undefined) {
    document.querySelector('#savedLocation5').textContent = userStorage.getItem('savedLocation5');
}

if (userStorage.getItem('savedLocation6') !== undefined) {
    document.querySelector('#savedLocation6').textContent = userStorage.getItem('savedLocation6');
}

if (userStorage.getItem('savedLocation7') !== undefined) {
    document.querySelector('#savedLocation7').textContent = userStorage.getItem('savedLocation7');
}

if (userStorage.getItem('savedLocation8') !== undefined) {
    document.querySelector('#savedLocation8').textContent = userStorage.getItem('savedLocation8');
}

function locationPrompt() {
    masterBreakme: {
    locationInput = prompt("Please enter a city, state, or country: ");
    if (locationInput == undefined) {
        break masterBreakme;
    }

    breakme: {
        if (userStorage.getItem('savedLocation1') == undefined) {
            userStorage.setItem('savedLocation1', locationInput);
            document.querySelector('#savedLocation1').textContent = locationInput;
            break breakme;
        }

        if (userStorage.getItem('savedLocation2') == undefined) {
            userStorage.setItem('savedLocation2', locationInput);
            document.querySelector('#savedLocation2').textContent = locationInput;
            break breakme;
        }

        if (userStorage.getItem('savedLocation3') == undefined) {
            userStorage.setItem('savedLocation3', locationInput);
            document.querySelector('#savedLocation3').textContent = locationInput;
            break breakme;
        }

        if (userStorage.getItem('savedLocation4') == undefined) {
            userStorage.setItem('savedLocation4', locationInput);
            document.querySelector('#savedLocation4').textContent = locationInput;
            break breakme;
        }

        if (userStorage.getItem('savedLocation5') == undefined) {
            userStorage.setItem('savedLocation5', locationInput);
            document.querySelector('#savedLocation5').textContent = locationInput;
            break breakme;
        }

        if (userStorage.getItem('savedLocation6') == undefined) {
            userStorage.setItem('savedLocation6', locationInput);
            document.querySelector('#savedLocation6').textContent = locationInput;
            break breakme;
        }

        if (userStorage.getItem('savedLocation7') == undefined) {
            userStorage.setItem('savedLocation7', locationInput);
            document.querySelector('#savedLocation7').textContent = locationInput;
            break breakme;
        }

        if (userStorage.getItem('savedLocation8') == undefined) {
            userStorage.setItem('savedLocation8', locationInput);
            document.querySelector('#savedLocation8').textContent = locationInput;
            break breakme;
        }

        if (userStorage.getItem('savedLocation8') !== undefined) {
            userStorage.setItem('savedLocation1', locationInput);
            document.querySelector('#savedLocation1').textContent = locationInput;
            break breakme;
        }
    }

    fetchInformation(locationInput);

    }
}


function fetchInformation(locationInput) {
    
    fetch(
        'https://api.openweathermap.org/geo/1.0/direct?q=' + locationInput + '&limit=3&appid=8f0b1cc9479ed6c9966dcb4427c1b248'
    )

    .then(response => response.json())

    .then(function(data) {
        console.log(' ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ');
        console.log('Coordinate Response: ');
        console.log(data);
        locationLatitude = data[0].lat;
        locationLongitude = data[0].lon;
        
        console.log('Stored Coordinates: ' + locationLatitude + ' ' + locationLongitude);
    
        currentUnix = (Math.floor(currentUnix / 1000));

        document.querySelector('#currentLocation').innerText = data[0].name;

        fetch(
            'https://api.openweathermap.org/data/2.5/onecall?lat=' + locationLatitude + '&lon=' + locationLongitude + '&dt=' + currentUnix + '&units=imperial&appid=8f0b1cc9479ed6c9966dcb4427c1b248'
        )
    
        .then(response => response.json())
        
        .then(function(data) {
            console.log(' ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ');
            console.log('Weather Response: ');
            console.log(data);
            console.log(' ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ');

            document.querySelector('#dayOneTempHigh').innerText = Math.floor(data.daily[0].temp.day);
            document.querySelector('#dayTwoTempHigh').innerText = Math.floor(data.daily[1].temp.day);
            document.querySelector('#dayThreeTempHigh').innerText = Math.floor(data.daily[2].temp.day);
            document.querySelector('#dayFourTempHigh').innerText = Math.floor(data.daily[3].temp.day);
            document.querySelector('#dayFiveTempHigh').innerText = Math.floor(data.daily[4].temp.day);

            document.querySelector('#dayOneTempLow').innerText = Math.floor(data.daily[0].temp.min);
            document.querySelector('#dayTwoTempLow').innerText = Math.floor(data.daily[1].temp.min);
            document.querySelector('#dayThreeTempLow').innerText = Math.floor(data.daily[2].temp.min);
            document.querySelector('#dayFourTempLow').innerText = Math.floor(data.daily[3].temp.min);
            document.querySelector('#dayFiveTempLow').innerText = Math.floor(data.daily[4].temp.min);

            document.querySelector('#dayOneIcon').src = data.daily[0].weather[0].icon;
            document.querySelector('#dayTwoIcon').src = data.daily[1].weather[0].icon;
            document.querySelector('#dayThreeIcon').src = data.daily[2].weather[0].icon;
            document.querySelector('#dayFourIcon').src = data.daily[3].weather[0].icon;
            document.querySelector('#dayFiveIcon').src = data.daily[4].weather[0].icon;

            document.querySelector("#currentContainer").style.visibility = "visible";
        }); 

    });

}