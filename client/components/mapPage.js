import React, {useState} from 'react';
import {useMemo} from 'react';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import Restaurants from './Restaurants';



export default function MapHome() {
        // const [lat, setLat] = useState(40.7051);
        // const [lng, setLng] = useState(-74.0092);

        const[state, setState] = useState({lat: 40.7051, lng: -74.0092 })

        const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY});
        const markerOptions = useMemo(()=>({
            draggable: true
        }),[]);

        const mapOptions = useMemo(()=>({
            disableDefaultUI: true,
            clickableIcons: false
        }),[]);

        const clickHandler = (event) => {
            console.log(event.latLng);
            // setLat(event.latLng.lat());
            // setLng(event.latLng.lng());
            setState({lat: event.latLng.lat(), lng: event.latLng.lng()});
            console.log('&&& CENTER', state);
        }
        
        function Map(){
            return (
                <div>
                    <h1>testing</h1>
                <GoogleMap onClick={clickHandler} options={mapOptions} zoom={8} center={state} mapContainerClassName='mapContainer'>
                    <Marker options={markerOptions} position={state} />
                </GoogleMap>
                < Restaurants data={state} />
                </div>
            )
        }
        if(!isLoaded){
            return (
                <div>Loading...</div>
            )
        }else{
            return (< Map/>)
        }
    }