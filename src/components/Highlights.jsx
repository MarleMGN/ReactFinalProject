import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from '../components/Highlight'

const Highlights = () => {
  return (
    <>
      <section id="highlights">
        <div className="container">
          <div className="row">
            <div className="highlight__wrapper">
              <Highlight
                icon={<FontAwesomeIcon icon="film" />}
                title="Stay Ahead of Releases"
                para="Scarehaus keeps you in the loop on the 
                latest horror films."
              />
              <Highlight
                icon={<FontAwesomeIcon icon="user" />}
                title="Community Favorites"
                para="Our community-curated favorites highlight 
                the most talked-about, terrifying, and 
                unforgettable movies."
              />
              <Highlight
                icon={<FontAwesomeIcon icon="skull" />}
                title="Horror for Every Mood"
                para="Our hand picked selection has the 
                perfect fright for every horror mood."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
