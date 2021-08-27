import React, { Component } from 'react';
import Heading from "./heading";
import Detail from "./detail";

class About extends Component {
    render() {
        return (
            <div className="container">
                <Heading image={this.props.image} />
                <Detail />
            </div>
        );
    }
}

export default About;