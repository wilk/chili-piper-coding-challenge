import React, { Component } from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isValid: true
        };
    }

    render() {
        return (<div>
            <Form isFormValid={isValid => this.setState({ isValid })}></Form>
            <Message>{this.state.isValid ? 'Form is Incomplete!' : 'Form is Complete!'}</Message>
        </div>);
    }
}

export default App;
