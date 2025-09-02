import { jobList } from "../../data/JobsData";
import JobCard from "../Common/JobCard";
import Sort from "../Common/Sort";

const Jobs = () => {
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Recommended Jobs</div>
            <Sort />
        </div>
        <div className="mt-10 flex flex-wrap gap-10">
            {
                jobList.map((job, index) => <JobCard key={index} {...job} />)
            }
        </div>

    </div>
}

export default Jobs;