// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

// SERVICES
import { signup as signupApi } from "../../../services";

export const useSignup = () => {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => toast.success("Signup successfully"),
    onError: err => toast.error(err.message),
  });

  return { signup, isPending };
};
