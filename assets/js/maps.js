var map;
var infoObj = [];
var centerCords = {
  lat: 51.219448,
  lng: 4.402464,
};

let markers = [];

//Map Icons
const icons = {
  single: {
    icon: "/assets/images/mapIcons/map_marker_single.png",
  },
  birthday: {
    icon: "/assets/images/mapIcons/map_marker_birthday.png",
  },
  couple: {
    icon: "/assets/images/mapIcons/map_marker_couple.png",
  },
  junkfood: {
    icon: "/assets/images/mapIcons/map_marker_junkfood.png",
  },
  brunch: {
    icon: "/assets/images/mapIcons/map_marker_brunch.png",
  },
  surprise: {
    icon: "/assets/images/mapIcons/map_marker_surprise.png",
  },
};

//Map Markers
const RECOMMENDED_LOCATIONS = [
  {
    placeName: "Salon de the Claude",
    placeDescription: "Salon de the Claude is a quaint & quirky spot located in central Antwerp, known primarily for its afternoon tea service. You can expect fresh scones with clotted cream & jam, delightful finger sandwiches and a variety of pastries on the menu, served of course with an extensive tea selection." ,
    address: "<strong>Address:</strong> Hendrik Conscienceplein 5, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday & Tuesday Closed; Wednesday-Sunday 10am-6pm",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Salon_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.221183,
        lng: 4.40409,
      },
    ],
    type: "single",
  },
  {
    placeName: "Luddites Books & Wine",
    placeDescription: "Luddites is a bookstore, wine bar, and hideout from the modern world, all rolled into one. We welcome all people who love books and wine, but despise the technology-ridden society. So, absolutely no e-readers allowed inside. We sell English & Dutch books and serve great wine, coffee & chocolate cake." ,
    address: "<strong>Address:</strong> Hopland 34, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday & Tuesday Closed; Wednesday-Sunday 12pm-8pm",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Luddites_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.216689,
        lng: 4.412087,
      },
    ],
    type: "single",
  },
  {
    placeName: "Coffeelabs at Fosbury & Sons",
    placeDescription: "Fosbury & Sons is more than just a place to work. In their in-house deli, you can find a variety of healthy breakfast & lunch snacks to choose from, to keep you fueled up while you work." ,
    address: "<strong>Address:</strong> Mechelsesteenweg 271, 2018 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Friday 9am-3pm; Saturday & Sunday Closed",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Fosbury_Sons_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.20002,
        lng: 4.414494,
      },
    ],
    type: "single",
  },
  {
    placeName: "Bar Paniek",
    placeDescription: "Bar Paniek is the ideal place for hot, summer days. Situated by the harbor, we offer you a relaxed atmosphere with great music & food. Come solo & enjoy a nice book under the sun, or meet up with friends. Everyone is welcome." ,
    address: "<strong>Address:</strong> Kattendijkdok-Oostkaai 21B, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday- Sunday 11am-11pm",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Bar_Paniek_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.234057,
        lng: 4.408796,
      },
    ],
    type: "single",
  },
  {
    placeName: "Dansing Chocola",
    placeDescription: "Dansing Chocola is one of those dreamy, retro places that seems to have come straight out of a book. The minute you walk into the place, you’ll feel like you’re entering into another dimension. In addition to the retro decor, antiques, and other curiosities, you can come here to enjoy good food, drinks & artistic atmosphere." ,
    address: "<strong>Address:</strong> Kloosterstraat 159, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Sunday 11am-12am",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Dansing_Chocola_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.213176,
        lng: 4.394185,
      },
    ],
    type: "single",
  },
  {
    placeName: "Kommilfoo",
    placeDescription: "Smart yet casual, Kommilfoo is a 1 Michelin star restaurant which will acquaint you with the creative and inventive talent of a dedicated chef. The dishes are both amusing and imaginative, with a clear desire to render contrasting tastes harmonious. Pyrenean goat, the house speciality, is on the menu all year long.",
    address: "<strong>Address:</strong> Vlaamsekaai 17, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Sunday & Monday Closed; Tuesday-Friday 12pm-2pm & 7-9:30pm; Saturday 7pm-9:30pm ; ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Kommilfoo_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.211083,
        lng: 4.392601,
      },
    ],
    type: "birthday",
  },
  {
    placeName: "CiPiaCe",
    placeDescription: "Ristorante italiano & Cocktail bar! A place where we aim to bringing you straight back to Italy, with our authentic food, aperitivo, and delicious cocktails of course." ,
    address: "<strong>Address:</strong> Zirkstraat 37, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday & Tuesday Closed; Wednesday-Sunday 5pm-12am ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/ciapace_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.222882,
        lng: 4.401617,
      },
    ],
    type: "birthday",
  },
  {
    placeName: "Dogma Cocktails",
    placeDescription: "Dogma is a 1920’s themed cocktail bar, which won’t disappoint. Run by a praised and passionate cocktail artist, you will find not only an exquisite range of exclusive cocktails, but also a cozy, candle-lit atmosphere with vintage charm which will make it an experience you won’t forget." ,
    address: "<strong>Address:</strong> Wijngaardstraat 5, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Saturday 5pm-12am; Sunday Closed",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Dogma_Cocktails_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.221164,
        lng: 4.402982,
      },
    ],
    type: "birthday",
  },
  {
    placeName: "Cocktails at Nine",
    placeDescription: "This is the description" ,
    address: "<strong>Address:</strong> Lijnwaadmarkt 9, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Wednesday 6pm-12am; Thursday-Friday 6am-1am; Saturday & Sunday 3pm-12am",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Cocktails_Nine_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.220678,
        lng: 4.402048,
      },
    ],
    type: "birthday",
  },
  {
    placeName: "De Muze",
    placeDescription: "De Muze, a restaurant for a romantic dinner, cozy with friends or with the family and children. With our different, cozy spaces you can stay wherever you prefer." ,
    address: "<strong>Address:</strong> Melkmarkt 15, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Sunday-Thursday 11:30am-1am; Friday & Saturday 11:30am-3am",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Muze_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.220477,
        lng: 4.402842,
      },
    ],
    type: "birthday",
  },
  {
    placeName: "Pazzo Antwerp ",
    placeDescription: "Pazzo combines top affordable cuisine with an impressive combination of flavors. Music is present in all its dishes, just like in the wine pairings served with the food. You can expect a beautiful selection of fresh ravioli, risotto, truffle ice cream and much more here. Perfect for a romantic date. " ,
    address: "<strong>Address:</strong> Oudeleeuwenrui 12, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Friday 12pm-2:30pm; Saturday & Sunday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Pazzo_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.226679,
        lng: 4.406516,
      },
    ],
    type: "couple",
  },
  {
    placeName: "Corazón De Melón",
    placeDescription: "Corazón De Melón is the place for the best Spanish tapas in Antwerp, just a couple minutes away from the Grote Markt. Enjoy fresh products worked in the traditional Spanish way." ,
    address: "<strong>Address:</strong> Vlasmarkt 14, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Thursday-Monday: 4pm-10pm; Tuesday & Wednesday Closed",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Corazone_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.219776,
        lng: 4.396999,
      },
    ],
    type: "couple",
  },
  {
    placeName: "Het Gerecht ",
    placeDescription: "Michelin Star restaurant Het Gerecht is full of character. The chefs are known to pamper guests with their French-inspired cuisine." ,
    address: "<strong>Address:</strong> Amerikalei 20, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Tuesday, Thursday & Friday 12pm-2pm, 7pm-9pm; Wednesday 12pm-2pm; Saturday: 7pm-9pm; Monday & Sunday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Het_Gerecht_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.208799,
        lng: 4.401275,
      },
    ],
    type: "couple",
  },
  {
    placeName: "Sombat Thai Cuisine",
    placeDescription: "Sombat Thai Cuisine takes you on a flavor journey across Thailand. From an open kitchen, you can observe the cooks at work, providing a fixed menu of delectable Thai dishes, which will leave you craving more." ,
    address: "<strong>Address:</strong> Desguinlei 196, 2018 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> unday & Monday Closed; Tuesday-Saturday 7pm-10pm ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Sombat_Thai_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.195664,
        lng: 4.399269,
      },
    ],
    type: "couple",
  },
  {
    placeName: "Eetkamer a l’Infintiste",
    placeDescription: "At Eetkamer a L’infintiste not everyone can imagine a unique formula that hits the mark. Chef Marc Van Uffelen doesn't just send trendy dishes. He also involves his guests in the service. A unique experience so coveted that you often have to book months in advance to sit down here on weekends." ,
    address: "<strong>Address:</strong> Kasteelpleinstraat 6, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Sunday 7pm-9pm ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Linfintiste_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.211405,
        lng: 4.400812,
      },
    ],
    type: "couple",
  },
  {
    placeName: "Manhattn’s Burger ",
    placeDescription: "We like to think of blending burgers like blending a Bordeaux Wine. After 2 years of trial and error we’ve perfected our beef blend using Grass-Fed Irish Angus Beef. Our authentic Belgian fries are made from local fresh potatoes and cooked twice to honor our Belgian heritage! We have created a tasty and beautiful bun based on an original recipe from a Little Italy bakery. " ,
    address: "<strong>Address:</strong> Groenplaats 1, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Sunday 11:30am-10:30pm ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Manhattns_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.218821,
        lng: 4.400916,
      },
    ],
    type: "junkfood",
  },
  {
    placeName: "Beastie Burger Antwerpen",
    placeDescription: "Our burgers are made of top quality, fresh ingredients and are flavoured with specially designed home-made sauces, rooted in long-lasting cooking expertise and perfected through years of experimentation. Because, our sauces are extremelly addictive, we had to go undercover and develop special kitchen, set in a van (just like the one in the Breaking Bad series) to maximaly conceal our secret recepies from the general public." ,
    address: "<strong>Address:</strong> Nationalestraat 100, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday & Tuesday 11:30am–2:30pm, 5pm–9:30pm; Wednesday & Thursday 11:30am–9:30pm; Friday & Saturday 12pm-10pm; Sunday 5pm-9:30pm ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Beastie_Burgers_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.21463,
        lng: 4.398316,
      },
    ],
    type: "junkfood",
  },
  {
    placeName: "Frites Atelier ",
    placeDescription: "After more than 18 months of testing different potato varieties & soil types, Frites Atelier landed on the perfect recipe. This restaurant serves one purpose - to serve you beautifully prepared fires with sensational toppings.  A must try for all. " ,
    address: "<strong>Address:</strong> Korte Gasthuisstraat 32, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday- Sunday 12pm-6pm ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Frites_Atelier_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.216697,
        lng: 4.404337,
      },
    ],
    type: "junkfood",
  },
  {
    placeName: "Black Smoke",
    placeDescription: "Black Smoke brings serious BBQ to Antwerp, offering a bar, BBQ restaurant and a rooftop bar. It mixes American BBQ traditions with local influences for a serious BBQ experience. " ,
    address: "<strong>Address:</strong> Boomgaardstraat 1, 2018 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Wednesday-Friday 5:30pm–1am; Saturday & Sunday 12–2:30pm, 5pm–1am; Monday & Tuesday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Black_Smoke_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.199288,
        lng: 4.415151,
      },
    ],
    type: "junkfood",
  },
  {
    placeName: "Mission Masala",
    placeDescription: "Mission Masala brings you Indian Soulfood with a modern twist. This restaurant won several awards for Best Fast Casual Concept as well as Best Concept Restaurant. A must go! " ,
    address: "<strong>Address:</strong> Dendermondestraat 68, 2018 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Tuesday-Saturday 6pm-10pm; Sunday & Monday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Mission_Masala_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.203631,
        lng: 4.39229,
      },
    ],
    type: "junkfood",
  },
  {
    placeName: "No worries ",
    placeDescription: "The new catering business on 't Eilandje in Antwerp is the place where you can be yourself. A place to relax, meet and enjoy." ,
    address: "<strong>Address:</strong> Kribbestraat 20, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Wednesday-Friday 10am-5pm; Saturday & Sunday: 9am-5pm; Monday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/no_worries_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.23031,
        lng: 4.410013,
      },
    ],
    type: "brunch",
  },
  {
    placeName: "Bubble Waffle",
    placeDescription: "Bubble Waffle brings a Hong Kong speciality to the streets of Antwerp. Here you can try bubble waffles with a Belgian twist, served with artisan ice creams, homemade sauces, fresh fruit and whipped cream. A guilty pleasure you can’t resist!" ,
    address: "<strong>Address:</strong> Wijngaardbrug 2, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Wednesday-Sunday 9am-6pm; Monday & Tuesday Closed",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Bubble_Waffle_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.221264,
        lng: 4.404832,
      },
    ],
    type: "brunch",
  },
  {
    placeName: "Bar’rique",
    placeDescription: "Bar-rique is known for its breakfasts and brunch, but you can also come in for a scrumptious lunch. Come and relax in an atmosphere that’s both cozy and casual. " ,
    address: "<strong>Address:</strong> Boomgaardstraat 348, 2600 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Tuesday-Sunday 9am-3pm; Monday Closed  ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Barrique_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.200146,
        lng: 4.430551,
      },
    ],
    type: "brunch",
  },
  {
    placeName: "Barchel",
    placeDescription: "Barchel , the place to be for good food and a feel-good mood. In the middle of the city in an authentic house with a cozy patio or on the sweltering Nieuw Zuid with a gigantic terrace in good weather. Enjoy our classics such as the Breakfast bagel & our famous pancakes or go for one of our weekly specials. " ,
    address: "<strong>Address:</strong> Van Breestraat 6, 2018 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Tuesday- Friday 8am-4pm; Saturday 9am-5pm; Sunday & Monday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Barchel_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.2107994,
        lng: 4.409675,
      },
    ],
    type: "brunch",
  },
  {
    placeName: "Cafématic",
    placeDescription: "Cafématic is the standard go-to place for delicious coffee and homemade savory & sweet delicatessen. A great place to go alone or meet up with friends. " ,
    address: "<strong>Address:</strong> Vleminckveld 4, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Friday 8am-5:30pm; Saturday 9:30am-5:30pm; Sunday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Cafematic_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.215058,
        lng: 4.402361,
      },
    ],
    type: "brunch",
  },
  {
    placeName: "’T Zilte",
    placeDescription: "Two Michelin Star ’T Zilte aims to bring you an emotional dining experience. Savour the view of Antwerp at your feet from the top floor of the Aan de Stroom Museum in a tasteful, elegant interior. " ,
    address: "<strong>Address:</strong> Hanzestedenplaats 5, 2000 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Friday 12–1pm, 7–8:30pm; Saturday & Sunday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/TZilte_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.22904,
        lng: 4.404823,
      },
    ],
    type: "surprise",
  },
  {
    placeName: "Skybar",
    placeDescription: "Skybar Antwerp is a rooftop guest lounge where you can go for food & drinks, as well as for organizing your next event. You can also enjoy a breathtaking view of the city and the Scheldt at any time of the day." ,
    address: "<strong>Address:</strong> Lange Kievitstraat 125, 2018 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Sunday 4pm-12am",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Skybar_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.213272,
        lng: 4.422774,
      },
    ],
    type: "surprise",
  },
  {
    placeName: "Bar d’Henri",
    placeDescription: "Bar d'Henri is where Burgundian pleasure merges with healthy cuisine. It's about energy, conviviality and good food that evolves with the seasons, freshly made with local, plant-based ingredients." ,
    address: "<strong>Address:</strong> Montignystraat 21, 2018 Antwerpenc",
    openingTimes: "<strong>Opening Times:</strong> Thursday-Saturday 3pm-12am; Sunday-Wednesday Closed ",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Bar_Henri_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.204671,
        lng: 4.392347,
      },
    ],
    type: "surprise",
  },
  {
    placeName: "Bier Central",
    placeDescription: "Bier Central is THE place for beer-lovers. Not only are there 30 draft beers to choose from, but also 300 different Belgian beers! Come here to drink, be merry, and enjoy a lively atmosphere." ,
    address: "<strong>Address:</strong> De Keyserlei 25, 2018 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Monday-Sunday 12pm-1am",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Bier_Central_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.217743,
        lng: 4.418458,
      },
    ],
    type: "surprise",
  },
  {
    placeName: "Tranquilo",
    placeDescription: "Tranquilo is a cosy mexican restaurant in the heart of Zurenborg, Antwerp. Catch the last sun on the Dageraadplaats with a cocktail and a taco. Or join us for a full meal." ,
    address: "<strong>Address:</strong> Dageraadplaats 21, 2018 Antwerpen",
    openingTimes: "<strong>Opening Times:</strong> Wednesday-Saturday 5:30pm-12am; Sunday-Tuesday Closed",
    placeImage: "<div><img style='height:100px; width:180px' src='/assets/images/recommendedLocations/Tranquilo_1200x630.jpg'></div>",
    LatLng: [
      {
        lat: 51.207334,
        lng: 4.429776,
      },
    ],
    type: "surprise",
  },
];

