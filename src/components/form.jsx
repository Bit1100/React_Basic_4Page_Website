import React, { Component } from 'react';
import axios from 'axios';
/*
String.prototype.toTitleCase = function () {
    return this.replace(/\w\S/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
} */
class Form extends Component {
    constructor(props) {
        super(props);
        // this.reference = React.createRef();
        this.reference = null;
        this.setReference = element => {
            this.reference = element;
        }
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    }
    componentDidMount() {
        this.reference.focus();
    }
    handleChange = e => {
        let targetValue = e.target.value;
        if (e.target.name === "email") {
            this.setState({ [e.target.name]: targetValue.toLowerCase() })
        } else if (e.target.name === "name") {
            this.setState({ [e.target.name]: targetValue.toUpperCase().substr(0, 15) })
        } else if (e.target.name === "phone") {
            this.setState({ [e.target.name]: targetValue.substr(0, 10) })
        } else if (e.target.name === "address") {
            this.setState({ [e.target.name]: targetValue.substr(0, 20) })
        } else {
            this.setState({ [e.target.name]: targetValue })
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        var obj = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
        }

        // Development Level Code for sending / receiving data
        axios.post(`insert.php`, obj)
            .then(res => console.log(res.data))

        /* Production Level Code for sending / receiving data
        axios.post('https://bit1100.com/extra/fullContact/insert.php', obj)
            .then(res => console.log(res.data));
 */
        this.setState({
            name: '',
            email: '',
            phone: '',
            address: ''
        })
    }
    render() {
        return (
            <form action="#" onSubmit={this.handleSubmit} className="form">
                <div className="center heading my-2">Contact Us</div>

                <input ref={this.setReference} name="name" value={this.state.name} type="text" onChange={this.handleChange} className="center  form-items" placeholder="Enter your Name" />

                <input name="email" value={this.state.email} type="email" onChange={this.handleChange} className="center  form-items" placeholder="Enter your E-mail" />

                <input name="phone" value={this.state.phone} type="phone" onChange={this.handleChange} className="center  form-items" placeholder="Enter your Phone" />

                <input name="address" value={this.state.address} type="text" onChange={this.handleChange} className="center form-items" placeholder="Enter your Address" />

                <input type="submit" className="px-2 center btn form-items" placeholder="Enter your Address" value="Submit" />
            </form>
        );
    }
}

export default Form;
