import React from "react";

const WatchPanel = ({vid}) => {
        if (!vid) {
            return <div>Loading ...</div>;
        }

        const videoSrc = `https://www.youtube.com/embed/${vid.id}`;
        console.log(vid.id);
        return (
            <div>
                <div className='ui embed'>
                    <iframe src={videoSrc} allowFullScreen title='Video player'/>
                </div>
            </div>

        )


};

export default WatchPanel;