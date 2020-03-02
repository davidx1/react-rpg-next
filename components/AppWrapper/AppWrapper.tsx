import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Viewport from '../Viewport'

import useCommandState from '../../hooks/useCommandState'
import usePlayer from '../../hooks/usePlayer'
import useGameLoop from '../../hooks/useGameLoop'

import * as initialState from '../../constants/initialState'

const AppWrapper: React.FC = ({ topLayer, bottomLayer }) => {
  const { handleKeyDown, handleKeyUp, commandState } = useCommandState()
  const { playerState, movePlayer, stopPlayer } = usePlayer(initialState.player)

  const movementKeyState = useRef(commandState.movement)

  useEffect(() => {
    movementKeyState.current = commandState.movement
  }, [commandState.movement])

  useGameLoop(() => {
    const len = movementKeyState.current.length
    if (len) {
      movePlayer(movementKeyState.current[len - 1], topLayer)
    } else {
      stopPlayer()
    }
  })

  return (
    <Viewport onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      <BottomLayer></BottomLayer>
      <TopLayer></TopLayer>
    </Viewport>
  )
}

export default App

const BottomLayer = styled.div`
  position: relative;
  z-index: 5;
`

const TopLayer = styled.div`
  position: relative;
  z-index: 10;
`
