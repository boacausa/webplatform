import React from "react"
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Masks from "../../utils/Masks";
import {Link} from "react-router-dom";
import classes from "./NgoList.sass";

const GET_NGOS_REQUEST = 'GET_NGOS_REQUEST';
const GET_NGOS_SUCCESS = 'GET_NGOS_SUCCESS';

export function fetchNgos() {
    return dispatch => {
        dispatch({type: GET_NGOS_REQUEST});
        // TODO: how to make the path look better?
        return fetch(`../v1/ngos.json`)
            .then(response => response.json())
            .then(json => dispatch(fetchNgosSuccess(json)))
            .catch(error => console.log(error));
    }
}

export function fetchNgosSuccess(json) {
    return {
        type: GET_NGOS_SUCCESS,
        json
    };
}

class NgoList extends React.Component {
    componentWillMount() {
        const {fetchNgos} = this.props;
        fetchNgos();
    }

    getCity = (ngo) => {
        const city = ngo.city ? ngo.city : '';
        const state = ngo.state ? ngo.state : '';

        return city + "/" + state;
    };

    ngosList = (ngos) => {
        return ngos.map(ngo => {
            return (
                <div key={ngo.id} className="row ngo-card">
                    <div className="col-lg-4 ngo-card-img"><img src={ngo.logo_path} /></div>
                    <div className="col-lg-8 fantasy-name">
                        <div className="title">
                            <h1>{ngo.fantasy_name}</h1>
                            <span className="badge badge-success">{"Atuando desde " + new Date(ngo.date_start).getFullYear()}</span>
                        </div>
                        <div className="contact-detail">
                            <p className="p-detail"><strong>E-mail: </strong>{ngo.email}</p>
                            <p className="p-detail"><strong>Telefone: </strong>{Masks.phoneMask(ngo.phone_number1) + " " + Masks.phoneMask(ngo.phone_number2)}</p>
                            <p className="p-detail"><strong>Cidade: </strong>{this.getCity(ngo)}</p>
                        </div>
                        <Link className="btn btn-primary btn-lg detail" to={`/new/ong/${ngo.fantasy_name_url}`}>Saiba mais</Link>
                    </div>
                </div>
            );
        });
    };

    render() {
        const {ngos} = this.props;

        return (
            <div className={classes.NgoList}>
                <div className={classes.titleBox}>
                    <h1 className={classes.title}>Antes de ter amado um animal, parte da nossa alma parmanece desacordada</h1>
                    <p className={classes.subTitle}>ONGS parceiras da Boa Causa</p>
                </div>
                {ngos && this.ngosList(ngos)}
            </div>
        );
    }
}

const structuredSelector = createStructuredSelector({
    ngos: state => state.app.ngos,
});

const mapDispatchToProps = {fetchNgos};

export default connect(structuredSelector, mapDispatchToProps)(NgoList);
