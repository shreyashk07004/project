import type { NextPage } from "next";
import ProfilePage from "../components/profile-page";
import Content from "../components/content";
import Menu from "../components/menu";
import styles from "./index.module.css";

const ProfileBasic: NextPage = () => {
  return (
    <div className={styles.profileBasic}>
      <main className={styles.connections}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <ProfilePage />
        <Content />
        <section className={styles.connectionsInner}>
          <div className={styles.bioContentParent}>
            <div className={styles.bioContent}>
              <div className={styles.bioInfo}>
                <div className={styles.bio}>Bio</div>
                <div className={styles.editBio}>
                  <img
                    className={styles.editIcon}
                    loading="lazy"
                    alt=""
                    src="/edit.svg"
                  />
                </div>
              </div>
              <div className={styles.alexJohnsonIs}>
                Alex Johnson is a passionate and innovative UI/UX Designer with
                over seven years of experience in creating user-centered designs
                for web and mobile applications. Alex specializes in designing
              </div>
            </div>
            <div className={styles.interestsContentParent}>
              <div className={styles.interestsContent}>
                <div className={styles.interestHeader}>
                  <div className={styles.interest}>Interest</div>
                </div>
                <div className={styles.interestTags}>
                  <div className={styles.aimlWrapper}>
                    <div className={styles.aiml}>AIML</div>
                  </div>
                  <button className={styles.cyberWrapper}>
                    <div className={styles.cyber}>Cyber</div>
                  </button>
                  <div className={styles.internationalAffairWrapper}>
                    <div className={styles.internationalAffair}>
                      International affair
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <button className={styles.spaceTechWrapper}>
                    <div className={styles.spaceTech}>Space tech</div>
                  </button>
                  <button className={styles.startupsWrapper}>
                    <div className={styles.startups}>Startups</div>
                  </button>
                </div>
              </div>
              <div className={styles.editBio}>
                <img
                  className={styles.editIcon}
                  loading="lazy"
                  alt=""
                  src="/edit.svg"
                />
              </div>
            </div>
            <div className={styles.readingInterests}>
              <div className={styles.readingContent}>
                <div className={styles.readingList}>
                  <div className={styles.readingItems}>
                    <div className={styles.youtubeZnp}>Youtube ZNP</div>
                    <div className={styles.sportsCategory}>
                      <div className={styles.sports}>Sports</div>
                      <div className={styles.news}>News</div>
                      <div className={styles.technology}>Technology</div>
                    </div>
                    <div className={styles.booksCategory}>
                      <div className={styles.booksZnp}>Books ZNP</div>
                      <div className={styles.bookIcon}>
                        <input className={styles.group} type="radio" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.bookIcon}>
                    <input className={styles.group} type="radio" />
                  </div>
                </div>
                <div className={styles.readingCategories}>
                  <div className={styles.currentAffairs}>Current Affairs</div>
                  <div className={styles.fiction}>Fiction</div>
                  <div className={styles.technology1}>Technology</div>
                </div>
              </div>
              <div className={styles.bookPreferences}>
                <div className={styles.bookVisibility}>
                  <div className={styles.psychologicalAssessment}>
                    <div className={styles.assessmentDownload}>
                      <div className={styles.visibleToWrapper}>
                        <div className={styles.visibleTo}>Visible to :</div>
                      </div>
                      <div className={styles.assessmentVisibility}>
                        <div className={styles.visibleTo}>Visible to :</div>
                        <div className={styles.visibilitySettings}>
                          <div className={styles.visibleTo2}>Visible to :</div>
                          <div className={styles.visibleTo3}>Visible to :</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.readingLevel}>
                      <div className={styles.levelDetailsWrapper}>
                        <div className={styles.levelDetails}>
                          <div className={styles.levelValue}>
                            <img
                              className={styles.groupIcon}
                              loading="lazy"
                              alt=""
                              src="/group-2.svg"
                            />
                            <div className={styles.level4}>Level 4</div>
                          </div>
                          <div className={styles.readingTime}>
                            <div className={styles.timeDistribution}>
                              <div className={styles.hrs}>24 hrs</div>
                              <div className={styles.hrs}>84 hrs</div>
                              <div className={styles.hrs2}>49 hrs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.bookLevel}>
                        <div className={styles.bookLevelInner}>
                          <div className={styles.groupParent}>
                            <img
                              className={styles.groupIcon}
                              loading="lazy"
                              alt=""
                              src="/group-3.svg"
                            />
                            <div className={styles.level3}>Level 3</div>
                          </div>
                        </div>
                        <div className={styles.books}>2 Books</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bookVisibilityOptions}>
                    <div className={styles.books1}>8 Books</div>
                  </div>
                  <div className={styles.bookVisibilityOptions}>
                    <div className={styles.books2}>7 books</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.reportContentParent}>
              <div className={styles.reportContent}>
                <div className={styles.reportDetails}>
                  <div className={styles.visibleTo4}>Visible to :</div>
                  <div className={styles.psychologicalAssessmentRepor}>
                    Psychological assessment report
                  </div>
                </div>
                <div className={styles.reportEdit}>
                  <img
                    className={styles.editIcon2}
                    loading="lazy"
                    alt=""
                    src="/edit.svg"
                  />
                </div>
              </div>
              <div className={styles.downloadContentParent}>
                <div className={styles.downloadContent}>
                  <div className={styles.downloadAction}>
                    <div className={styles.downloadButton}>
                      <img
                        className={styles.materialSymbolsLightdownloaIcon}
                        alt=""
                        src="/materialsymbolslightdownload.svg"
                      />
                    </div>
                    <div className={styles.download}>Download</div>
                  </div>
                </div>
                <div className={styles.levelContainer}>
                  <img className={styles.groupIcon} alt="" src="/group-4.svg" />
                  <div className={styles.level31}>Level 3</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Menu />
      </main>
    </div>
  );
};

export default ProfileBasic;
