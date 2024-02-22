import React, { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { LatLngExpression, divIcon } from 'leaflet'
import { countryCodeToLocation } from '@basementuniverse/country-code-location'

const RecenterAutomatically = ({
  newCoords,
}: {
  newCoords: LatLngExpression
}) => {
  const map = useMap()
  useEffect(() => {
    map.setView(newCoords)
  }, [newCoords])
  return null
}

const Map = ({ country }: { country: string }) => {
  const [coordinates, setCoordinates] = useState<LatLngExpression>([0, 0])

  useEffect(() => {
    const converted = countryCodeToLocation(country)
    console.log(converted)

    if (converted && converted.lat && converted.long) {
      setCoordinates([converted.lat, converted.long])
    }
    console.log(coordinates)
    // mapRef.current.setView(coordinates, 15)
  }, [country])

  const markerIcon = divIcon({
    html: '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>',
    iconSize: [38, 38],
    className: '',
  })

  return (
    <div className='absolute top-[250px] -z-10 h-[calc(100dvh-250px)] w-full'>
      <MapContainer center={coordinates} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={coordinates} icon={markerIcon}></Marker>
        <RecenterAutomatically newCoords={coordinates} />
      </MapContainer>
    </div>
  )
}

export default Map
