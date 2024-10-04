function VideoCard(){
    return <div className="w-96">
        <img src="/thumbnail.png" className="rounded-lg"></img>
        <div className="grid grid-cols-8">
            <div className="col-span-1 my-2">
                <img src="/thumbnail.png" className="rounded-full w-8 h-8"></img>
            </div>
            <div className="col-span-7">
                {/* the div below this comment */}
                <div className="text-md line-clamp-2 overflow-hidden">Video Heading Video Heading Video Heading Video Video Heading Video Heading Video Heading Video Video Heading Video Heading Video Heading Video</div>
                <div className="text-xs pt-1">channel name</div>
                <div className="text-xs">Views | 1 year ago</div>
            </div>
        </div>
    </div>
}

export default VideoCard;