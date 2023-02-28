// Leaflet
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Styles
import '../map/map.styles.scss';

const Map = () => {
    const customIcon = new Icon({
        iconUrl: "/icons8-select-24.png",
        iconSize: [33, 33]
    })

    return(
        <div className='leaflet-container' id='map'>
            <MapContainer 
            center={[39.96089, -74.87257]} 
            zoom={15} 
            scrollWheelZoom={false}>
            <Marker 
                position={[39.96089, -74.87257]}
                icon={customIcon}
            />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            </MapContainer>
      </div>
    )
}

export default Map;