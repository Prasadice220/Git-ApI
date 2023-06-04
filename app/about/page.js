import React from "react";
import styles from "./styles.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.description}>
        Welcome to website! We are a team of passionate individuals dedicated to
        providing high-quality products and services.
      </p>
      <p className={styles.description}>
        Used by some of the world's largest companies, Next.js enables you to
        create full-stack Web applications by extending the latest React
        features, and integrating powerful Rust-based JavaScript tooling for the
        fastest builds.
      </p>
      <div className={styles.description}>
        <ul>
          <li>For Css used styles.module.css to locally scope css</li>
          <li>For Fronted used html(jsx elements)</li>
          <li>For Api used github api https://api.github.com</li>
          <li>Used next js server side for pages like about</li>
          <li>next js will pull 10 records from api and next page 11-20 pages</li>
        </ul>
      </div>
      <p className={styles.description}>
        You can use React to build your UI, then incrementally adopt Next.js
        features to solve common application requirements such as routing, data
        fetching, integrations - all while improving the developer and end-user
        experience.
      </p>
    </div>
  );
};

export default About;
