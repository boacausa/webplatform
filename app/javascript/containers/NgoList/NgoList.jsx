import React, {useEffect, useState} from "react"
import classes from "./NgoList.sass";
import NgoCard from "./NgoCard/NgoCard";
import NgoApi from "../../api/ngoApi";

// TODO: bug going back to ngo list from ngo page sometimes
const NgoList = () => {
    const [ngos, setNgos] = useState([]);

    useEffect(() => {
        NgoApi.fetchNgos().then((response) => {
            setNgos(response.data.ngos)
        })
    }, [])

    return (
        <div className={classes.NgoList}>
            <div className={classes.titleBox}>
                <h1 className={classes.title}>Conheça as ONGs que lutam todos os dias por uma Boa Causa</h1>
                <p className={classes.subTitle}>Acompanhe, aqui, suas atividades, situação financeira e faça doações</p>
            </div>
            <div className={classes.ngoCards}>
                {ngos.map(ngo => {
                    return <NgoCard key={ngo.id} ngo={ngo} />
                })}
            </div>
        </div>
    );
}

export default NgoList;
