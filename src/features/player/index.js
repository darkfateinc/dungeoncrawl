import React from 'react'
import {connect} from 'react-redux'
import handleMovement from './movement'

function Player(props) {
    return (
      <div
        style={{
          position: 'absolute',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: props.position[1],
          left: props.position[0],
          background: 'yellow',
          backgroundPosition: '0 0',
          borderRadius: '20px',
          width: '40px',
          height: '40px',
        }}
      >P</div>
    )
}

function mapStateToProps(state) {
  return {
    ...state.player,
  }
}

export default connect(mapStateToProps)(handleMovement(Player))
