import React, { Component } from 'react';
import { contextHome } from './context';

class CustomerBox extends Component {
    static contextType = contextHome;
    render() {
        const { singleService } = this.context;
        return (
            <>
                <div className="innerbox">
                    <img src={singleService.image} className="center image" alt="Service Images" />
                    <h1 className="heading center">{singleService.heading}</h1>
                    <p className="para">{singleService.para}</p>
                </div>
            </>
        );
    }
}


export default CustomerBox;