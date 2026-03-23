import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import generateJWT from "../utils/generateJWT";
// const myenv = require("dotenv");

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState();
  TabTitle("Home - Shop-Stop");

  useEffect(() => {
    generateJWT();
    var config = {
      method: "get",
      url: process.env.REACT_APP_MAIN_URI,
      headers: {
        spit_ITLAB: localStorage.getItem("jwt"),
      },
    };
    axios(config)
      .then((res) => setFeaturedItems(res.data))
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Landing />
      <FeaturedCategories />
      <FeaturedItems items={featuredItems} />
    </Fragment>
  );
};

export default Home;