//Function to display start coordinates on Google Maps
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: centerCords,
  });
  addMarkerInfo();
}

//Function which shows locations 
function showLocations(type) {
  clearMarkers();
  addMarkerInfo(type);
}

//Function to filter markers based on occasion type 
function addMarkerInfo(type = null) {
  const recommended_locations = type
    ? RECOMMENDED_LOCATIONS.filter((location) => location.type === type)
    : RECOMMENDED_LOCATIONS;
  markers = [];
  for (var i = 0; i < recommended_locations.length; i++) {
    
    //Location details displayed in infowindow
    var contentString = 
    '<h5 id="firstHeading" class="firstHeading">' + recommended_locations[i].placeName + '</h5>' +
    '<div id="bodyContent">' + 
    "<p>" + recommended_locations[i].placeImage + "</p>" +
    "<p>" + recommended_locations[i].placeDescription + "</p>" +
    "<p>" + recommended_locations[i].address + "</p>" +
    "<p>" + recommended_locations[i].openingTimes + "</p>" +
    '</div>';

    //Create marker with custom icon
    const marker = new google.maps.Marker({
      position: recommended_locations[i].LatLng[0],
      icon: icons[recommended_locations[i].type].icon,
      map: map,
    });

    //Create infowindow
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    //Displays info window when a marker is clicked
    marker.addListener("click", () => {
      closeInfoWindow();
      infowindow.open(marker.get("map"), marker);
      infoObj[0] = infowindow;
    });
    markers.push(marker);
  }
}

//Function to clear markers when another type of marker has been called
function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

//Function to close the popup infoWindow 
function closeInfoWindow() {
  if (infoObj.length > 0) {
    infoObj[0].set("marker", null);
    infoObj[0].close();
    infoObj[0].length = 0;
  }
}
