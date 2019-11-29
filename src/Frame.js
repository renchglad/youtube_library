import React from 'react';
import Youtube from 'react-youtube'
import './App.css';

class WatchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theId: props.youtubeId
        }
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        };
        if (this.state.theId === null) {
            return <p>Please choose a video</p>
        }
        return (
            <Youtube
                videoId={this.state.theId}
                opts={opts}
            />
        );
    }

}

class Video {
    constructor(props) {
        this.name = props.name;
        this.videoId = props.videoId;
    }
}

function Item(props) {
    return (
        <button onClick={props.onClick}>
            {props.name}
        </button>
    );
}

class VideoList extends React.Component {

    createItemList() {


        let table = [];
        for (let i = 0; i < this.props.itemList.length; i++) {
            table.push(
                <Item
                    key={i}
                    name={this.props.itemList[i].name}
                    onClick={() => this.props.onClick(i)}
                />
            );
        }
        return table;
    }


    render() {
        return (
            <div>
                {this.createItemList()}
            </div>
        )
    }
}

class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            current: new Video({name: 'Lolo au cambodge', videoId: 'NTrqvDkA5NA'}),
        };
        this.fillItemList();
    }

    fillItemList() {
        this.state.itemList.push(new Video({name: 'Lolo au cambodge', videoId: 'NTrqvDkA5NA'}));
        this.state.itemList.push(new Video({name: 'Villebrequin Initial D', videoId: 'UrTIU7jH0zE'}));
    }

    handleClick(i) {
        console.log("coucou c'est moi : " + this.state.itemList[i].videoId);
        this.setState({
            current: this.state.itemList[i].videoId
        });
    }

    render() {

        return (
            <div>
                <VideoList
                    itemList={this.state.itemList}
                    onClick={(i) => this.handleClick(i)}
                />
                <WatchPanel
                    youtubeId={this.state.current.videoId}
                />
            </div>
        );
    }


}

export default Frame;
