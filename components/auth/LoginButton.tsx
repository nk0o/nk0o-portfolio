import { auth } from "../../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LoginButton() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <button disabled>로딩중...</button>;

  if (user) {
    return (
      <button onClick={() => auth.signOut()}>
        로그아웃
      </button>
    );
  }
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // save userInfo at Firebase
    } catch (error) {
      alert("로그인 실패: " + error);
    }
  };

  return (
    <button onClick={handleLogin}>
      구글로 로그인
    </button>
  );
}