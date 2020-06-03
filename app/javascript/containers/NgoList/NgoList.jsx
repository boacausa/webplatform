import React from "react"
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import classes from "./NgoList.sass";
import NgoCard from "./NgoCard/NgoCard";

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

    render() {
        const ngos = this.props.ngos || [];

        return (
            <div className={classes.NgoList}>
                <div className={classes.titleBox}>
                    <h1 className={classes.title}>Antes de ter amado um animal, parte da nossa alma parmanece desacordada</h1>
                    <p className={classes.subTitle}>ONGs parceiras do projeto Boa Causa</p>
                </div>
                <div className={classes.ngoCards}>
                    {ngos.map(ngo => {
                        return <NgoCard ngo={ngo} />
                    })}
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
