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
            <p>登录</p>
        </div>
    }
}

