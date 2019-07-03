import React from "react";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const GET_NGO_REQUEST = 'GET_NGO_REQUEST';
const GET_NGO_SUCCESS = 'GET_NGO_SUCCESS';

function fetchNgo() {
    return dispatch => {
        dispatch({type: GET_NGO_REQUEST});
        // TODO: how to make the path look better?
        return fetch(`../../v1/ngo/ongtest.json`)
            .then(response => response.json())
            .then(json => dispatch(fetchNgoSuccess(json)))
            .catch(error => console.log(error));
    }
}

export function fetchNgoSuccess(json) {
    return {
        type: GET_NGO_SUCCESS,
        json
    };
}

class NgoPage extends React.Component {
    componentWillMount() {
        const {fetchNgo} = this.props;
        fetchNgo();
    }

    has_bank_account = (ngo) => {
        return ngo.bank && ngo.account && ngo.agency
    };

    paymentMethodCard = (ngo) => {
        // if (ngo.payment_type && this.has_bank_account(ngo)) {
        if (ngo.payment_type === 'paypal-form' && ngo.payment_form) {
            return (
                <div>
                    {ngo.payment_form}
                </div>
            );
        }

        // TODO: work in progress
    };

    render() {
        const {ngo} = this.props;

        if (!ngo) return (<div/>);

        return <Robson/>;

        return (
            <div className="container">
                <div className="jumbotron">
                    <div style={{width: '100%', height: '60px'}}>
                        <h1 style={{float: 'left', marginTop: '2px'}}>{ngo.fantasy_name}</h1>
                        <span style={{margin: '20px'}}
                              className="badge badge-success">{"Atuando desde " + new Date(ngo.date_start).getFullYear()}</span>
                    </div>
                    <p>{ngo.description}</p>
                </div>

                {this.paymentMethodCard(ngo)}
            </div>
        )
    }
}

const structuredSelector = createStructuredSelector({
    ngo: state => state.ngo,
});

const mapDispatchToProps = {fetchNgo};

export default connect(structuredSelector, mapDispatchToProps)(NgoPage);





