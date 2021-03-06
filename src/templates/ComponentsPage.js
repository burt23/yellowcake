import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const ComponentsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  // section2,
  // video,
  // videoPoster,
  // videoTitle,
  accordion,
  body,
  gallery,
  popup
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    {gallery && (
      <section className="section">
        <div className="container">
          <h2>Highlights</h2>
          <Gallery images={gallery} />
        </div>
      </section>
    )}

    {/* {section2 && (
      <section className="section">
        <div className="container">
          <Content source={section2} />
        </div>
      </section>
    )} */}

    {/* {video && (
      <section className="BackgroundVideo-section section">
        <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
          {video && <source src={video} type="video/mp4" />}
        </BackgroundVideo>
      </section>
    )} */}

    {accordion && (
      <section className="section">
        <div className="container">
          <Accordion items={accordion} />
        </div>
      </section>
    )}

    {popup && (
      <section className="section">
        <div className="container">
          <Popup>
            <Content source={popup} />
          </Popup>
        </div>
      </section>
    )}
  </main>
)

const ComponentsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ComponentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ComponentsPage

export const pageQuery = graphql`
  query ComponentsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        accordion {
          title
          description
        }
      }
    }
  }
`
