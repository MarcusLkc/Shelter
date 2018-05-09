import React, { Component } from 'react';

class Test extends Component{
    state = {
        url: null, ///set as null so expects null
        id: 1,
        background: null
    }

    componentWillMount(){
        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(data => this.setState({url: data.url}))
    }
    
    _click = () => {
        fetch(`http://api.jikan.me/anime/${this.state.id}`)
            .then(response => response.json())
            .then(data => this.setState({background: data.background}))
    }


    render(){
        return(
            <div>
                {this.state.url ? 
                    <img height={100} src={this.state.url} />
                : null
                }
                <input 
                    type="text" 
                    value={this.state.id} onChange={(e) => this.setState({id: e.target.value})}
                />
                <button onClick={this._click}>click me</button>

                <p>{this.state.background}</p>
            </div>
        )
    }

}


export default Test;