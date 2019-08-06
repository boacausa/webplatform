import React from "react"
import SimpleHeaderText from "../../components/SimpleHeaderText/SimpleHeaderText";
import styles from './AdoptionList.sass'

class AdoptionList extends React.Component {
    render() {
        return (
            <div className={styles.AdoptionList}>
                <SimpleHeaderText
                    title='Encontre seu animalzinho'
                    subtitle='Encontre aqui os animais disponíveis para adoção. Clique em "Adote" para saber mais.'
                />
                <div className={styles.filter}>

                </div>
            </div>
        );
    }
}

export default AdoptionList;
