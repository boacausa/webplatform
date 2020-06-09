import React, {useEffect, useState} from "react";
import NgoApi from "../../api/ngoApi";

const NgoPage = (props) => {
    const [currentNgo, setCurrentNgo] = useState({});

    useEffect(() => {
        NgoApi.fetchNgo(props.match.params.id).then((response) => {
            setCurrentNgo(response.data.ngo)
        })

    }, [])

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
    return <div>

    </div>
}

export default NgoPage;
