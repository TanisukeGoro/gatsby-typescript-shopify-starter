/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

interface SEOProps {
  description?: string
  lang?: string
  meta?: []
  title?: string
}

export const SEO = ({
  description = '',
  lang = 'ja',
  meta = [],
  title = '',
}: SEOProps) => {
  const { site } =
    useStaticQuery<GatsbyTypes.siteMetaDataQuery>(graphql`
      query siteMetaData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `)

  const metaDescription = description || site?.siteMetadata?.description
  const defaultTitle = site?.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
