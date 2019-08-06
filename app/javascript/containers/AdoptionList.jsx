import React from "react"
import SimpleHeaderText from "../components/SimpleHeaderText/SimpleHeaderText";

class AdoptionList extends React.Component {
    render() {
        return (
            <div className="container">
                <SimpleHeaderText
                    title='Encontre seu animalzinho'
                    subtitle='Encontre aqui os animais disponíveis para adoção. Clique em "Adote" para saber mais.'
                />
            </div>
        );
    }
}

export default AdoptionList;
