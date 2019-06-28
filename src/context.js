import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

export default class Provider extends Component {

    state = {
        track_list: [],
        heading: 'Top 10 tracks'
    };

    //add API key to all requests
    componentDidMount() {
        axios.get('http://cors-anywhere.herokuapp.com/Domain Name')
        .then(res => {
            //console.log(res.data);
            this.setState({track_list: res.data.messafe.body.track_list});
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;