import { talents } from "../../data/TalentData"
import TalentCard from "../FindTalents/TalentCard"
import { jobList } from "../../data/JobsData";
import JobCard from "../FindJobs/JobCard";
import { similar } from "../../data/Organization";
import OrgsCard from "../Organization/OrgsCard";

interface recommendationProps{
    isTalent?: boolean;
    isJobs?: boolean;
    isSimilarOrgs?: boolean;
}
const RecommendedSection = (props: recommendationProps) => {
    return <div className={`${props?.isSimilarOrgs && "w-1/4"}`}>
        {
            (props?.isTalent || props?.isJobs) && 
            <div className="text-xl font-semibold mb-5">Recommended {props?.isTalent ? "Talents" : "Jobs"}</div>
        }
        {
            props?.isSimilarOrgs && 
            <div className="text-xl font-semibold mb-5">Similar Organizations</div>
        }
        <div className={`flex flex-col flex-wrap gap-5 ${ !props?.isSimilarOrgs &&  "justify-between"}`}>
            {props?.isTalent && talents?.map((talent, index) => index < 4 && <TalentCard key={index} {...talent} />)}
            {props?.isJobs && jobList?.map((job, index) => index < 6 && <JobCard key={index} {...job} />)}
            {props?.isSimilarOrgs && similar?.map((org, index) => <OrgsCard key={index} {...org} />)}
        </div>
    </div>
}

export default RecommendedSection