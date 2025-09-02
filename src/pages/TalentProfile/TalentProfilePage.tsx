import Profile from "../../components/TalentProfile/Profile";
import { profile } from "../../data/TalentData";
import RecommendedSection from "../../components/Common/RecommendedSection";
import BackButton from "../../components/Common/BackButton";

const TalentProfilePage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <BackButton toLink="/find-talents" />
            <div className="flex gap-5">
                <Profile {...profile} />
                <RecommendedSection isTalent />
            </div>
        </div>
    )
}
export default TalentProfilePage