import React from "react";
import Typed from "react-typed";
import Experience from "./Experience";
import Skill from "./Skill";
import Projects from "./Projects";

const Home = ({ uname }) => {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <>
      <div className="home-component">
        <div className="home-content">
          <h2>
            Hi! I'm a{" "}
            <Typed
              className="typed"
              strings={[
                "AWS Developer.",
                "Solution Architecht.",
                "Java Developer.",
                "Android Developer.",
              ]}
              typeSpeed={100}
              backSpeed={100}
              backDelay={1000}
              loop
            />
          </h2>
        </div>
      </div>
      <p className="greet_Section">
        Hey,
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {uname}! {greeting},
        </span>
        <Typed
          className="typed"
          strings={[
            `&nbsp;Thank you for exploring my website! I welcome your valuable suggestions and look forward to engaging in meaningful discussions with you...😊`,
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
          backDelay={100000000}
        />
      </p>
      <Experience />
      <Skill />
      <Projects />
    </>
  );
};

export default Home;
