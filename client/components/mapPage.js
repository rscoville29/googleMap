import React from 'react';
import {useMemo} from 'react';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';


export default function MapHome() {
        const {isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyCFpWH1-N-d2C612XkRtnbdmF0efmwT6vc'});
        const markerOptions = useMemo(()=>({
            draggable: true
        }),[]);

        const mapOptions = useMemo(()=>({
            disableDefaultUI: true,
            clickableIcons: false
        }),[]);

        const clickHandler = () => {
            console.log('testing google maps', google.maps.Marker.position);
        }
        const center = {lat: 40.7051, lng: -74.0092}
        function Map(){
            return (
                <div>
                    <h1>testing</h1>
                <GoogleMap onClick={clickHandler} options={mapOptions} zoom={10} center={center} mapContainerClassName='mapContainer'>
                    <Marker options={markerOptions} position={center} />
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