import { jobList } from "../../data/JobsData"
import JobCard from "../Common/JobCard"

const OrgJobs = () => {
    return <div className="mt-10 flex flex-wrap gap-5">
    {
        jobList.map((job, index) => <JobCard key={index} {...job} />)
    }
</div>
}

export default OrgJobs