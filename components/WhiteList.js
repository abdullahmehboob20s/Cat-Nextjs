import React from "react";
import styles from "scss/components/WhiteList.module.scss";
import SocialIcon from "./SocialIcon";
// import discordIcon from "public/images/discord-logo.png";
// import twitterIcon from "public/images/twitter-logo.png";
// import whitelistCat from "public/images/whitelist-cat.png";
import Image from "next/image";

function WhiteList() {
  return (
    <div className={`${styles.wrapper}`}>
      <aside>
        <img
          src="/images/whitelist-cat.png"
          className={`${styles.cat}`}
          alt=""
        />
      </aside>
      <section>
        <h1 className="fs-40px yellow weight-6 mb-25px">WhiteList</h1>

        <main className="mb-40px">
          <p className="fs-20px white weight-4 lh-1_7 mb-25px">
            This is a Whitelist-only FREE MINT. Whitelist spots are given to
            Discord members over Level 20. Whitelist submission ends on May 18th
            17:00 PST.
          </p>
          <p className="fs-20px white weight-4 lh-1_7">
            This is a Whitelist-only FREE MINT. Whitelist spots are given to
            Discord members over Level 20. Whitelist submission ends on May 18th
            17:00 PST.
          </p>
        </main>

        <footer>
          <SocialIcon>
            <img
              src="/images/discord-logo.png"
              alt=""
              style={{ width: ".4em" }}
            />
          </SocialIcon>
          <SocialIcon>
            <img
              src="/images/twitter-logo.png"
              alt=""
              style={{ width: ".5em" }}
            />
          </SocialIcon>
        </footer>
      </section>
    </div>
  );
}

export default WhiteList;
