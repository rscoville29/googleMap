import React  from 'react';
import {PlacesService, places} from 'react-google-places'
import axios from 'axios';

export default function Restaurants(props){
   const {data: latLng} = props;
   const {lat, lng} = latLng
   //let location = new google.maps.LatLng(latLng.lat, latLng.lng);
   let callUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=restaurant&location=-33.8670522%2C151.1957362&radius=5000&type=restaurant&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

   let config = {
    callUrl,
    method: "get",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
};
    
  async function getData(){
    let response = await axios.get(config);
    return response;
  }
  console.log(getData());
  

//   function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       console.log(results);
//     }
//   }

//   const service = new google.maps.places.PlacesService(map);
//   const results = service.nearbySearch(request, callback);

//   console.log(results);

}