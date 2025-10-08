import React from "react";

function SideUsers({ users, selectedUser, setSelectedUser }) {
  return (
    <div className="w-64 border-r border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-4 overflow-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Users</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.name}
            className={`cursor-pointer p-2 rounded-md mb-2 ${
              selectedUser === user.name
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            }`}
            onClick={() => setSelectedUser(user.name)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideUsers;
