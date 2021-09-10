import {useState, useEffect} from 'react'
import ListaItems from '../Shop/listaitems';
import { getFetch } from '../Shop/shopbd';
import loguito from '../Images/pizita.gif';


function Pizza(){
    const [pizzaState, setPizza] = useState ([]);
    const [loadingState, setLoading] = useState(true);


    useEffect(() => {
        getFetch.then((itm)=>{
            setPizza(itm);
            setLoading(false);
        })
    }, []);


return (
<div>
    { loadingState ? ( <img src={loguito}/>)
    :(
        <ListaItems pizza={pizzaState} />
    )}

</div>
)


}


export default Pizza;