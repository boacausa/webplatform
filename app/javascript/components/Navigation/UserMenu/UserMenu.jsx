import React from 'react';
import styles from "./UserMenu.sass";

const UserMenu = (props) => {
    function redirectToNgoArea() {
        window.open("/ong_area/ongs", "_blank")
    }

    function redirectToLogOut() {
        window.location.href = "/users/sign_out";
    }

    function ngoAreaLink() {
        if (props.user.group === "admin" || props.user.group === "ngo") {
            return <li onClick={() => redirectToNgoArea()} className={styles.menuRow}>Área da ONG</li>
        }
    }

    return <div className={styles.UserMenu}>
        <ul className={styles.menuBorder}>
            <li className={styles.menuRow}>Configurações</li>
            {ngoAreaLink()}
            <hr className={styles.menuDivisor} />
            <li onClick={() => redirectToLogOut()} className={styles.menuRow}>Sair</li>
        </ul>
    </div>
};

export default UserMenu;
