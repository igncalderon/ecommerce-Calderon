import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

let cantidad = 1;
const ItemCount = ({stock, initial, producto}) => {
    
    console.log(cantidad)
    const[resultado, nuevoResultado] = useState(cantidad)
        const itemCarrito = (operacion) => {
                switch(operacion){
                    case "+":
                        if(cantidad < stock){
                            cantidad = cantidad + 1
                            console.log(cantidad)
                            break
                        }else{
                            break
                        }
                     case "-":
                         if(cantidad > initial){
                            cantidad = cantidad - 1
                            console.log(cantidad)
                            break
                         }else{
                             break
                         }
                        
                     } 
                nuevoResultado(cantidad);
            
           
        }
            
      
        return(
    
        <div className="container-stock">
                <div className="flex-container-stock">
                        <label class='product-name'htmlFor="">{producto}</label>
                        <img src="data:image/png;base64,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"></img>
                    <div className='flex-botones-stock'>   
                        <button onClick={() => itemCarrito('-')}>-</button>
                        <input type="text" className='cantidad' value={resultado} readOnly="readonly"/>
                        <button onClick={() => itemCarrito('+')}>+</button>
                    </div>
                    <div className='flex-botones-compra'>
                        <button className='btn-cart'>Comprar</button>
                        <button className="btn-icon"><FontAwesomeIcon icon={faCartPlus} className=""/></button>
                        
                    </div>
                    
                </div>
        </div>
     
    )

}

export { ItemCount }