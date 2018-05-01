import React from 'react'
import { levels } from './Levels'

export const formatCards = level => {
  let symbols;
  if(level === 'beginner') {
    symbols = levels[0].cards
  } else if( level === 'hard') {
    symbols = levels[1].cards
  }

  return symbols.map((symbol, idx) => 
    <li key={idx}>{symbol}</li>
  )
}

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 'beginner',
    }
  }

  render() {
    return <ul>{formatCards(this.state.level)}</ul>
  }
}

export default CardContainer
