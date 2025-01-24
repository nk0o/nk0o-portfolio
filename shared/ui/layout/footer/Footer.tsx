import cs from "classnames/bind";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const cx = cs.bind(styles);


export const Footer = () => {
  return (
    <>
      <footer className={cx("footer__wrapper")}>
          <div className={cx("wrapper__inner")}>
          <div className={cx("footer__links")}>
              <Link href="https://www.instagram.com/nnkk0o/" target="_blank" title="인스타그램 보러가기">
                <FontAwesomeIcon size={"xs"} icon={faInstagram} />
              </Link>
          </div>
          <div className={cx("footer__title")}>Let&apos;s talk</div>
          <Link href="mailto:skrud041@gmail.com" className={cx("footer__description")}>skrud041@gmail.com</Link>
          <div className={cx("footer__copyright")}>2025 NK0o - All rights reserved</div>
        </div>       
      </footer>
    </>
  );
};
