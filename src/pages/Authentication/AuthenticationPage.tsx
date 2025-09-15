import { useLocation } from "react-router"
import Login from "../../components/Authentication/Login"
import SignUp from "../../components/Authentication/SignUp"
import HeaderLogo from "../../components/Header/HeaderLogo"
import BackButton from "../../components/Common/BackButton"

const AuthenticationPage = () => {
    const location = useLocation();
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
            <div className="!absolute left-5 z-10">
                <BackButton toLink="/" label="Home" />
            </div>
            <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000
             flex [&>*]:flex-shrink-0 ${location.pathname === '/signup' ? '-translate-x-1/2' : 'translate-x-0'}`}>
                <Login />
                <div className={`w-1/2 h-full bg-mine-shaft-900 ${location.pathname === '/signup' ?
                    'rounded-r-[200px]' : 'rounded-l-[200px]'} flex items-center justify-center flex-col gap-5
                    transition-all duration-1000 ease-in-out`} >
                    <HeaderLogo isAuthentication />
                    <div className="text-2xl font-semibold text-mine-shaft-200">
                        Find the made for you
                    </div>
                </div>
                <SignUp />
            </div>
        </div>
    )
}

export default AuthenticationPage