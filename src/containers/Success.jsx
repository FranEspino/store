import React,{useContext} from 'react'
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import useGoogleAddress from '../hooks/useGoogleAddress'

const Success = () => {
    const {state} = useContext(AppContext);
    const {buyer} = state;
    const address = useGoogleAddress(buyer[0].address)
 console.log('heloo: '+buyer[0].name)
    return (
        <div className="mt-20 w-1/2 m-auto">
           <h1 className="font-bold text-lg">{`${buyer[0].name}, gracias por tu compra.` } </h1>
            <div className="mt-6">
                <Map data={address} />
            </div>
        
        </div>
    )
}

export default Success
