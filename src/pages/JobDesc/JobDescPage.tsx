import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";
import JobDesc from "../../components/JobDesc/JobDesc";
import RecommendedSection from "../../components/Common/RecommendedSection";

const JobDescPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-4 inline-block" to="/find-jobs">
                <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="brightSun.4">Back</Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <JobDesc />
                <RecommendedSection isTalent={false} />
            </div>
        </div>
    )
}
export default JobDescPage