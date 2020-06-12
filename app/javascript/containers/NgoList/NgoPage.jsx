import React, {useEffect, useState} from "react";
import NgoApi from "../../api/ngoApi";
import classes from "./NgoPage.sass";
import Masks from "../../utils/Masks";

const NgoPage = (props) => {
    const [currentNgo, setCurrentNgo] = useState({});

    useEffect(() => {
        NgoApi.fetchNgo(props.match.params.id).then((response) => {
            setCurrentNgo(response.data.ngo)
        })

    }, [])

    console.log({currentNgo})

    // has_bank_account = (ngo) => {
    //     return ngo.bank && ngo.account && ngo.agency
    // };
    //
    // paymentMethodCard = (ngo) => {
    //     // if (ngo.payment_type && this.has_bank_account(ngo)) {
    //     if (ngo.payment_type === 'paypal-form' && ngo.payment_form) {
    //         return (
    //             <div>
    //                 {ngo.payment_form}
    //             </div>
    //         );
    //     }
    //
    // };

    // render() {
    //     const {ngo} = this.props;
    //
    //     console.log(ngo)
    //
    //     if (!ngo) return (<div/>);
    //
    //     return (
    //         <div>
    //             <div className="jumbotron">
    //                 <div style={{width: '100%', height: '60px'}}>
    //                     <h1 style={{float: 'left', marginTop: '2px'}}>{ngo.fantasy_name}</h1>
    //                     <span style={{margin: '20px'}}
    //                           className="badge badge-success">{"Atuando desde " + new Date(ngo.date_start).getFullYear()}</span>
    //                 </div>
    //                 <p>{ngo.description}</p>
    //             </div>
    //
    //             {this.paymentMethodCard(ngo)}
    //         </div>
    //     )
    // }
    return <div className={classes.NgoPage}>
        <div className={classes.leftSection}>
            <img className={classes.image} src={currentNgo.logo_path} />
            <h1 className={classes.subtitle}>Faça uma doação agora mesmo!</h1>
        </div>
        <div className={classes.rightSection}>
            <h1 className={classes.title}>{currentNgo.fantasy_name}</h1>
            <p className={classes.description}>{currentNgo.description}</p>
            <p className={classes.ngoInfoTitle}>Contato</p>
            <p className={classes.ngoInfo}><strong>E-mail:</strong> {currentNgo.email}</p>
            <p className={classes.ngoInfo}><strong>Site:</strong> {currentNgo.site}</p>
            <p className={classes.ngoInfo}><strong>CNPJ:</strong> {currentNgo.cnpj}</p>
            <p className={classes.ngoInfo}><strong>Telefone 1:</strong> {Masks.phoneMask(currentNgo.phone_number1)}</p>
            <p className={classes.ngoInfo}><strong>Telefone 2:</strong> {Masks.phoneMask(currentNgo.phone_number2)}</p>
            <p className={classes.ngoInfo}><strong>Atividade:</strong> {currentNgo.activity}</p>
            <p className={classes.ngoInfo}><strong>Portal da transparência: </strong>
                <a href={currentNgo.transparency_portal} target='_blank'>
                    {currentNgo.transparency_portal}
                </a>
            </p>
            <p className={classes.ngoInfoTitle}>Endereço</p>
            <p className={classes.ngoInfo}><strong>CEP:</strong> {currentNgo.zipcode}</p>
            <p className={classes.ngoInfo}><strong>Número:</strong> {currentNgo.address_number}</p>
            <p className={classes.ngoInfo}><strong>Rua:</strong> {currentNgo.address}</p>
            <p className={classes.ngoInfo}><strong>Bairro:</strong> {currentNgo.neighborhood}</p>
            <p className={classes.ngoInfo}><strong>Cidade:</strong> {currentNgo.city}</p>
            <p className={classes.ngoInfo}><strong>Estado:</strong> {currentNgo.state}</p>
        </div>
    </div>
}

export default NgoPage;
