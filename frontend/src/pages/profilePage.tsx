import { useRef } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"



const ProfilePage : React.FC = () => {

    const profilePictureRef = useRef<HTMLInputElement>(null)
    const currentUser = useSelector((state : RootState) => state.auth)
    
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file" ref={profilePictureRef} accept="image/*" hidden/>
        <img src={currentUser.userInfo?.profilePic.toString()} onClick={() => profilePictureRef.current?.click()} alt="profile"  className="mt-2 h-24 w-24 self-center cursor-pointer rounded-full object-cover"/>
        <input defaultValue={currentUser.userInfo?.name.toString()} type="text" id="username" placeholder="Username" className="bg-slate-100 rounded-lg object-contain p-3"/>
        <input defaultValue={currentUser.userInfo?.email.toString()} type="email" id="email" placeholder="email" className="bg-slate-100 rounded-lg object-contain p-3"/>
        <input type="password" id="password" placeholder="password" className="bg-slate-100 rounded-lg object-contain p-3"/>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-4">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}

export default ProfilePage