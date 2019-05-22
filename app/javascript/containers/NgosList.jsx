import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import '../coped_styles/ngos';

const GET_NGOS_REQUEST = 'GET_NGOS_REQUEST';
const GET_NGOS_SUCCESS = 'GET_NGOS_SUCCESS';

function getNgos() {
    return dispatch => {
        dispatch({type: GET_NGOS_REQUEST});
        return fetch(`../v1/ngos.json`)
            .then(response => response.json())
            .then(json => dispatch(getNgosSuccess(json)))
            .catch(error => console.log(error));
    }
}

export function getNgosSuccess(json) {
    return {
        type: GET_NGOS_SUCCESS,
        json
    };
};

class NgosList extends React.Component {
    render () {
        const { ngos } = this.props;
        const ngosList = ngos && ngos.map(ngo => {
            return (
                <div key={ngo.id} className="row ngo-card">
                    <div className="col-lg-8 fantasy-name">
                        <div className="title">
                            <h1> { ngo.fantasy_name }</h1>
                            <span className="badge badge-success">{ ngo.date_start }</span>
                        </div>
                        <div className="contact-detail">
                            <p className="p-detail"><strong>E-mail: </strong>{ ngo.email }</p>
                            <p className="p-detail"><strong>Telefone: </strong>{ ngo.phone_number1 + " " + ngo.phone_number2 }</p>
                            <p className="p-detail"><strong>Cidade: </strong>{ ngo.city + "/" + ngo.state }</p>
                        </div>
                        <a className="btn btn-primary btn-lg detail" href="#">Saiba mais</a>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Conheça as ONGs que fazem parte</h1>
                    <p className="lead">Encontre aqui uma ONG para acompanhar suas atividades, consultar sua situação financeira e fazer doações.</p>
                </div>

                <button className="getNgosBtn" onClick={() => this.props.getNgos()}>getNgos</button>
                <br />
                <ul>{ ngosList }</ul>
            </div>
        );
    }
}

const structuredSelector = createStructuredSelector({
    ngos: state => state.ngos,
});

const mapDispatchToProps = { getNgos };

export default connect(structuredSelector, mapDispatchToProps)(NgosList);


// TODO: add layout without css and mock up components for menu and css components
