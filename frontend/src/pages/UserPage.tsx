import React from "react";
import AdminLayout from "./AdminLayout";

interface User {
  id: string;
  name: string;
  email: string;
}

const UsersPage: React.FC = () => {
  // Sample user data - Replace this with actual API call
  const users: User[] = [
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Smith", email: "jane@example.com" },
    { id: "3", name: "Alice Johnson", email: "alice@example.com" },
  ];

  // Handlers
  const handleEdit = (id: string) => {
    console.log(`Editing user ID: ${id}`);
    // Navigate to edit page or open a modal
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting user ID: ${id}`);
    // Implement delete logic here
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-3">Name</th>
            <th className="border border-gray-300 p-3">Email</th>
            <th className="border border-gray-300 p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-3">{user.name}</td>
              <td className="border border-gray-300 p-3">{user.email}</td>
              <td className="border border-gray-300 p-3 flex gap-4">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default UsersPage;
