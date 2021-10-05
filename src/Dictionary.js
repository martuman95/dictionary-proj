import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);

function handleKeyword(event){
setKeyword(event.target.value);
}

function handleResponse(response){
    console.log(response.data[0]);
    setResult(response.data[0]);
}

function search(){
   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
   axios.get(apiUrl).then(handleResponse);
}
   function HandleSubmit(event){
       event.preventDefault();
       search();
   }
   function load(){
       setLoaded(true);
       search();
   }

if(loaded){
    return (
        <div className="Dictionary">
            <section>
<form onSubmit={HandleSubmit}>
    <input type="search" onChange={handleKeyword} placeholder="Type your word"/>
</form>
</section>
<section className="dictionary">
<Result results={result}/>
</section>

        </div>
    )
} else {
    load();
    return "loading..";
}
}