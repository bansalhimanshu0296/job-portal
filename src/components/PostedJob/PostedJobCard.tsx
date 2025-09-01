interface PostedJobInfo{
    "jobTitle": string;
    "location": string;
    "posted": string;
}

const PostedJobCard = (props: PostedJobInfo) => {
    return <div className="bg-mine-shaft-900 rounded-xl p-2 border-l-2 border-l-bright-sun-450">
        <div className="text-sm font-semibold">{props?.jobTitle}</div>
        <div className="text-xs text-mine-shaft-300 font-medium">{props?.location}</div>
        <div className="text-xs text-mine-shaft-300">{props?.posted}</div>
    </div>
}

export default PostedJobCard