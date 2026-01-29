import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <PageNav />

  const presaleLinks = {
    condos: [
      'Surrey Condos',
      'Vancouver Condos',
      'Langley Condos',
      'Coquitlam Condos',
      'Burnaby Condos',
      'Richmond Condos',
    ],
    townhomes: [
      'Surrey Townhomes',
      'Langley Townhomes',
      'Coquitlam Townhomes',
      'Burnaby Townhomes',
    ]
  };
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">
          Start tracking now
        </Link>
      </section>
    </div>
  );
}
