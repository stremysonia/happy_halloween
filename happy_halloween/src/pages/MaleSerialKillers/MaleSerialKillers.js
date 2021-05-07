import React, { useEffect, useState } from 'react';
import './MaleSerialKillers.css';
import MaleCards from '../../components/MaleCards/MaleCards';

const MaleSerialKillers = () => {
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
// [] Allows the data to only run one time
        return (
            <>
                <MaleCards killerdata={data}/>
            </>
    );
}
export default MaleSerialKillers;


