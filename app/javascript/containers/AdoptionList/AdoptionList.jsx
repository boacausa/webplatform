import React from "react"
import SimpleHeaderText from "../../components/SimpleHeaderText/SimpleHeaderText";
import styles from './AdoptionList.sass'
import AdoptionCard from "../AdoptionCard/AdoptionCard";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import FilterBox from "./FilterBox/FilterBox";

const GET_ADOPTION_REQUEST = 'GET_ADOPTION_REQUEST';
const GET_ADOPTION_SUCCESS = 'GET_ADOPTION_SUCCESS';

function fetchPetsForAdoption() {
    return dispatch => {
        dispatch({type: GET_ADOPTION_REQUEST});
        return fetch(`../v1/pets_for_adoption.json`)
            .then(response => response.json())
            .then(json => dispatch(fetchPetsForAdoptionSuccess(json)))
            .catch(error => console.log(error));
    }
}

export function fetchPetsForAdoptionSuccess(json) {
    return {
        type: GET_ADOPTION_SUCCESS,
        json
    };
}

class AdoptionList extends React.Component {
    componentWillMount() {
        const {fetchPetsForAdoption} = this.props;
        fetchPetsForAdoption();
    }

    petList = (pets) => {
        return pets.map(pet => {
            return <AdoptionCard
                key={pet.id}
                name={pet.name}
                description={pet.description}
                posted_at={pet.created_at}
                age={pet.age}
                sex={pet.sex}
                ngo={pet.ngo}
            />;
        })
    };

    render() {
        const {pets} = this.props;

        return (
            <div className={styles.AdoptionList}>
                <SimpleHeaderText
                    title='Encontre seu animalzinho'
                    subtitle='Encontre aqui os animais disponíveis para adoção. Clique em "Adote" para saber mais.'
                />
                <FilterBox/>
                <div className={styles.adoptionCards}>
                    {pets && this.petList(pets)}
                </div>
            </div>
        );
    }
}

const structuredSelector = createStructuredSelector({
    pets: state => state.pets,
});

const mapDispatchToProps = {fetchPetsForAdoption};

export default connect(structuredSelector, mapDispatchToProps)(AdoptionList);
