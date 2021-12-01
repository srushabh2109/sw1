import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import BlogLists from "./BlogLists";
import Careers from "./Careers";
import Products from "./Products";
import ShonitPage from "./ShonitPage";
import ShravaPage from "./ShravaPage";
import ScrollToTop from "./ScrollToTop";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ResearchPage from "./ResearchPage";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import TermsConditions from "./TermConditions";

const App = () => {
  return (
    <div className="main">
      <Helmet>
        <script src="/assets/js/gradient.js" />
      </Helmet>
      <Router forceRefresh={true}>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogLists />
            </Route>
            <Route path="/careers" exact>
              <Careers />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/shonit" exact>
              <ShonitPage />
            </Route>
            <Route path="/shrava" exact>
              <ShravaPage />
            </Route>
            <Route path="/aboutus" exact>
              <AboutUs />
            </Route>
            <Route path="/contactus" exact>
              <ContactUs />
            </Route>
            <Route path="/research" exact>
              <ResearchPage />
            </Route>
            <Route path="/terms" exact>
              <TermsConditions />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
