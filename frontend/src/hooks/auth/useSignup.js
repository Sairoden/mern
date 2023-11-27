// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

// SERVICES
import { signup as signupApi } from "../../services";

// CONTEXTS
import { useAuthContext } from "../../contexts/auth_context";

export const useSignup = () => {
  const { login } = useAuthContext();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: data => {
      login(data);
      toast.success("Signup successfully");
    },
    onError: err => toast.error(err.message),
  });

  return { signup, isPending };
};
