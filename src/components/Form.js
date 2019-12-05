import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            name: '',
            email: '',
            phone: '',
            url: '',
        };

    }

    onSubmit(evt) {
        evt.preventDefault();
        const currentState = { ...this.state };

        currentState.isNameValid = /^[a-z\s]{3,30}$/i.test(this.state.name);
        currentState.isEmailValid = /^[a-z]+@[a-z]+\.[a-z]+$/i.test(this.state.email);
        currentState.isPhoneValid = /^(?![0-1])[0-9]{10}$/.test(this.state.phone);
        currentState.isUrlValid = /^(http:\/\/www\.|www\.|http:\/\/.)?[a-z0-9]+\.[a-z0-9]+(\.[a-z0-9]+)?$/i.test(this.state.url);

        this.setState(currentState);

        this.props.isFormValid(currentState.isNameValid && currentState.isEmailValid && currentState.isPhoneValid && currentState.isUrlValid);
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form noValidate>
                    <h3>
                        Name:
                        <input type="text" className="name" placeholder="Enter your name" value={this.state.name} onChange={evt => this.setState({ name: evt.target.value })} />
                    </h3>
                    <h3>Email:
                        <input type="email" className="email" placeholder="Enter your email" value={this.state.email} onChange={evt => this.setState({ email: evt.target.value })} />
                    </h3>
                    <h3>Phone:
                        <input type="tel" className="phone" placeholder="Enter your phone number" value={this.state.phone} onChange={evt => this.setState({ phone: evt.target.value })} />
                    </h3>
                    <h3>Blog URL:
                        <input type="url" className="url" placeholder="Enter your blog URL" value={this.state.url} onChange={evt => this.setState({ url: evt.target.value })} />
                    </h3>
                    <div className="small-6 small-centered text-center columns">
                        <a onClick={evt => this.onSubmit(evt)} className="button success expand round text-center">Verify</a>
                    </div>
                </form>
            </div>);
    }
}

Form.propTypes = {
    isFormValid: PropTypes.func
}

export default Form;
