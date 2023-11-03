import React from 'react'
import './Homepage.scss'

const ResultsCard = ({el}) => {
console.log(el)
  return (
    <div>
      <img className='image' src={el.urls.regular} alt="" />
      <a href={el.user.social.portfolio_url
      }><h4>{el.user.name}</h4></a>
    </div>
  )
}

export default ResultsCard