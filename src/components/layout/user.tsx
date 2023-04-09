import { Link, Outlet } from "react-router-dom"
import Footer from "../footer"
import { useLocalStorage } from "../../pages/hook"

const UserLayout = () => {
    const [user, setUser] = useLocalStorage('user', null)
    return <>
        {/* Header */}
        <header className="bg-red-500 flex">
            <div className="  flex items-center gap-4 py-2">
                <img className="w-[50px] ml-60" src="/logo.png" alt="" />
                <input className="w-[600px] h-[30px] rounded-lg " type="text" placeholder="search" />
                <p className="text-white">Xin chào: {user && user.lastName}</p>
            </div>
            <div className="flex items-center pl-[100px]">
                <Link to={'/signin'}>
                    <button className="pr-[20px]">Signin</button>
                </Link>
                <Link to={"/signup"}>
                    <button>Signup</button>
                </Link>
            </div>
        </header>

        {/* Content */}
        < Outlet />
        <footer>
            <Footer />
        </footer>
    </>
}

export default UserLayout