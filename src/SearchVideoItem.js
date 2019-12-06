import React from 'react';

/**TODO: Drag and drop */

export default class SearchVideoItem extends React.Component{

    render() {
        return (
            <div onClick={() => this.props.handleVideoSelect(this.props.video)} className=' video-item item'>
                <img className='ui image' src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.description}/>
                <div className='content'>
                    <div className='header '>{this.props.video.snippet.title}</div>
                </div>
            </div>
        )
    }
}
