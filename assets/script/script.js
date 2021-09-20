var currentUnix = new Date();
var locationInput = '';

var locationLatitude = 0;
var locationLongitude = 0;

function locationPrompt() {
    locationInput = prompt("Please enter a city, state, or country: ");
    fetchInformation(locationInput);
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

        fetch(
            'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + locationLatitude + '&lon=' + locationLongitude + '&dt=' + currentUnix + '&units=imperial&appid=8f0b1cc9479ed6c9966dcb4427c1b248'
        )
    
        .then(response => response.json())
        
        .then(function(data) {
            console.log(' ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ');
            console.log('Weather Response: ');
            console.log(data);
            console.log(' ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ');
        }); 

    });

}