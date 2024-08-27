import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./menu.module.css";

export type MenuType = {
  className?: string;
};

const Menu: NextPage<MenuType> = ({ className = "" }) => {
  const onMenu1ContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onMenu2ContainerClick = useCallback(() => {
    // Please sync "connections" to the project
  }, []);

  const onGroupIconClick = useCallback(() => {
    // Please sync "explore" to the project
  }, []);

  const onMenu4ContainerClick = useCallback(() => {
    // Please sync "requests" to the project
  }, []);

  const onIconClick = useCallback(() => {
    // Please sync "messages" to the project
  }, []);

  return (
    <footer className={[styles.menu, className].join(" ")}>
      <div className={styles.menuList}>
        <div className={styles.menu1} onClick={onMenu1ContainerClick}>
          <div className={styles.homeContainer}>
            <div className={styles.menu11} onClick={onMenu1ContainerClick}>
              <img
                className={styles.lihomeIcon}
                loading="lazy"
                alt=""
                src="/lihome.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.menuItemProfile}>
          <div className={styles.menu2} onClick={onMenu2ContainerClick}>
            <img
              className={styles.person2Icon}
              loading="lazy"
              alt=""
              src="/person2.svg"
            />
          </div>
        </div>
        <div className={styles.menuItemPlaceholder}>
          <img
            className={styles.menuItemPlaceholderChild}
            loading="lazy"
            alt=""
            src="/group-1321315431.svg"
            onClick={onGroupIconClick}
          />
        </div>
        <div className={styles.menu4Wrapper}>
          <div className={styles.menu4} onClick={onMenu4ContainerClick}>
            <img
              className={styles.lihomeIcon}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <img
            className={styles.icon1}
            loading="lazy"
            alt=""
            src="/icon-1.svg"
            onClick={onIconClick}
          />
        </div>
      </div>
    </footer>
  );
};

export default Menu;
