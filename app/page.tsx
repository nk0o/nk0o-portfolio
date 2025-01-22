import cs from "classnames/bind";
import styles from "./main.module.scss";
const cx = cs.bind(styles);

export default function Home() {
  return (
    <main className={cx("page__main")}>
       메인페이지
    </main>
  );
}
