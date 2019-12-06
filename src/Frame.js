import React from 'react';
import './App.css';
import data from './database/data';
import youtube_api from './api_youtube'
import WatchPanel from "./WatchPanel";
import VideoList from "./VideoList";
import Search from "./Search";
import SearchVideoList from "./SearchVideoList";

const currentURL = new URL(window.location.href);
const userName = currentURL.searchParams.get('user');

const users = data.users;

const KEY = "AIzaSyBAz-ywzAPmBjo4F3niP3-5Ee6EmosYl7w";

class Frame extends React.Component {

    constructor(props) {
        super(props);
        if (getUser() !== null) {
            this.state = {
                itemList: getUser().videos,
                current: getUser().videos[0],
                isSearch: false,
                listSearch: []
            };
        }
        this.handleResearch = this.handleResearch.bind(this);
    }

    handleClick(i) {
        this.setState({
            current: this.state.itemList[i],
            watchPanel: <WatchPanel youtubeVideo={this.state.itemList[i]}/>,
        });
    }

    render() {
        if (getUser() === null) {
            return (
                <h1>Please specify an user in the url</h1>
            )
        } else {
            if (!this.state.isSearch) {

                return (
                    <div className="mainPanel">
                        <VideoList
                            itemList={this.state.itemList}
                            onClick={(i) => this.handleClick(i)}
                        />
                        <button onClick={() => this.newVideo()}>+</button>
                        <WatchPanel vid={this.state.current}/>
                    </div>
                );
            } else {
                if (this.state.listSearch.length === 0)
                {
                    return (
                        <Search research={(search) => this.handleResearch(search)}/>
                    );
                } else {
                    console.log(this.state.listSearch);
                    return (
                        <div>
                            <Search research={(search) => this.handleResearch(search)}/>
                            <SearchVideoList videos={this.state.listSearch.data.items} handleVideoSelect={
                                (video) => this.videoSelect(video)
                            }/>
                        </div>

                    );
                }
            }
        }
    }

    async handleResearch(search) {
        this.setState({
            listSearch: await youtube_api.get('/search', {
                params: {
                    q: search,
                    part: 'snippet',
                    maxResults: 5,
                    key: KEY,
                    type: 'video'
                }
            })
        });
    }

    videoSelect(video) {
        let list = this.state.itemList;
        list.push({title: video.snippet.title, id: video.id.videoId});

        this.setState(this.setState({
            itemList: list,
            isSearch: false,
        }));
        /**TODO: Add video in database*/
    }

    newVideo() {
        this.setState({
            isSearch: true,
        });
    }


}

function getUser() {
    let found = false;
    let i = 0;
    let currentUser = users[0];
    while (currentUser.name !== userName && i < users.length - 1) {
        i++;
        currentUser = users[i];
        if (currentUser.name === userName)
            found = !found;
    }
    if (found)
        return currentUser;
    else
        return null;
}

export default Frame;
