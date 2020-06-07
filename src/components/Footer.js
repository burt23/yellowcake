import React from 'react'
// import InstagramFeed from './InstagramFeed'
import './Footer.css'
// import InstagramEmbed from 'react-instagram-embed'

// const InstagramFeed = () => (
//   <InstagramEmbed
//     url="https://www.instagram.com/p/B8sQg4qFJA0/"
//     maxWidth={320}
//     hideCaption={false}
//     containerTagName="div"
//     protocol=""
//     injectScript
//     onLoading={() => {}}
//     onSuccess={() => {}}
//     onAfterRender={() => {}}
//     onFailure={() => {}}
//   />
// )

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/colorsciencestudios/">
        @colorsciencestudios
      </a>
    </h2>
    <br />
    {/* <InstagramFeed /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://colorsciencestudios.com/">Color Science Studios</a>.
        </span>
      </div>
    </footer>
  </div>
)
