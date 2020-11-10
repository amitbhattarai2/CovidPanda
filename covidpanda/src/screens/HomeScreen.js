import React, { useState } from 'react'
import { ReactDOM } from 'react-dom'
import MapChart from '../components/MapChart'

import ReactTooltip from 'react-tooltip'

const HomeScreen = () => {
  const [content, setContent] = useState('')
  return (
    <>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  )
}

export default HomeScreen
