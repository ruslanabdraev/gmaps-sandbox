import React from 'react'
import GoogleMapReact from 'google-map-react'

interface Props {
    center?: { lat: number, lng: number },
    zoom?: number,
}

const GoogleMap = ({ center = {
    lat: 53.9022925,
    lng: 27.5407207
}, zoom = 12 }: Props) => {

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD8-SXke9PhOwMk3IcXtRdg1_Rrp88Eg2A' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {/* <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            /> */}
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap
