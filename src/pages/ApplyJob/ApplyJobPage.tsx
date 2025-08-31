import ApplyJob from "../../components/ApplyJob/ApplyJob"
import BackButton from "../../components/Common/BackButton"

const ApplyJobPage = () => {
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <BackButton toLink="/job" />
        <ApplyJob />
    </div>
}
export default ApplyJobPage