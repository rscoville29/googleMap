import React from 'react';
import {useMemo} from 'react';
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';


export default function MapHome() {
        const {isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyCFpWH1-N-d2C612XkRtnbdmF0efmwT6vc'});
        function Map(){
            const center = useMemo(() =>(
                {lat: 40.7051, lng: -74.0092}
            ), []);
            return (
                <div>
                    <h1>testing</h1>
                <GoogleMap zoom={10} center={center} mapContainerClassName='mapContainer'>
                    <MarkerF position={center} />
                </GoogleMap>
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