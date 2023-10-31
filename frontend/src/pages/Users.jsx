// Features Components
import { UsersList } from "../features";

function Users() {
  const USERS = [
    {
      id: "sai",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
      name: "Sairoden",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
