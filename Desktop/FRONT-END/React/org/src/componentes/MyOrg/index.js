
import {useState} from "react"
import "./MyOrg.css"
const MyOrg =(props) =>{
    //Estado - hooks
    //useState
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)
    
    // const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
   // console.log("Mostrar/Ocultar elemento", !mostrar)
    //actualizarMostrar(!mostrar)
    console.log(props)
    //}
    

const manejarClick = () =>{
   

    console.log("Mostrar/Ocultar elemento")
}
    return <section className ="orgSection">
<h3 className="title">Mi Organización</h3>
<img src ="img/add.png" alt ="add" onClick ={props.cambiarMostrar}/>
    </section>
}

export default MyOrg