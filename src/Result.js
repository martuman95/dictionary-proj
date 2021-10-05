import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
   if (props.results) {
       return(
        <div className="Result">
          <h2 className="text-capitalize"> {props.results.word} </h2>
    <h5> [/{props.results.phonetic} /] </h5>
          {props.results.meanings.map(function(meaning, index){
return(
    <div key={index}> 
    <section className="dictionary">
    <Meaning meaning={meaning} />
    </section>
    </div>
) 
          })}
        </div>)
   } else {
       return null;
}
    
}