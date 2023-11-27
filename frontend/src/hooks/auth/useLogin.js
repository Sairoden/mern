// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

// SERVICES
import { login as loginApi } from "../../services";

// CONTEXTS
import { useAuthContext } from "../../contexts/auth_context";

export const useLogin = () => {
  const { login: loginAuth } = useAuthContext();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      loginAuth(data);
      toast.success("Login successfully");
    },
    onError: err => toast.error(err.message),
  });

  return { login, isPending };
};
