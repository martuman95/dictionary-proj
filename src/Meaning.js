import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
return (
    <div className="Meaning">
    <h3 className="text-capitalize"> {props.meaning.partOfSpeech}  </h3>
    {props.meaning.definitions.map(function(definition, index){
return(
    <div key={index}> 
    <p> <strong> Definition: </strong>
    <span className="text-capitalize">{definition.definition}</span>
    <br />
    <strong> Example: </strong>
    <em className="text-capitalize">{definition.example}</em>
    <br />
    <section className="synonym">
    <Synonyms synonyms={definition.synonyms}/>
    </section>
    </p>
    </div>
)
    })}
      </div>
)
}