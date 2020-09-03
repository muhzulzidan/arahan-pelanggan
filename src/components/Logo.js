import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default function Logo() {
  return (
    <StaticQuery
      query={graphql`
        query LogoQuery {
            imageSharp {
                fluid(quality: 8, maxWidth: 600, toFormat: WEBP, webpQuality: 8, toFormatBase64: WEBP, pngQuality: 8) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
      `}
      render={data => (
          <div className="Logo">
          < Img fluid={data.imageSharp.fluid}></Img>
          </div>
      )}
    />
  )
}