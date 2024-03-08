import { MapContainer, TileLayer } from 'react-leaflet'

const Map = () =>
  <MapContainer className="map-container" center={['-25.437370980404776', '-49.27058902123733']} zoom={6} scrollWheelZoom={true}>
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </MapContainer>

export default Map
