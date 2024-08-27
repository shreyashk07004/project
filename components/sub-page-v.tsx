import type { NextPage } from "next";
import styles from "./sub-page-v.module.css";

export type SubPageVType = {
  className?: string;
};

const SubPageV: NextPage<SubPageVType> = ({ className = "" }) => {
  return (
    <div className={[styles.subPageV2, className].join(" ")}>
      <header className={styles.statusBarIphone}>
        <div className={styles.time}>
          <div className={styles.time1}>9:41</div>
        </div>
        <div className={styles.levels}>
          <img
            className={styles.cellularConnectionIcon}
            loading="lazy"
            alt=""
            src="/cellular-connection.svg"
          />
          <img
            className={styles.wifiIcon}
            loading="lazy"
            alt=""
            src="/wifi.svg"
          />
          <div className={styles.battery}>
            <div className={styles.border} />
            <img
              className={styles.capIcon}
              loading="lazy"
              alt=""
              src="/cap.svg"
            />
            <div className={styles.capacity} />
          </div>
        </div>
      </header>
      <div className={styles.navigationBar}>
        <div className={styles.back}>
          <img className={styles.arrowLeftIcon} alt="" src="/arrow-left.svg" />
        </div>
        <div className={styles.hamburgerMenu}>
          <a className={styles.connections}>My Profile</a>
        </div>
        <div className={styles.notifications}>
          <img
            className={styles.solarbellLinearIcon}
            loading="lazy"
            alt=""
            src="/solarbelllinear.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SubPageV;
