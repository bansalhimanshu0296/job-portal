import JobDesc from "../../components/JobDesc/JobDesc";
import RecommendedSection from "../../components/Common/RecommendedSection";
import BackButton from "../../components/Common/BackButton";

const JobDescPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <BackButton toLink="/find-jobs" />
            <div className="flex gap-5 justify-around">
                <JobDesc />
                <RecommendedSection isTalent={false} />
            </div>
        </div>
    )
}
export default JobDescPage