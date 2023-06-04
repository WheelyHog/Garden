import React, { useMemo } from 'react'
import s from './Map.module.css'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import logo from './assets/icon.png'

export default function Map() {

  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyBB6DJYpeCZshxljV9XIx53Yxm5NXs9GBs';

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 52.507791, lng: 13.375124 }), []);

  return (
    <div className={s.map}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName={s.map_container}
          center={center}
          zoom={17}
        >
          <Marker position={{ lat: 52.507791, lng: 13.375124 }} title='Tel-Ran.de' label='Tel-Ran.de' icon={logo} />
        </GoogleMap>
      )}
    </div>
  )
}
