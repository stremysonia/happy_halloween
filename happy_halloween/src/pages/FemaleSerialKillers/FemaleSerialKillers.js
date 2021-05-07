import React, { useEffect, useState } from 'react';
import './FemaleSerialKillers.css'
import FemaleCards from '../../components/FemaleCards/FemaleCards'

const FemaleSerialKillers = () => {
    const [data , setData] = useState([])
        

        const getData=()=>{
            fetch('SerialKillerApi.json'
            ,{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }
            )
              .then(function(response){
                console.log(response)
                return response.json();
              })
              .then(function(myJson) {
                console.log(myJson);
                setData(myJson);
              }).catch((error)=> {
                  console.log(error)
              })
            

          } 
          useEffect(()=> {
              getData()
          }, [])
        return (
            <>
                <FemaleCards killerdata={data}/>
            </>
    );
}
export default FemaleSerialKillers;
