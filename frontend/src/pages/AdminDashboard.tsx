import React from "react";
import AdminLayout from "./AdminLayout";

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>
      <p>This is the main dashboard area. Add admin-specific details here.</p>
    </AdminLayout>
  );
};

export default AdminDashboard;
