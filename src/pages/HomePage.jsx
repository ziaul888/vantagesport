import React from "react";
import { NavBar } from "../component/NavBar";
import { Hero } from "../component/Hero";
import { Benefits } from "../component/Benefits/Benefits";
import { VideoCounter } from "../component/Video/VideoCounter";
import { HowItWork } from "../component/HowItWork/HowItWork";
import { SignUpForm } from "../component/SignUpForm";
import { Footer } from "../component/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Benefits />
      <VideoCounter />
      <HowItWork />
      <SignUpForm />
      <Footer />
    </>
  );
};
export default HomePage;
