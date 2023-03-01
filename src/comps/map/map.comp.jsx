// React
import { useState, useEffect } from 'react';

// Leaflet
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

// Images
import Pin from '../../assets/icons/pin.svg';

// Styles
import '../map/map.styles.scss';

// CHILDREN OF MAP CONTAINER ARE IMMUTABLE
// THIS FUNCTION ALLOWS US TO TAKE IN PROPS AND UPDATE THE MAP USING PROPS
const ChangeMap = ({center, zoom}) => {
    const map = useMap();
    map.setView(center, zoom, {duration: 5});
    return null;
}

const Map = (props) => {
    const customIcon = new Icon({
        iconUrl: `${Pin}`,
        iconSize: [40, 40]
    })

    return(
    <div className='leaflet-container' id='map'>
        <MapContainer scrollWheelZoom={false}>
            <ChangeMap center={props.mapCenter} zoom={props.zoom}/>
            <Marker
                position={props.locations.NYoffice}
                icon={customIcon}
                >
                <Popup>New York Office</Popup>
            </Marker>
            <Marker
                position={props.locations.PHLoffice}
                icon={customIcon}
                >
                <Popup>Philadelphia Office</Popup>
            </Marker>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </MapContainer>
    </div>
    )
}

export default Map;
