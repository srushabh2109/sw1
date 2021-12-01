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

export const Routes = () => {
  const [currentSlide, setCurrentSlide] = useState(-1);
  return (
    <Router forceRefresh={true}>
      <Header currentSlide={currentSlide} />
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
            <Products setCurrentSlide={setCurrentSlide} />
          </Route>
          <Route path="/shonit" exact>
            <ShonitPage setCurrentSlide={setCurrentSlide} />
          </Route>
          <Route path="/shrava" exact>
            <ShravaPage setCurrentSlide={setCurrentSlide} />
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
  );
};
