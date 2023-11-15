import { useEffect } from "react";
import "firebase/auth";
import { auth } from "../../Config/Firebase";
import { useAppDispatch } from "@/Redux";
import { updateUserInfo } from "@/Features/Auth/AuthSlice";
import { useRouter } from "next/navigation";

const useFirebaseAuth = (): void => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        router.replace("/dashBoard");
      }
      dispatch(updateUserInfo(authUser ?? null));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};

export default useFirebaseAuth;
