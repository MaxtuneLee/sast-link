import React from 'react';
import style from './index.module.scss'

function Button(props: any) {
  return (
    <button className={style.primaryButton}>
      {props.children}
      <span className={style.buttonIcon}>
        <img src='/icons/next.svg' alt='next' />
      </span>
    </button>
  );
}

export default Button;
