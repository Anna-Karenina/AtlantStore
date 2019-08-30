import React, { useState, useEffect } from 'react'

import Card from './Card'
import update from 'immutability-helper'

const SourceBox = (props) => {
  const [cards, setCards] = useState(props.customer)
  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id)
    setCards(
      update(cards, {
        $splice: [[index, 1], [atIndex, 0, card]],
      }),
    )
  }
useEffect( () => {
    setCards(props.customer);
}, [props.customer]);

  const findCard = id => {
    const card = cards.filter(c => `${c.id}` === id)[0]
    return {
      card,
      index: cards.indexOf(card),
    }
  }
console.log(cards)
  return (
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column',
      marginTop: '15px'}}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={`${card.id}`}
            name={card.name}
            moveCard={moveCard}
            findCard={findCard}
          />))}
          </div>
  )
}
export default SourceBox
