"use client";

import cs from "classnames/bind";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const cx = cs.bind(styles);

interface FooterProps {
  isContactPage: boolean;
}

export const Footer = (props:FooterProps) => {
  const {isContactPage=false} = props
  return (
    <>
      <footer className={cx("footer__wrapper", { "is-contact-page": Boolean(isContactPage) })}>
        <div className={cx("wrapper__inner")}>
          <div className={cx("footer__contact")}>
            <div className={cx("footer__links")}>
                <Link href="https://www.instagram.com/nnkk0o/" target="_blank" title="인스타그램 보러가기">
                  <FontAwesomeIcon size={"xs"} icon={faInstagram} />
                </Link>
            </div>
            <div className={cx("footer__title")}>Let&apos;s talk!</div>
            <Link href="mailto:skrud041@gmail.com" className={cx("footer__description")}>skrud041@gmail.com</Link>
          </div>
          <div className={cx("footer__copyright")}>2025 NK0o&apos;s Portfolio - All rights reserved</div>
        </div>       
      </footer>
    </>
  );
};
