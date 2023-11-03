import React from 'react'

const ResultsCard = ({el}) => {
console.log(el)
  return (
    <div>
      <img src={el.urls.regular} alt="" />
      <h4>Author: {el.user.name}</h4>
    </div>
  )
}

export default ResultsCard