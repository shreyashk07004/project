import type { NextPage } from "next";
import SubPageV from "./sub-page-v";
import styles from "./profile-page.module.css";

export type ProfilePageType = {
  className?: string;
};

const ProfilePage: NextPage<ProfilePageType> = ({ className = "" }) => {
  return (
    <section className={[styles.profilePage, className].join(" ")}>
      <div className={styles.profileHeader}>
        <SubPageV />
        <img
          className={styles.solarsettingsLinearIcon}
          loading="lazy"
          alt=""
          src="/solarsettingslinear.svg"
        />
      </div>
    </section>
  );
};

export default ProfilePage;
