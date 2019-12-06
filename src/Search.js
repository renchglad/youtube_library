import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        console.log("coucou");
        super(props);
        this.state = {
            field: 'Type here...',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label htmlFor="video-search">Search : </label>
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.field}/>
                    </div>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.research(this.state.field);
    }

    handleChange(event) {
        this.setState({
            field: event.target.value
        });
    }
}