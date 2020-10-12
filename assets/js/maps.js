var map;
var centerCords = {
    lat: 51.219448,
    lng: 4.402464,
};

 var icons = {
          single: {
            icon: '/assets/images/mapIcons/map_marker_test.png'
          },
          birthday: {
            icon: '/assets/images/mapIcons/map_marker_test.png'
          },
          couple: {
            icon: '/assets/images/mapIcons/map_marker_test.png'
          },
          junkFood: {
            icon: '/assets/images/mapIcons/map_marker_test.png'
          },
          brunch: {
            icon: '/assets/images/mapIcons/map_marker_test.png'
          },
          surprise: {
            icon: '/assets/images/mapIcons/map_marker_test.png'
          }
        };

        var markersOnMap = [
            {
                LatLng: [{
                    lat: 51.221183,
                    lng: 4.40409
                }],
                type: 'single'
            },
            {
                LatLng: [{
                    lat: 51.216689,
                    lng: 4.412087
                }],
                type: 'single'
            },
            {
                LatLng: [{
                    lat: 51.20002,
                    lng: 4.414494
                }],
                type: 'single'
            },
            {
                LatLng: [{
                    lat: 51.234057,
                    lng: 4.408796
                }],
                type: 'single'
            },
            {
                LatLng: [{
                    lat: 51.213176,
                    lng: 4.394185
                }],
                type: 'single'
            }
        ];

        function addMarkerInfo() {
            for (var i = 0; i < markersOnMap.length; i++ ) {
                var marker = new google.maps.Marker ({
                    position: markersOnMap[i].LatLng[0],
                    icon: icons[markersOnMap[i].type].icon,
                    map: map
                });
            };
        }

        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: centerCords
            });
            addMarkerInfo();
        }

  /*
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.21712, lng: 4.400812 },
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" });
    } */