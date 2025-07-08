"use client";  // 클라이언트 컴포넌트로 지정

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./header.module.scss";
import cs from "classnames/bind";
import LoginButton from '@/components/auth/LoginButton';
import UserInfo from '@/components/auth/UserInfo';
const cx = cs.bind(styles);

export interface navProps {
  title: string;
  link: string;
}
interface HeaderProps {
  slug: string;
}

export const Header = (props: HeaderProps) => {
  const { slug } = props;
  const nav: Array<navProps> = [
    { title: 'Home', link: '/' },
    { title: 'Projects', link: '/projects' },
    { title: 'Anywords', link: '/anywords' },
    { title: 'Contact', link: '/contactme' },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;  

    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);  
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 0);  
      }, 100); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); 
    };
  }, []);

  return (
    <header className={cx("header__wrapper", { "is-scrolled": scrolled })}>
      <div className={cx("header__inner")}>
        <h1>
          <Link href="/" className={cx("header__logo")}>NK_Lee</Link>
        </h1>
        <nav className={cx("nav__wrapper")}>
          <ul className={cx("nav__menu")}>
            {nav.map((item) => (
              <li key={item.link} className={cx("nav__menu__item", slug == item.link.split("/").pop() ? "active" : undefined)}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={cx("header__login")}>
          <LoginButton />
          <UserInfo />
        </div>
        
      </div>
    </header>
  );
};
