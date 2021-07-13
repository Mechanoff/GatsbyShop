import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteMeta {
            site {
            siteMetadata {
                description
                title
            }
            }
        }
    `)
    const {title, description} = data.site.siteMetadata

    return (
        <nav>
            <h1>{title} - {description}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}
