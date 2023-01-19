import React from 'react';

import styles from './botton.module.scss';

interface IButton {
  type: 'primary' | 'outline';
  btnType?: 'submit' | 'button';
  disabled?: boolean;
  value: string;
  onClick?: () => void;
  Icon?: React.FC;
}
const Button: React.FC<IButton> = ({
  value,
  onClick,
  disabled,
  btnType = 'button',
  type,
  Icon,
}) => {
  return (
    <button
      onClick={onClick && onClick}
      type={btnType}
      className={`${styles[type]} ${styles.btn} ${disabled ? styles.disableBtn : ''}`}
    >
      <span>{value}</span>
      {Icon ? <Icon /> : null}
    </button>
  );
};
export default Button;
