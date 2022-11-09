import './styles.css';
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from 'gatsby'
import { GlobalStyle } from './globalStyles';
import { Banner } from '../components/Banner';
import { Description } from '../components/Description';
import { Features } from '../components/Features';
import { Explore } from '../components/Explore';
import { Contact } from '../components/Contact';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <body className="t-body">
      <GlobalStyle />
        <div id="allrecords" className="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="5615446" data-tilda-page-id="27819835" data-tilda-page-alias="travelcrypto" data-tilda-formskey="2ad4c044296308c8efa1377e95615446" data-tilda-lazy="yes">
            <Banner />
            <Description />
            <Features />
            <Explore />
            <Contact />
        </div>
        
    </body>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
