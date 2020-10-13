var map;
var centerCords = {
    lat: 51.219448,
    lng: 4.402464,
};

//Map Icons

 var icons = {
          single: {
            icon: '/assets/images/mapIcons/map_marker_single.png'
          },
          birthday: {
            icon: '/assets/images/mapIcons/map_marker_birthday.png'
          },
          couple: {
            icon: '/assets/images/mapIcons/map_marker_couple.png'
          },
          junkfood: {
            icon: '/assets/images/mapIcons/map_marker_junkfood.png'
          },
          brunch: {
            icon: '/assets/images/mapIcons/map_marker_brunch.png'
          },
          surprise: {
            icon: '/assets/images/mapIcons/map_marker_surprise.png'
          }
        };

//Map Markers

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
            },
            {
                LatLng: [{
                    lat: 51.211083,
                    lng: 4.392601
                }],
                type: 'birthday'
            },
            {
                LatLng: [{
                    lat: 51.222882,
                    lng: 4.401617
                }],
                type: 'birthday'
            },
            {
                LatLng: [{
                    lat: 51.221164,
                    lng: 4.402982
                }],
                type: 'birthday'
            },
            {
                LatLng: [{
                    lat: 51.220678,
                    lng: 4.402048
                }],
                type: 'birthday'
            },
            {
                LatLng: [{
                    lat: 51.220477,
                    lng: 4.402842
                }],
                type: 'birthday'
            },
            {
                LatLng: [{
                    lat: 51.226679,
                    lng: 4.406516
                }],
                type: 'couple'
            },
            {
                LatLng: [{
                    lat: 51.219776,
                    lng: 4.396999
                }],
                type: 'couple'
            },
            {
                LatLng: [{
                    lat: 51.208799,
                    lng: 4.401275
                }],
                type: 'couple'
            },
            {
                LatLng: [{
                    lat: 51.195664,
                    lng: 4.399269
                }],
                type: 'couple'
            },
            {
                LatLng: [{
                    lat: 51.211405,
                    lng: 4.400812
                }],
                type: 'couple'
            },
            {
                LatLng: [{
                    lat: 51.218821,
                    lng: 4.400916
                }],
                type: 'junkfood'
            },
            {
                LatLng: [{
                    lat: 51.21463,
                    lng: 4.398316
                }],
                type: 'junkfood'
            },
            {
                LatLng: [{
                    lat: 51.216697,
                    lng: 4.404337
                }],
                type: 'junkfood'
            },
            {
                LatLng: [{
                    lat: 51.199288,
                    lng: 4.415151
                }],
                type: 'junkfood'
            },
            {
                LatLng: [{
                    lat: 51.203631,
                    lng: 4.39229
                }],
                type: 'junkfood'
            },
            {
                LatLng: [{
                    lat: 51.23031,
                    lng: 4.410013
                }],
                type: 'brunch'
            },
            {
                LatLng: [{
                    lat: 51.221264,
                    lng: 4.404832
                }],
                type: 'brunch'
            },
            {
                LatLng: [{
                    lat: 51.200146,
                    lng: 4.430551
                }],
                type: 'brunch'
            },
            {
                LatLng: [{
                    lat: 51.2107994,
                    lng: 4.409675
                }],
                type: 'brunch'
            },
            {
                LatLng: [{
                    lat: 51.215058,
                    lng: 4.402361
                }],
                type: 'brunch'
            },
            {
                LatLng: [{
                    lat: 51.22904,
                    lng: 4.404823
                }],
                type: 'surprise'
            },
            {
                LatLng: [{
                    lat: 51.213272,
                    lng: 4.422774
                }],
                type: 'surprise'
            },
            {
                LatLng: [{
                    lat: 51.204671,
                    lng: 4.392347
                }],
                type: 'surprise'
            },
            {
                LatLng: [{
                    lat: 51.217743,
                    lng: 4.418458
                }],
                type: 'surprise'
            },
            {
                LatLng: [{
                    lat: 51.207334,
                    lng: 4.429776
                }],
                type: 'surprise'
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
                zoom: 13,
                center: centerCords
            });
            addMarkerInfo();
        }

