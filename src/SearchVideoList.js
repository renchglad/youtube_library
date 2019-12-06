import React from 'react';
import SearchVideoItem from './SearchVideoItem';

export default class SearchVideoList extends React.Component {
    render() {
        const renderedVideos = this.props.videos.map((video) => {
            return <SearchVideoItem key={video.id.videoId} video={video} handleVideoSelect={this.props.handleVideoSelect}/>;
        });

        return <div className='ui relaxed divided list'>{renderedVideos}</div>;
    }


};