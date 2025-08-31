import { talents } from "../../data/TalentData"
import TalentCard from "../FindTalents/TalentCard"
import { jobList } from "../../data/JobsData";
import JobCard from "../FindJobs/JobCard";

interface recommendationProps{
    isTalent: boolean;
}
const RecommendedSection = (props: recommendationProps) => {
    return <div>
        <div className="text-xl font-semibold mb-5">Recommended {props?.isTalent ? "Talents" : "Jobs"}</div>
        <div className="flex flex-col flex-wrap gap-5 justify-between">
            {props?.isTalent && talents?.map((talent, index) => index < 4 && <TalentCard key={index} {...talent} />)}
            {!props?.isTalent && jobList?.map((job, index) => index < 6 && <JobCard key={index} {...job} />)}
        </div>
    </div>
}

export default RecommendedSection