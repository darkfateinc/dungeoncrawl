import React from 'react'
import {connect} from 'react-redux'
import Player from '../player'
import Map from '../map'
import {stage} from '../../data/maps/1'
import store from '../../config/store'

function World(props) {
  store.dispatch({
     type: 'ADD_TILES',
     payload: {stage}
  })
    return (
      <div
        style={{
          position: 'relative',
          width: '800px',
          height: '400px',
          margin: '20px auto'
        }}
      >
        <Map/>
        <Player/>
      </div>
    )
}

function mapStateToProps(state) {
  return {
    ...state.player,
  }
}

export default connect(mapStateToProps)(World)
