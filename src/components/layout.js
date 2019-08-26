import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import  'bootstrap'

import { HeaderComponent } from "./header/header.component"
import "./layout.scss"
import {ContentComponent} from "./content/content.component";
import {FooterComponent} from "./footer/footer.component";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="wrapper container-fluid px-4">
      <HeaderComponent/>
      <ContentComponent/>
      <FooterComponent/>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
