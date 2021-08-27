import React, { Component } from 'react';

class ServiceBox extends Component {
    static defaultProps = {
        service: { image: "No image", heading: "No Heading", para: "No Para" },
    }
    render() {
        const { service } = this.props;
        return (
            <>
                <div className="innerbox">
                    <img src={service.image} className="center image" alt="Service Images" />
                    <h1 className="heading center">{service.heading}</h1>
                    <p className="para">{service.para}</p>
                </div>
            </>
        );
    }
}


export default ServiceBox;