export const login = async ({ email, password }) => {
  const res = await fetch("http://localhost:3000/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await res.json();

  if (!data || !res.ok) throw new Error("Couldn't login. Please try again");

  return data;
};

export const signup = async ({ name, email, password }) => {
  const res = await fetch("http://localhost:3000/api/v1/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const data = await res.json();

  if (!data || !res.ok) throw new Error("Couldn't sign up. Please try again");

  return data;
};
