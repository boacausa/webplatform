import React from "react"
import SimpleHeaderText from "../../components/SimpleHeaderText/SimpleHeaderText";
import styles from './AdoptionList.sass'
import SimpleSubmitButton from "../../components/SimpleSubmitButton/SimpleSubmitButton";

class AdoptionList extends React.Component {
    render() {
        return (
            <div className={styles.AdoptionList}>
                <SimpleHeaderText
                    title='Encontre seu animalzinho'
                    subtitle='Encontre aqui os animais disponíveis para adoção. Clique em "Adote" para saber mais.'
                />
                <div className={styles.filter}>
                    <form>
                        <label>
                            Cidade
                            <input type="text" name="name" />
                        </label>
                        <SimpleSubmitButton name='Procurar' />
                    </form>
                </div>
            </div>
        );
    }
}

export default AdoptionList;
