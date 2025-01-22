import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./header.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);
import logoImg from"@/public/logo.png";


export interface navProps {
  title: string;
  link: string;
}

export const Header = () => {
  const nav: Array<navProps> = [
    {title:'About Me', link:'/aboutme'},
    {title:'Projects', link:'/projects'},
    {title:'Contact Me', link:'/contactme'},
  ]

  return (
    <>
      <header className={cx("header__wrapper")}>
          <h1>
            <Link href="./" className={cx("nav__logo")}>
              <Image src={logoImg} alt="홈 화면으로 이동"  height={80} width={80} />
            </Link>
          </h1>
          <nav className={cx("nav__wrapper")}>
            <ul className={cx("nav__menu")}>
              {nav.map((item) => (
                <li key={item.link} className={cx("nav__item")}>
                  <Link data-bold={item.title} href={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
      </header>
    </>
  );
};
