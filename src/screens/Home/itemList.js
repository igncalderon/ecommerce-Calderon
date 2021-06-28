import React from 'react'
import { Layout } from '../../components'
import { useState, useEffect } from 'react'
import { Item } from './Item/item'
import { Loader } from '../../components/Loader/loader'

import './home.css'

let catalogo = [
    {
    id: '1',
    title: 'Nvidia Gigabyte GeForce GTX 1050 Ti',
    price: 72000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_878641-MLA40006752150_122019-O.webp',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!'
},
{
    id: '2',
    title: 'Nvidia Gigabyte GeForce GTX 750 Ti',
    price: 45000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_944810-MLA44420686852_122020-W.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!'
},
{
    id: '3',
    title: 'Nvidia MSI GeForce 700 Series GT 710',
    price: 15000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_797945-MLA32007295753_082019-O.webp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!'
},
{
    id: '4',
    title: 'Nvidia Gigabyte GeForce RTX 20 Series RTX 2060 6GB',
    price: 260000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_920504-MLA32095352421_092019-O.webp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!'
},
{
    id: '5',
    title: 'Nvidia Gigabyte GeForce GTX 750 Ti',
    price: 45000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_944810-MLA44420686852_122020-W.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!'
}
] 
const ItemList = () => {
  
   const [productos, setProductos] = useState(undefined)
   
useEffect(() => {
   
    const Promesa = new Promise((res, rej)=>{
        setTimeout(() => {
            res(catalogo)
        }, 2000);
    })
    
    Promesa.then((res) => {
        console.log(res)
        setProductos(res)
    })

}, [])


   
//    const [error, setError] = useState('')
//     useEffect(() => {
//         const getDatos = async () => {
//             try {
               
//                await setProductos(catalogo)
//                 console.log(productos)
//             } catch(e){
//                 await setError(e)
//             }
//             }
//     getDatos()
       
//  }, [])

    
    
    return(
        <Layout>
            <h1>CATALOGO</h1>
            <div className='generalHome'>
                <div className="catalogo">
                    { productos ? (   
                      productos.map((valor) =>{
                          if(valor.price < 50000){
                            //   ACA PUEDO IR FILTRANDO POR EJEMPLO POR MONTO.
                          }
                          return(
                            <Item id={valor.id} title={valor.title} pictureUrl={valor.pictureUrl} price={valor.price}/>
                          )
                      })
                    ) : <Loader></Loader>
                     
                    }

                </div>
            </div>
        </Layout>
    )
}

export { ItemList, catalogo }