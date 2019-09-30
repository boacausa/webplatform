import React from "react";
import styles from "./AdoptionFilterBox.sass";
import SelectInput from "../../../components/SelectInput/SelectInput";
import TextInput from "../../../components/TextInput/TextInput";
import SimpleSubmitButton from "../../../components/SimpleSubmitButton/SimpleSubmitButton";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const GET_NGO_CITIES_REQUEST = 'GET_NGO_CITIES_REQUEST';
const GET_NGO_CITIES_SUCCESS = 'GET_NGO_CITIES_SUCCESS';

function fetchCitiesForAdoption() {
    return dispatch => {
        dispatch({type: GET_NGO_CITIES_REQUEST});
        return fetch(`../v1/ngo_cities.json`)
            .then(response => response.json())
            .then(json => dispatch(fetchCitiesForAdoptionSuccess(json)))
            .catch(error => console.log(error));
    }
}

export function fetchCitiesForAdoptionSuccess(json) {
    return {
        type: GET_NGO_CITIES_SUCCESS,
        json
    };
}

class AdoptionFilterBox extends React.Component {
    componentWillMount() {
        const {fetchCitiesForAdoption} = this.props;
        fetchCitiesForAdoption();
    }

    render() {
        const cities = this.props;
        return (
            <form className={styles.FilterBox}>
                <SelectInput
                    label='Cidade'
                    placeholder='Selecione uma cidade'
                    width='200px'
                    marginRight='20px'
                    options={cities.cities}
                />
                <SelectInput
                    label='ONG'
                    placeholder='Selecione uma ONG'
                    width='300px'
                    marginRight='20px'
                />
                <TextInput
                    placeholder='Procure por palavras-chaves'
                    width='350px'
                    marginRight='20px'
                />
                <SimpleSubmitButton name='Procurar'/>
            </form>
        );
    }
}


const structuredSelector = createStructuredSelector({
    cities: state => state.cities,
});

const mapDispatchToProps = {fetchCitiesForAdoption};

export default connect(structuredSelector, mapDispatchToProps)(AdoptionFilterBox);


