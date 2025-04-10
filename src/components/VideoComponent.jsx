import React from 'react'

export default function VideoComponent({youtubeId,recipe }) {
  return (
    <>
      <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={`Video de ${recipe.strMeal}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
    </>
  )
}
