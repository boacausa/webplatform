import React from 'react';
import styles from "./UserMenu.sass";

const UserMenu = () => {
    function redirectToNgoArea() {
        window.open("/ong_area/ongs", "_blank")
    }

    return <div className={styles.UserMenu}>
        <ul className={styles.menuBorder}>
            <li className={styles.menuRow}>Configurações</li>

             {/*TODO: Only if is ngo user*/}
            <li onClick={() => redirectToNgoArea()} className={styles.menuRow}>Área da ONG</li>
        </ul>
    </div>
};

export default UserMenu;
