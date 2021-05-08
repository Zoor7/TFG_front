import React, { useEffect, useState } from 'react'
import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const GM_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const containerStyle = {
    width: '100%',
    height: '40vh'
};


const Mapa = ({ place, explorar }) => {

    const [position, setPosition] = useState()
    // const url=window.location.pathname

    useEffect(() => {
        if (place) {
            const position = {
                lat: place.location.coordinates[0],
                lng: place.location.coordinates[1]
            }
            setPosition(position)
        }

    }, [])

    const setNewPositionMarker = (marker) => {
        console.log(marker);
    }

    const getCurrentPosition=()=>{
        navigator.geolocation.getCurrentPosition(res => {
            console.log(res)
        })
    }

    return (
        <LoadScript
            googleMapsApiKey={GM_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={15}
            >
                {place ? <Marker
                    position={position}
                /> : null}

                {explorar ? <Circle
                    radius={1000}

                    center={position}
                 />
                  : null}

                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Mapa)