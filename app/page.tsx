import cs from "classnames/bind";
import styles from "./main.module.scss";
import AnimationDeveloper from "@/shared/ui/animation/animationDeveloper";
const cx = cs.bind(styles);

export default function Home() {
  return (
    <main className={cx("main-page")}>
      <div className="wrapper__inner">
        
      <p className={cx("intro-msg")}>&quot;Better than Yesterday&quot;</p>

      <div className={cx("intro-hero")}>
        <ul className={cx("about-msg")}>
            <li>
              <p className={cx("about-msg__title")}>퍼블리셔 경력 기반의 프론트엔드 개발자 </p>
              <p className={cx("about-msg__desc")}>웹 표준, 크로스 브라우징, 반응형 웹 등 많은 경험이 있습니다.</p>
              <p className={cx("about-msg__desc")}>새로운 도전으로 사용자의 경험을 더 풍부하게 만드는 일을 하고 싶습니다.</p>
            </li>
            <li>
              <p className={cx("about-msg__title")}>빠른 러닝커브</p>
              <p className={cx("about-msg__desc")}>새로운 도구와 프레임워크도 짧은 시간 안에 이해하고 실무에 적용할 자신이 있습니다.</p>
              <p className={cx("about-msg__desc")}>Nextjs를 빠르게 학습하여 프로젝트에 적용하였으며, 포트폴리오 제작을 하였습니다.</p>
            </li>
            <li>
              <p className={cx("about-msg__title")}>복잡한 과제를 단계적으로 해결해 나가는 즐거움</p>
              <p className={cx("about-msg__desc")}> 디바이스, UI 스타일, 인터랙션 등 다양하고 많은 문제를 경험했습니다.</p>
              <p className={cx("about-msg__desc")}>해결하는 과정에서 흥미와 배움을 느낍니다. </p>
              <p className={cx("about-msg__desc")}>문제해결 경험을 통해 효율적이고 안정적인 코드 작성 습관을 갖게 되었습니다.</p>
            </li>
        </ul>
        <AnimationDeveloper/>
      </div>


      </div>
    </main>
  );
}
