import React from 'react';
import styles from "./button.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary = false, size = 'medium', backgroundColor, label }: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <div className={cx("btn-wrapper button", 
        backgroundColor ?
          (backgroundColor == "secondary")? "btn-secondary" : "btn-primary" : "btn-default")}>
      <button type="button" className={['button', `button--${size}`, mode].join(' ')}>
        {label}
      </button>
    </div>
  );
};
