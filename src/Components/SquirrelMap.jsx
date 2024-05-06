import React from 'react'
import {
  APIProvider, 
  Map, 
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';

function SquirrelMap({GOOGLE_MAPS_TOKEN, GOOGLE_MAP_ID, position}) {
  return (
  <div>
    <p>LAST SPOTTED</p> 
    <APIProvider apiKey={GOOGLE_MAPS_TOKEN}> 
        <div style={{ height: "400px", width: "400px" }}>
            <Map defaultZoom={15} defaultCenter={position} mapId={GOOGLE_MAP_ID}>
                <AdvancedMarker position={position}>
                    <Pin
                        background={"purple"} 
                        borderColor={"black"} 
                        glyphColor={"white"}
                    />
                </AdvancedMarker>
            </Map> 
        </div>
    </APIProvider>
</div>
  )
}

export default SquirrelMap