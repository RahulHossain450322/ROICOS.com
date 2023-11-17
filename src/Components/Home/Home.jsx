import { useState } from "react";
import Lg_Nav from "../Navbar/Lg_Nav";
import Hero from "./Hero_sec/Hero";
import Export from "./Export_sec/Export";
import Official_ads from "./Official_adds/Official_ads";
import Success_Stories from "./Success_Stories/Success_Stories";
import Others_Stories from "./Others_stories/Others_Stories";
import Solutions from "./Solutions/Solutions";
import Help_and_Review from "./Helper&Review/Help_and_Review";
import Youtube_marketing from "./Youtube_Marketing/Youtube_marketing";
import Last_News from "./Last_News/Last_News";
import FAQ from "./FAQ_SEC/FAQ";
import News_letter from "./NewsLetter/News_letter";
import Footer from "../Footer/Footer";
import Mobile_nav from "../Navbar/Mobile_nav";
function Home() {
  return (
    <>
      <Lg_Nav />
      <Mobile_nav />
      <Hero />
      <Export />
      <Official_ads />
      <Success_Stories />
      <Others_Stories />
      <Solutions />
      <Help_and_Review />
      <Youtube_marketing />
      <Last_News />
      <FAQ />
      <News_letter />
      <Footer />
    </>
  );
}

export default Home;
