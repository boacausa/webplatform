import React from 'react';
import styles from "./UserMenu.sass";
import LineDivisor from "../../LineDivisor/LineDivisor";
import {redirectToLogOut, redirectToNgoArea} from "../../../utils/ServerLinks";

const UserMenu = (props) => {
    function ngoAreaLink() {
        if (props.user.group === "admin" || props.user.group === "ngo") {
            return <li onClick={() => redirectToNgoArea()} className={styles.menuRow}>Área da ONG</li>
        }
    }

    return <div className={styles.UserMenu}>
        <ul className={styles.menuBorder}>
            <li className={styles.menuRow}>Configurações</li>
            {ngoAreaLink()}
            <LineDivisor />
            <li onClick={() => redirectToLogOut()} className={styles.menuRow}>Sair</li>
        </ul>
    </div>
};

export default UserMenu;
