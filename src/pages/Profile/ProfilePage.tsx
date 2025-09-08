import Profile from "../../components/Profile/Profile"
import { profile } from "../../data/TalentData"

const ProfilePage = () => {
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']" >
        <Profile {...profile} />
    </div>
    
}

export default ProfilePage