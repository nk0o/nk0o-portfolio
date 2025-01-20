
import styles from "./page.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export default function AboutPage() {
  return (
    <div className={cx("page-about")}>About Me</div>
  );
}
