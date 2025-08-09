import { Divider } from "@mantine/core"
import SearchBar from "../../components/Common/SearchBar"
import Jobs from "../../components/FindJobs/Jobs"

const FindJobsPage = () => {
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider size='xs' mx='md' />
        <SearchBar isJobSearch={true} />
        <Divider size='xs' mx='md' />
        <Jobs />
        
    </div>
}

export default FindJobsPage