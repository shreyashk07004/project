import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  const onTab3ContainerClick = useCallback(() => {
    // Please sync "profile professional" to the project
  }, []);

  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.personalInfoParent}>
        <div className={styles.personalInfo}>
          <div className={styles.masterAvatarParent}>
            <div className={styles.masterAvatar}>
              <img
                className={styles.replaceHereIcon}
                loading="lazy"
                alt=""
                src="/replace-here@2x.png"
              />
            </div>
            <div className={styles.userInfo}>
              <div className={styles.nameLocation}>
                <div className={styles.userNameLocation}>
                  <div className={styles.nameAndRole}>
                    <div className={styles.satyamMirgane22}>
                      Satyam Mirgane ,22
                    </div>
                  </div>
                  <div className={styles.nameAndRole1}>
                    <div className={styles.uiuxDesigner}>UI/UX designer</div>
                  </div>
                  <div className={styles.userLocation}>
                    <div className={styles.locationIcon}>
                      <img
                        className={styles.carbonlocationIcon}
                        loading="lazy"
                        alt=""
                        src="/carbonlocation.svg"
                      />
                    </div>
                    <div className={styles.pune}>Pune</div>
                  </div>
                </div>
                <div className={styles.locationIcon}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.styleFixedRounded}>
          <div className={styles.tab2}>
            <img
              className={styles.leadingIcon}
              alt=""
              src="/leading-icon.svg"
            />
            <div className={styles.tabs}>Products</div>
            <img
              className={styles.leadingIcon}
              alt=""
              src="/leading-icon.svg"
            />
            <div className={styles.count}>
              <div className={styles.div}>20</div>
            </div>
          </div>
          <div className={styles.tab1}>
            <img
              className={styles.leadingIcon}
              alt=""
              src="/leading-icon1.svg"
            />
            <div className={styles.tabs1}>
              <span>Basic</span>
              <span className={styles.span}>{` `}</span>
            </div>
            <img
              className={styles.leadingIcon}
              alt=""
              src="/leading-icon1.svg"
            />
            <div className={styles.count1}>
              <div className={styles.div}>20</div>
            </div>
          </div>
          <div className={styles.tab3} onClick={onTab3ContainerClick}>
            <img
              className={styles.leadingIcon}
              alt=""
              src="/leading-icon2.svg"
            />
            <div className={styles.professional}>Professional</div>
            <img
              className={styles.leadingIcon}
              alt=""
              src="/leading-icon2.svg"
            />
            <div className={styles.count}>
              <div className={styles.div}>20</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
