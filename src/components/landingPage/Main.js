import React from "react";
import "./landing.scss";
import Header from "./Header";
import Intro from "./Intro";

export default function LandingPage() {
  return (
    <div className="main-landing">
      <Header />
      <Intro />
    </div>
  );
}
