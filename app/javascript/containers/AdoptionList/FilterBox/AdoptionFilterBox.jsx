import React from "react";
import styles from "./AdoptionFilterBox.sass";
import SelectInput from "../../../components/SelectInput/SelectInput";
import TextInput from "../../../components/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import { setSexFilter, setDescriptionFilter } from '../../../actions/adoptionFilters';
import { fetchPetsForAdoption } from '../AdoptionList'

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

    onSexChange = (e) => {
        this.props.setSexFilter(e.target.value);
    };

    onDescriptionChange = (e) => {
      this.props.setDescriptionFilter(e.target.value);
  };

    render() {
        const cities = this.props;
        return (
            <div className={styles.FilterBox}>
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
                <SelectInput
                    label='Sexo'
                    placeholder='Selecione um Sexo'
                    width='200px'
                    marginRight='20px'
                    name='sex'
                    options={[{ id: 'f', name: 'Fêmea' }, { id: 'm', name: 'Macho' }]}
                    value={this.props.adoptionFilters.sex}
                    onChange={this.onSexChange}
                />
                <TextInput
                    placeholder='Procure por palavras-chaves'
                    width='350px'
                    marginRight='20px'
                    value={this.props.adoptionFilters.description}
                    onChange={this.onDescriptionChange}
                />
                <Button children='Procurar' onClick={this.props.fetchPetsForAdoption} />
            </div>
        );
    }
}


const mapStateToProps = createStructuredSelector({
    cities: state => state.app.cities,
    adoptionFilters: state => state.adoptionFilters
});

const mapDispatchToProps = {
  fetchPetsForAdoption,
  fetchCitiesForAdoption,
  setSexFilter,
  setDescriptionFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(AdoptionFilterBox);
