import React, { useState } from 'react'
import Card from './Card'
import update from 'immutability-helper'


const SourceBox = (props) => {
  const [cards, setCards] = useState(props.ITEMS)
  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id)
    setCards(
      update(cards, {
        $splice: [[index, 1], [atIndex, 0, card]],
      }),
    )
  }
  const findCard = id => {
    const card = cards.filter(c => `${c.id}` === id)[0]
    return {
      card,
      index: cards.indexOf(card),
    }
  }
  return (

      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}>
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
