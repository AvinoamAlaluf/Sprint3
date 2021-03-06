var mapKey = 'AIzaSyD7eT89AbQfxKhzxEKg_lah7h0MnX_9dZc';
var searchClicks = 0;
var gUrl;
var gCurrSearchLocation = {};
var places = [//Hey Man, You can add fields to theses Objects if you need 
    {
        id: 1,
        name: 'Home',
        description: 'Where You Live,Dummie',
        imgs: ['./img/placesImgs/1.jpg'],
        lat: 32.0447931,
        lng: 34.7727874,
        tag: 'Gas station',
        marker: _getColorByTag('Gas station')
    },
    {
        id: 2,
        name: 'Ofirs Home',
        description: 'Where Ofir Live,Dummie',
        imgs: ['https://image.flaticon.com/icons/svg/23/23665.svg'],
        lat: 32.197494,
        lng: 34.9017573,
        tag: 'Hotel',
        marker: _getColorByTag('Hotel')
    },
    {
        id: 3, ///this one is for Shahar
        name: 'Society for Prevention of Cruelty to Animals in Israel',
        description: 'Where Animals Start And End',
        imgs: ['./img/placesImgs/1.jpg'],
        lat: 32.04671,
        lng: 34.7670063,
        tag: 'Cemetery',
        marker: _getColorByTag('Cemetery')
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
        let newEmptyPlace = { id: _getNextId(), name: '', description: '', imgs: ['https://image.flaticon.com/icons/svg/23/23665.svg'], lat: 0, lng: 0, tag: '', marker: '' };
        resolve(newEmptyPlace);
        reject('service Failed To provide empty placeObj');
    })
}

function addPlace(placeObj) {

    placeObj.lng = gCurrSearchLocation.lng;
    placeObj.lat = gCurrSearchLocation.lat;
    console.log('gCurrSearchLocation', gCurrSearchLocation);
    placeObj.marker = _getColorByTag(placeObj.tag)
    console.log('marker',placeObj);
    return new Promise((resolve, reject) => {
        places.push(placeObj)
        console.log('Place pushed to array');
        initMap(placeObj.lat, placeObj.lng);
        resolve(console.log('Place Successfully Added!'));
        reject();
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

function savePlace(newPlaceContent) {///FOR SAVING AN EDITTED ITEM USER CHANGED // OR Pushing a new One
    return new Promise((resolve, reject) => {
        var placeToChangeIdx = places.findIndex(place => place.id === placeToEdit.id);
        places.splice(placeToChangeIdx, 1, newPlaceContent);
        resolve('Item Updated Successfully');
        reject('Item Update Failed');
    })
}

function deletePlace(id) {
    var placeToDeleteIdx = places.findIndex(place => place.id === id);
    places.splice(placeToDeleteIdx, 1);
}


function initMap(latUser, lngUser) {
    // console.log('lat', latUser, 'lng', lngUser)
    var location = {
        lat: latUser,
        lng: lngUser
    };
    var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 16,
        center: location
    });

    places.forEach(place => {
        var marker = new google.maps.Marker({
            position: {
                lat: place.lat,
                lng: place.lng
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
                gCurrSearchLocation.lat = latUser;
                gCurrSearchLocation.lng = lngUser;
                initMap(latUser, lngUser);
            });
    }
}


function _getColorByTag(tag) {
    switch (tag) {
        case 'Restuarant':
            return 'orange';
            break;
        case 'Hotel':
            return 'green';
            break;
        case 'Gas Station':
            return 'blue';
            break;
        case 'Parking Lot':
            return 'purple';
            break;
        case 'Cemetery':
            return 'red';
            break;
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
