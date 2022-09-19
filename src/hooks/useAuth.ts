import { useEffect, useState } from "react";
import { getAuthUser } from "../utils/api";

export function useAuth() {
  const [user, setUser] = useState();
  useEffect(() => {
    getAuthUser()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);
}
