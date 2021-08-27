import React, { Component } from 'react';
import CustomerBox from './customerbox';
import { contextHome } from './context';

class Customer extends Component {
    static contextType = contextHome;
    render() {
        const { onLeftClick, onRightClick } = this.context;
        return (
            <>
                <div className="my-2 services"></div>
                <h1 className="center heading my-2">
                    Our Customers
            </h1>
                <div className="box">
                    <button
                        className="btn"
                        onClick={onLeftClick}>
                        &lt;
                    </button>
                    <CustomerBox />
                    <button
                        className="btn"
                        onClick={onRightClick}>
                        &gt;
                    </button>
                </div>
            </>
        );
    }
}

export default Customer;