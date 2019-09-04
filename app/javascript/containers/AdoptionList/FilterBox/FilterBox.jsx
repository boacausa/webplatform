import React from "react";
import styles from "./FilterBox.sass";
import SelectInput from "../../../components/SelectInput/SelectInput";
import TextInput from "../../../components/TextInput/TextInput";
import SimpleSubmitButton from "../../../components/SimpleSubmitButton/SimpleSubmitButton";

const FilterBox = () => {
    return (
        <form className={styles.FilterBox}>
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
    );
};

export default FilterBox;

