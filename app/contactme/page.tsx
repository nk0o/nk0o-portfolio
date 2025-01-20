
import styles from "./page.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export default function ContactPage() {
  return (
    <div className={cx("page-contact")}>Contact Me</div>
  );
}
