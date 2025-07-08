import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./auth.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export default function UserInfo() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>로딩중...</div>;
  if (!user) return <div>로그인 필요</div>;
  console.log(user);
  return (
    <div className={cx("user-info__wrapper")}>
      <div className={cx("user-info__name")}>{user.displayName}</div>
      <div className={cx("user-info__photo")}>
        <img src={user.photoURL ?? ""} alt="프로필" className={cx("user-info__photo-img")} />
      </div>
    </div>
  );
}