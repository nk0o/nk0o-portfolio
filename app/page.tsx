import cs from "classnames/bind";
import styles from "./main.module.scss";
const cx = cs.bind(styles);

export default function Home() {
  return (
    <main className={cx("main-wrpper")}>
       메인페이지
    </main>
  );
}
