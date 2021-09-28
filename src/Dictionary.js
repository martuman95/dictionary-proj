import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);

function handleKeyword(event){
setKeyword(event.target.value);
}
function handleResponse(response){
    console.log(response.data[0]);
    setResult(response.data[0]);
}
   function Search(event){
       event.preventDefault();

       
   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
   axios.get(apiUrl).then(handleResponse);
   }


    return (
        <div className="Dictionary">
<form onSubmit={Search}>
    <input type="search" onChange={handleKeyword} placeholder="Type your word"/>
</form>
<Result results={result}/>

        </div>
    )
}