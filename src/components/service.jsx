import React, { Component } from 'react';
import ServiceBox from "./servicebox";
import { contextHome } from './context';

class Service extends Component {
    static contextType = contextHome;
    render() {
        const { services } = this.context;
        return (
            <>
                <div className="my-2 services"></div>
                <h1 className="center heading my-2">
                    Our Services
                </h1>
                <div className="box">
                    {services.map(service => {
                        return (<ServiceBox
                            key={service.image}
                            service={service}
                        />);
                    })
                    }
                </div>
            </>
        );
    }
}

export default Service;