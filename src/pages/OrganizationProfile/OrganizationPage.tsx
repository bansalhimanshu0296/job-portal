import BackButton from "../../components/Common/BackButton"
import RecommendedSection from "../../components/Common/RecommendedSection"
import Organization from "../../components/Organization/Organization"

const OrganizationPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <BackButton toLink=""/>
            <div className="flex gap-5">
                <Organization />
                <RecommendedSection isSimilarOrgs={true} />
            </div>
        </div>
    )    
}

export default OrganizationPage