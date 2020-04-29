import React from 'react'
import {connect} from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

import './styles.css'

function getTileSprite(type) {
  switch (type) {
    case 0:
      return 'grass'
    case 5:
      return 'rock'
    case 6:
      return 'tree'
    default:

  }
}

function MapTile(props) {
  return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE
    }}
  />
}

function MapRow(props) {
  return <div className='row'
    style={{
      height: SPRITE_SIZE,
    }}
  >
    {props.tiles.map( (tile, index) => <MapTile key={index} tile={tile}/>)}
  </div>
}

function Map(props) {
    return (
      <div
        style={{
          position: 'relative',

          width: '800px',
          height: '400px',
          top: '0px',
          left: '0px',
        }}
      >
        {
          props.stage.map((row, index) => <MapRow key={index} tiles={row}/>)
        }
      </div>
    )
}

function mapStateToProps(state) {
  return {
    stage: state.map.stage
  }
}

export default connect(mapStateToProps)(Map)
