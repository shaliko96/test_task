import React from 'react';

import styles from './infoBox.module.scss';
interface IInfoBox {
  color?: string;
  text: string;
}
const InfoBox: React.FC<IInfoBox> = ({ color = '#09BB53', text }) => {
  return (
    <div className={styles.infoBox} style={{ background: color }}>
      {text}
    </div>
  );
};

export default InfoBox;
