import React, { Component } from 'react'



import StripeCheckout from 'react-stripe-checkout'


class Test extends Component {

    constructor(props){

        super(props)
        
        this.handleToken = this.handleToken.bind(this)
    }

    state = {
        prix : 15000,
        nom : "iphone 11 pro"
    }

    handleToken(token, addresses){
        console.log({token, addresses})
    }
    render() {

        return <>
            <div className="container p-2">
                <div className="card w-25">
                    <img className="card-img-top" src="./assets/images/iphone.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Nom : {this.state.nom}</h5>
                        <h4 className="card-title">Prix : {this.state.prix}</h4>
                        <StripeCheckout 
                            stripeKey="pk_test_51I8lthDtzUzlfGVpGsHWghE4I8MtsFvqoT6jGrGm6f2wBvkSfzQh2asbcXKIVmr7rXZoENkNORXZHwUaCKbNwQ73005hf7fgmx"
                            token={this.handleToken}
                            billingAddress
                            shippingAddress
                            amount={this.state.prix*100}
                            name={this.state.nom}
                        />
                    </div>
                </div>
            </div>
        </>
    }
}

export default Test