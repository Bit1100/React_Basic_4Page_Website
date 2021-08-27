import React, { Component } from 'react';
import Heading from "./heading";
import Form from "./form";

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <Heading image={this.props.image} />
                <Form />
            </div>
        );
    }
}

export default Contact;