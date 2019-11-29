import React from 'react';
import Youtube from 'react-youtube'
import './App.css';
import data from './database/data';

const url = require('url');
const currentURL = new URL(window.location.href);
const userName = currentURL.searchParams.get('user');

const users = data.users;

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
            <div className="videoPanel">
                <Youtube
                    videoId={this.state.theId}
                    opts={opts}
                />
            </div>
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
                    name={this.props.itemList[i].title}
                    onClick={() => this.props.onClick(i)}
                />
            );
        }
        return table;
    }


    render() {
        return (
            <div className="listPanel">
                {this.createItemList()}
            </div>
        )
    }
}

class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: this.getUser().videos,
            current: this.getUser().videos[0],
        };
    }

    handleClick(i) {
        this.setState({
            current: this.state.itemList[i].id
        });
    }

    render() {

        return (
            <div className="mainPanel">
                <VideoList
                    itemList={this.state.itemList}
                    onClick={(i) => this.handleClick(i)}
                />
                <WatchPanel
                    youtubeId={this.state.current.id}
                />
            </div>
        );
    }

    getUser() {
        let found = false;
        let i = 0;
        let currentUser = users[0];
        while (currentUser.name !== userName && i < users.length - 1) {
            i++;
            currentUser = users[i];
            if (currentUser.name === userName)
                found = !found;
        }
        console.log(currentUser.name);
        if (found)
            return currentUser;
        else
            return null;
    }

}

export default Frame;
