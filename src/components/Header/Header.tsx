import React from 'react';

import { MENU_ITEMS } from './header.constants';
import styles from './header.module.scss';
import { AccountIcon, LogoIcon, SearchIcon } from './Icons/MenuIcons';

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoIcon}>
        <LogoIcon />
      </div>
      <div className={styles.navLinks}>
        {MENU_ITEMS.map(({ title, Icon, url }) => {
          return (
            <a href={url} key={title}>
              <Icon />
              <p>{title}</p>
            </a>
          );
        })}
      </div>
      <div className={styles.navButtons}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <AccountIcon />
      </div>
    </div>
  );
};

export default Header;
