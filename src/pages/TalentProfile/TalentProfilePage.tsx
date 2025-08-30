import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";
import Profile from "../../components/TalentProfile/Profile";
import { profile } from "../../data/TalentData";
import RecommendedTalent from "../../components/TalentProfile/RecommendedTalent";

const TalentProfiletPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-4 inline-block" to="/find-talents">
                <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="brightSun.4">Back</Button>
            </Link>
            <div className="flex gap-5">
                <Profile {...profile} />
                <RecommendedTalent />
            </div>
        </div>
    )
}
export default TalentProfiletPage