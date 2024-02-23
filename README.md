# Frontend Mentor - IP address tracker solution

This is a solution to the
[IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections
you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and
  location

### Screenshot

![Desktop View](https://raw.githubusercontent.com/Lukheri/ip-address-tracker/master/src/images/Desktop.jpeg)
![Mobiel View](https://raw.githubusercontent.com/Lukheri/ip-address-tracker/master/src/images/Mobile.jpeg)

### Links

- Solution URL:
  [Add solution URL here](https://www.frontendmentor.io/solutions/ip-address-tracker-using-react-and-reactleaflet-IUdBKpRR1i)
- Live Site URL:
  [Add live site URL here](https://ip-address-tracker-rho.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Tailwind
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

With this project I learned how to use the Leaflet api along with react-leaflet
which is a library for integrating the popular open-source JavaScript library
for maps, Leaflet, into React applications. This project also honed my skills
with API integrations as a result.

Below is the integration of the `Leaflet` Map Container using `react-leaflet`
with a function component so we can use the `useMap()` function from `Leaflet`
and automatically recenter the map based on the `coordinates` state.

```react-leaflet

  const RecenterAutomatically = ({
    newCoords,
  }: {
    newCoords: LatLngExpression
  }) => {
    const map = useMap()
    useEffect(() => {
      map.setView(newCoords)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newCoords])
    return null
  }

  <MapContainer center={coordinates} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    <Marker position={coordinates} icon={markerIcon}></Marker>
    <RecenterAutomatically newCoords={coordinates} />
  </MapContainer>
```

### Useful resources

- [React-leaflet documentation](https://react-leaflet.js.org/docs/start-introduction/) -
  This helped me for in implementing the map using leaflet with react.

## Author

- Website - [Luke Heri Contrivida](https://www.lukheri.vercel.app)
- Frontend Mentor -
  [@yourusername](https://www.frontendmentor.io/profile/Lukheri)
