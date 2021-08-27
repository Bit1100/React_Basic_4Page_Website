import React, { Component } from 'react';
import Heading from "./heading";
import Service from "./service";
import Customer from "./customer";
import SocialMedia from "./socialmedia";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Heading image={this.props.image} />
                <Service />
                <Customer />
                <SocialMedia />
            </div>
        );
    }
}

export default Home;