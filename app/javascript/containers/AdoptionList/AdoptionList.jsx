import React from "react"
import styles from './AdoptionList.sass'
import AdoptionCard from "../AdoptionCard/AdoptionCard";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import AdoptionFilterBox from "./FilterBox/AdoptionFilterBox";
import SimpleModal from "../../components/SimpleModal/SimpleModal";

const GET_ADOPTION_REQUEST = 'GET_ADOPTION_REQUEST';
const GET_ADOPTION_SUCCESS = 'GET_ADOPTION_SUCCESS';

export function fetchPetsForAdoption() {
  return (dispatch, getState) => {
    const userEmail = getState().app.user.email;
    const sex = getState().adoptionFilters.sex;
    const description = getState().adoptionFilters.description;
    const city = getState().adoptionFilters.city;
    dispatch({type: GET_ADOPTION_REQUEST});

    let params = [];
    if (userEmail) {
      params.push(`user_email=${userEmail}`);
    }
    if (sex) {
      params.push(`sex=${sex}`);
    }

    if (description) {
      params.push(`description=${description}`);
    }

    if (city) {
      params.push(`city=${city}`);
    }

    const urlParams = params.join('&');

    return (
      fetch(`../v1/pets_for_adoption.json?` + urlParams)
        .then(response => response.json())
        .then(json => dispatch(fetchPetsForAdoptionSuccess(json)))
        .catch(error => console.log(error))
    );
  }
}

export function fetchPetsForAdoptionSuccess(json) {
    return {
        type: GET_ADOPTION_SUCCESS,
        json
    };
}

class AdoptionList extends React.Component {
    state = {
        showAdoptingModal: false,
    };

    componentWillMount() {
      this.props.fetchPetsForAdoption();
    }

    addAdoptionInterestHandler = (userEmail, pet) => {
        if (userEmail) {
            let body = JSON.stringify({register_interest: {user_email: userEmail, pet_id: pet.id}});

            fetch(`../v1/pets_for_adoption/register_interest`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            })
                .then(response => {
                    console.log(response.json());
                    this.props.fetchPetsForAdoption(userEmail);
                })
                .catch(function (error) {
                    // TODO: handle error
                    console.log(error);
                });
        }

        this.setState({showAdoptingModal: true});
    };

    adoptingCancelHandler = () => {
        this.setState({showAdoptingModal: false});
    };

    petList = (pets) => {
        return pets.map(pet => {
            return <AdoptionCard
                key={pet.id}
                name={pet.name}
                description={pet.description_truncated}
                postedAt={pet.created_at}
                petImage={pet.logo_path}
                age={pet.age}
                sex={pet.sex}
                ngo={pet.ngo}
                user={this.props.userEmail}
                userRegisteredInterest={pet.user_registered_interest}
                modalOpen={() => this.addAdoptionInterestHandler(this.props.userEmail, pet)}
            />;
        })
    };

    render() {
        const {pets, userEmail} = this.props;

        return (
            <div className={styles.AdoptionList}>
                <SimpleModal
                    show={this.state.showAdoptingModal}
                    modalClosed={this.adoptingCancelHandler}
                >
                    {userEmail ?
                        <div>
                            <p>Você está a poucas patas de me adotar. A ONG acabou de saber sobre o seu interesse e entrará em contato em breve. PS: Mal posso esperar por esse momento :)</p>
                        </div>
                    :
                        <div>
                            <p>Você precisa estar logado para adotar.</p>
                            <a href="/users/sign_in">Ir para tela de login</a>
                        </div>
                    }
                </SimpleModal>

                <AdoptionFilterBox />

                <div className={styles.adoptionCards}>
                    {pets && this.petList(pets)}
                    {/* Trick to align last row of cards with flexbox */}
                    <i className={styles.fakeAdoptionCard} aria-hidden="true" />
                    <i className={styles.fakeAdoptionCard} aria-hidden="true" />
                    <i className={styles.fakeAdoptionCard} aria-hidden="true" />
                    <i className={styles.fakeAdoptionCard} aria-hidden="true" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    pets: state => state.app.pets,
    userEmail: state => state.app.user.email
});

const mapDispatchToProps = {fetchPetsForAdoption};

export default connect(mapStateToProps, mapDispatchToProps)(AdoptionList);
