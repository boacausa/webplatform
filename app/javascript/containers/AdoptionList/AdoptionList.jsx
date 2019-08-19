import React from "react"
import SimpleHeaderText from "../../components/SimpleHeaderText/SimpleHeaderText";
import styles from './AdoptionList.sass'
import SimpleSubmitButton from "../../components/SimpleSubmitButton/SimpleSubmitButton";
import SelectInput from "../../components/SelectInput/SelectInput";
import TextInput from "../../components/TextInput/TextInput";
import AdoptionCard from "../AdoptionCard/AdoptionCard";

class AdoptionList extends React.Component {
    render() {
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
                    <AdoptionCard/>
                    <AdoptionCard/>
                    <AdoptionCard/>
                    <AdoptionCard/>
                    <AdoptionCard/>
                </div>
            </div>
        );
    }
}

export default AdoptionList;
