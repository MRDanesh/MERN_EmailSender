import React from 'react';
import {conncet, connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import {handleToken} from '../actions'

class Payments extends React.Component{
    render () {
        return (
            <StripeCheckout
                name='Emaily'
                description='5$ for 5 email credits'
                amount = {500}
                token = {(token) => this.props.handleToken(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default connect(null, {handleToken})(Payments);