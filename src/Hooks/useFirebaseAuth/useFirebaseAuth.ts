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
      dispatch(updateUserInfo(authUser ?? null));
      console.log(authUser)
      if (authUser) {
       return router.replace("/dashBoard");
      }
      router.replace("/login");
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};

export default useFirebaseAuth;
