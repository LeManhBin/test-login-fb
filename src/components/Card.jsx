import React from 'react'
import {useNavigate} from 'react-router-dom';
const Card = ({post}) => {
  const navigate = useNavigate()

  const handleShowDetail = (id) => {
    navigate(`/post/${id}`)
  }
  return (
    <div className='card'>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className='img'/>
        <p className='desc'>{post.desc}</p>
        <button className="cardButton" onClick={() => handleShowDetail(post.id)}>See More</button>
    </div>
  )
}

export default Card