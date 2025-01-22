import { Link } from "react-router-dom"

const Homepage: React.FC = () => {
  return (
    <div>
      <div>
        HomePage
      </div>
      <div>
        <Link to='/profile'>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Profile
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage