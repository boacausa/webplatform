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
            // TODO: extract a new component from this
            return (
                <Link to={`/new/ong/${ngo.fantasy_name_url}`} key={ngo.id} className={classes.ngoCard}>
                    <img className={classes.ngoImage} src={ngo.logo_path} />
                    <div className={classes.ngoCardContent}>
                        <div className={classes.ngoCardTitleBox}>
                            <h1 className={classes.ngoCardTitle}>{ngo.fantasy_name}</h1>
                        </div>
                        {/*TODO: This text needs to come from NGO model*/}
                        <p className={classes.ngoCardSubTitle}>
                            Se o que você vê é bom de mais para ser verdade, tome cuidado com o que você não vê.
                        </p>
                        <div className={classes.ngoCardLabelBox}>
                            <span className={classes.ngoCardLabel}>{this.getCity(ngo)}</span>
                            <span className={classes.ngoCardLabel}>{ngo.email}</span>
                            <span className={classes.ngoCardLabel}>{Masks.phoneMask(ngo.phone_number1)}</span>
                        </div>
                    </div>
                </Link>
            );
        });
    };

    render() {
        const {ngos} = this.props;

        return (
            <div className={classes.NgoList}>
                <div className={classes.titleBox}>
                    <h1 className={classes.title}>Antes de ter amado um animal, parte da nossa alma parmanece desacordada</h1>
                    <p className={classes.subTitle}>ONGs parceiras do projeto Boa Causa</p>
                </div>
                <div className={classes.ngoCards}>
                    {ngos && this.ngosList(ngos)}
                </div>
            </div>
        );
    }
}

const structuredSelector = createStructuredSelector({
    ngos: state => state.app.ngos,
});

const mapDispatchToProps = {fetchNgos};

export default connect(structuredSelector, mapDispatchToProps)(NgoList);
