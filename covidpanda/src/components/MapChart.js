import React from 'react'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps'
import { geoUrl } from '../constants/mapConstants'
import { rounded } from '../processing/mapFunctions'

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip='' projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties
                  setTooltipContent(`${NAME} — ${rounded(POP_EST)}`)
                }}
                onMouseLeave={() => {
                  setTooltipContent('')
                }}
                style={{
                  default: {
                    fill: '#D6D6DA',
                    outline: 'none',
                  },
                  hover: {
                    fill: '#F53',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#E42',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  )
}

export default MapChart
