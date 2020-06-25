import React from 'react'
import './taglineStyles.css'
export default function TaglineHero() {
  return (
    <>
      <div id="taglineWrapper">
        <p id="taglineStars">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
        </p>
        <p id="taglineTitle" contenteditable="true" spellcheck="false">
          <span>Color</span> <span>Science</span> <span>Studios</span>
        </p>
        <p id="taglineSlogan">
          <span>Web</span> & <span>Photo Co</span>.
        </p>
      </div>
    </>
  )
}
