import React from "react"
import SimpleHeaderText from "../../components/SimpleHeaderText/SimpleHeaderText";
import styles from './AdoptionList.sass'
import SimpleSubmitButton from "../../components/SimpleSubmitButton/SimpleSubmitButton";
import SelectInput from "../../components/SelectInput/SelectInput";
import TextInput from "../../components/TextInput/TextInput";
import AdoptionCard from "../AdoptionCard/AdoptionCard";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

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

    render() {
        const {pets} = this.props;

        return (
            <div className={styles.AdoptionList}>
                <SimpleHeaderText
                    title='Encontre seu animalzinho'
                    subtitle='Encontre aqui os animais disponíveis para adoção. Clique em "Adote" para saber mais.'
                />
                <form className={styles.filterBox}>
                    <SelectInput
                        label='Cidade'
                        placeholder='Selecione uma cidade'
                        width='200px'
                        marginRight='20px'
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
                    <SimpleSubmitButton name='Procurar' />
                </form>
                <div className={styles.adoptionCards}>
                    {pets && pets.map(pet => {
                        return <AdoptionCard
                            key={pet.id}
                            name={pet.name}
                            description={pet.description}
                            age={pet.age}
                            sex={pet.sex}
                        />;
                    })}
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
