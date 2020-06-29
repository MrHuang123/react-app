import React, { Component } from 'react';

export default class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    handleClick = ()=>{
        this.setState(state => ({
            count: state.count+1
        }));
    }
    render(){
        return <div>
            <p>这是首页</p>
            <button onClick={this.handleClick}>点击一下</button>
            <p>{this.state.count}</p>
        </div>
    }
}

