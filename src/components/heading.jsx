import React, { Component } from 'react';


class Heading extends Component {
    render() {
        return (
            <div className="img-section">
                <img src={this.props.image} alt="Contact BiT" />
            </div>
        );
    }
}

export default Heading;