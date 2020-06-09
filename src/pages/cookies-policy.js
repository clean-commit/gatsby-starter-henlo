import React from "react";
import Helmet from "react-helmet";
import SEO from "../helpers/SEOHelper.js";

import Layout from "../components/Layout";

import "../styles/pages/page.scss";

const title = "Cookies Policy"
const description = "This is the Cookie Policy for mrkaluzny, accessible from mrkaluzny.com"
const image = ""

export const CookiesPageTemplate = () => {
  return (
    <>
      <section className="section section--large pb-64">
        <div className="container">
          <div className="section__title section__title--center text-center">
            <h1 className="title-alt">Cookie Policy<span>.</span></h1>
            <div className="text-lg">This is the Cookie Policy for mrkaluzny, accessible from mrkaluzny.com</div>
          </div>
        </div>
      </section>
      <hr className="hr hr--left"/>
      <section className="section">
        <div className="container-sm">
          <h4>What Are Cookies</h4>
          <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
          <p>For more general information on cookies see the Wikipedia article on HTTP Cookies.</p>

          <h4>How We Use Cookies</h4>
          <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

          <h4>Disabling Cookies</h4>
          <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>

          <h4>The Cookies We Set</h4>
          <p>Site preferences cookies</p>
          <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>

          <h4>Third Party Cookies</h4>
          <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
          <ul>
            <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page.
            </li>
            <li>As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.
            </li>
          </ul>

          <h4>More Information</h4>
          <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
          <p>However if you are still looking for more information then you can contact us through email: cookies@mrkaluzny.com</p>
        </div>
      </section>
    </>
  );
};

class CookiesPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <meta name="description" content={SEO.description(description)} />
          <meta property="og:title" content={SEO.title(title)}/>
          <meta property="og:description" content={SEO.description(description)} />
          <meta property="og:image" content={SEO.image(image)} />
          <title>{SEO.title(title)}</title>
        </Helmet>
        <CookiesPageTemplate />
      </Layout>
    );
  }
}

export default CookiesPage;
