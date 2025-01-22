import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
      navigate(path);
    };

  return (
    <div className="flex h-screen">
      {/* Left-side Navigation Bar */}
      <div className="bg-gray-800 text-white w-60 p-4 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
        <button
          onClick={() => handleNavigation("/admin/users")}
          className="text-left bg-gray-700 hover:bg-gray-600 p-3 rounded-lg"
        >
          Users
        </button>
        {/* Add more buttons here if needed */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold">Welcome to the Admin Dashboard</h2>
        <p className="mt-4 text-gray-600">
          Use the navigation menu to access different sections.
        </p>
      </div>
    </div>
  )
}

export default AdminDashboard