// Styles
import "./UsersList.css";

// Features Components
import { UserItem } from "../../index";

function UsersList({ items }) {
  if (items.length === 0)
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );

  return (
    <ul>
      {items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}

export default UsersList;
