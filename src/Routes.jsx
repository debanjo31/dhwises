import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
