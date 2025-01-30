import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { throttle } from 'lodash';
// import Image from 'next/image';
// import logoImg from"@/public/logo.png";
import styles from "./header.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export interface navProps {
  title: string;
  link: string;
}
interface HeaderProps{
  slug:string
}
export const Header = ( props: HeaderProps ) => {
  const {slug} = props;
  const nav: Array<navProps> = [
    {title:'Home', link:'/'},
    {title:'Projects', link:'/projects'},
    {title:'Contact', link:'/contactme'},
  ]
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }, 100); 
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header className={cx("header__wrapper", { "is-scrolled": scrolled })}>
        <div className={cx("header__inner")}>
          <h1>
            <Link href="./" className={cx("header__logo")}>NK_Lee</Link>
          </h1>
          <nav className={cx("nav__wrapper")}>
            <ul className={cx("nav__menu")}>
              {nav.map((item) => (
                <li key={item.link} className={cx("nav__menu__item", slug == item.link.split("/").pop() ? "active": undefined)}>
                  <Link href={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
