var mapKey = 'AIzaSyD7eT89AbQfxKhzxEKg_lah7h0MnX_9dZc';
var searchClicks = 0;
var gUrl;

function initMap(latUser, lngUser) {
    var location = {
        lat: latUser,
        lng: lngUser
    };
    var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    gUrl = map.data.map.mapUrl;
    
}

function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }


    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
    initMap(position.coords.latitude, position.coords.longitude);
}

function showLocation(position) {
    initMap(position.coords.latitude, position.coords.longitude);
}



function handleLocationError(error) {
    // var locationError = document.getElementById("locationError");


    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function search() {
    var searchInput = document.querySelector('.searchInput');
    
    if (searchInput.value) {
        var input = document.querySelector('.searchInput').value;
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyD7eT89AbQfxKhzxEKg_lah7h0MnX_9dZc`)
        .then(function (res) {
         var latUser = res.data.results[0].geometry.location.lat;   
         var lngUser = res.data.results[0].geometry.location.lng;   
        initMap(latUser, lngUser);
        });
    }
}

export default {
    initMap,
    search
 }