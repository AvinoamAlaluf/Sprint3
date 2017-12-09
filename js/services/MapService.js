var mapKey = 'AIzaSyD7eT89AbQfxKhzxEKg_lah7h0MnX_9dZc';
var searchClicks = 0;
var gUrl;
var places = [//Hey Man, You can add fields to theses Objects if you need 
    {
        id: 1,
        name: 'Home',
        description: 'Where You Live,Dummie',
        imgs: ['../../img/placesImgs/1.jpg'],
        lat: 32.0447931,
        lang: 34.7727874,
        tag: 'Cemetery',
        marker: 'red'  
    },
    {
        id: 2,
        name: 'Ofirs Home',
        description: 'Where Ofir Live,Dummie',
        imgs: ['urlpath.jpg'],
        lat: 32.197494,
        lang: 34.9017573,
        tag: 'pleasure',
        marker: 'green'  
    },
    {
        id: 3, ///this one is for Shahar
        name: 'Society for Prevention of Cruelty to Animals in Israel',
        description: 'Where Animals Start And End',
        imgs: ['../../img/placesImgs/1.jpg'],
        lat: 32.04671,
        lang: 34.7670063,
        tag: 'death',
        marker: 'blue'  
    },

];

function _getNextId() {
    var maxId = places.reduce((acc, place) => {
        return (place.id > acc) ? place.id : acc
    }, 0);
    return maxId + 1;
}

function emptyPlace() {
    return new Promise((resolve, reject) => {
        let newEmptyPlace = { id: _getNextId(), name: '', description: '', imgs: [], lat: 0, lang: 0, tag:'', marker: '' };
        resolve(newEmptyPlace);
        reject('service Failed To provide empty placeObj');
    })
}

function addPlace(placeObj) {
    return new Promise((resolve, reject) => {
        places.push(place)
        console.log('Place pushed to array');
        resolve(console.log('Place Successfully Added!'));
        reject(console.log('service Failed To Add Place!'));
    })
}

function getPlaces() {
    return new Promise((resolve, reject) => {
        resolve(places);
    });
}

function getPlace(id) {
    return new Promise((resolve, reject) => {
        var foundPlace = places.find(place => place.id === id);
        resolve(foundPlace);
    });
}

function savePlace(newPlaceContent, id) {///FOR SAVING AN EDITTED ITEM USER CHANGED // OR Pushing a new One
    var placeToChangeIdx = places.findIndex(place => place.id === id);
    if (placeToChangeIdx === -1) places.push(newPlaceContent);
    else places.splice(placeToChangeIdx, 1, newPlaceContent);
}

function deletePlace(id) {
    var placeToDeleteIdx = places.findIndex(place => place.id === id);
    places.splice(placeToDeleteIdx, 1);
}




function initMap(latUser, lngUser) {
    var location = {
        lat: latUser,
        lng: lngUser
    };
    var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 16,
        center: location
    });

    places.forEach(place=>{
        var marker = new google.maps.Marker({
            position: {
                lat: place.lat,
                lng: place.lang
            },
            animation: google.maps.Animation.DROP,
            // label: place.name[0],
            icon: `http://maps.google.com/mapfiles/ms/icons/${place.marker}-dot.png`,
            map: map
        });
    })    
    

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
    places,
    search,
    emptyPlace,
    addPlace,
    getPlaces,
    getPlace,
    savePlace,
    deletePlace
}