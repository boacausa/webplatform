import React from "react"
import SimpleHeaderText from "../../components/SimpleHeaderText/SimpleHeaderText";
import styles from './AdoptionList.sass'
import SimpleSubmitButton from "../../components/SimpleSubmitButton/SimpleSubmitButton";
import SelectInput from "../../components/SelectInput/SelectInput";

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
                    />
                    <SimpleSubmitButton name='Procurar' />
                </form>
            </div>
        );
    }
}

export default AdoptionList;
