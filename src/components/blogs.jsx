import React, { Component } from 'react';
import Heading from "./heading";
import Menu from "./menu";
import Item from "./item";
import SocialMedia from "./socialmedia";


class Blogs extends Component {
    render() {
        return (
            <div className="container">
                <Heading image={this.props.image} />
                <Menu />
                <Item />
                <SocialMedia />
            </div>
        );
    }
}

export default Blogs;