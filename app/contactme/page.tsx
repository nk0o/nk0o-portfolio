
import styles from "./page.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export default function ContactPage() {
  return (
    <div className={cx("contact-page")}>
      <div className="wrapper__inner">
        <p className={cx("contact-page__msg", "pulse")}>함께 멋진 결과를 만들어가고&nbsp;싶습니다.</p>
      </div>
    </div>
  );
}
