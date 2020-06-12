import React, {useEffect, useState} from "react";
import NgoApi from "../../api/ngoApi";
import classes from "./NgoPage.sass";
import Masks from "../../utils/Masks";

const hasBankAccount = (ngo) => {
    return ngo.bank && ngo.account && ngo.agency
};

const bankAccountInfo = (ngo) => {
    let content = <p className={classes.infoContent}>Opção indisponível no momento.</p>

    if (hasBankAccount(ngo)) {
        content = <div>
            <p className={classes.infoContent}><strong>Banco:</strong> {ngo.bank}</p>
            <p className={classes.infoContent}><strong>Agência:</strong> {ngo.agency}</p>
            <p className={classes.infoContent}><strong>Operação:</strong> {ngo.operation}</p>
            <p className={classes.infoContent}><strong>Conta:</strong> {ngo.account}</p>
            <p className={classes.infoContent}><strong>Titular:</strong> {ngo.titular}</p>
        </div>
    }

    return <div>
        <h2 className={classes.infoTitle}>Via depósito ou transferência</h2>
        {content}
    </div>
}

const paymentMethodCard = (ngo) => {
    if (ngo.payment_type === 'paypal-form' && ngo.payment_form) {
        return <div>
            <h2 className={classes.infoTitle}>Via cartão de crédito - Paypal</h2>
            <div className={classes.paypalForm} dangerouslySetInnerHTML={{__html: ngo.payment_form}} />
        </div>;
    }

};

const NgoPage = (props) => {
    const [currentNgo, setCurrentNgo] = useState({});

    useEffect(() => {
        NgoApi.fetchNgo(props.match.params.id).then((response) => {
            setCurrentNgo(response.data.ngo)
        })

    }, [])

    return <div className={classes.NgoPage}>
        <div className={classes.leftSection}>
            <img className={classes.image} src={currentNgo.logo_path} />
            <h1 className={classes.subtitle}>Faça uma doação agora mesmo!</h1>
            {paymentMethodCard(currentNgo)}
            {bankAccountInfo(currentNgo)}
        </div>
        <div className={classes.rightSection}>
            <h1 className={classes.title}>{currentNgo.fantasy_name}</h1>
            <p className={classes.description}>{currentNgo.description}</p>
            <p className={classes.infoTitle}>Contato</p>
            <p className={classes.infoContent}><strong>E-mail:</strong> {currentNgo.email}</p>
            <p className={classes.infoContent}><strong>Site:</strong> {currentNgo.site}</p>
            <p className={classes.infoContent}><strong>CNPJ:</strong> {currentNgo.cnpj}</p>
            <p className={classes.infoContent}><strong>Telefone 1:</strong> {Masks.phoneMask(currentNgo.phone_number1)}</p>
            <p className={classes.infoContent}><strong>Telefone 2:</strong> {Masks.phoneMask(currentNgo.phone_number2)}</p>
            <p className={classes.infoContent}><strong>Atividade:</strong> {currentNgo.activity}</p>
            <p className={classes.infoContent}><strong>Portal da transparência: </strong>
                <a href={currentNgo.transparency_portal} target='_blank'>
                    {currentNgo.transparency_portal}
                </a>
            </p>
            <p className={classes.infoTitle}>Endereço</p>
            <p className={classes.infoContent}><strong>CEP:</strong> {currentNgo.zipcode}</p>
            <p className={classes.infoContent}><strong>Número:</strong> {currentNgo.address_number}</p>
            <p className={classes.infoContent}><strong>Rua:</strong> {currentNgo.address}</p>
            <p className={classes.infoContent}><strong>Bairro:</strong> {currentNgo.neighborhood}</p>
            <p className={classes.infoContent}><strong>Cidade:</strong> {currentNgo.city}</p>
            <p className={classes.infoContent}><strong>Estado:</strong> {currentNgo.state}</p>
        </div>
    </div>
}

export default NgoPage;
