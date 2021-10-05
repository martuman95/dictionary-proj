import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

function handleKeyword(event){
setKeyword(event.target.value);
}

function handleResponse(response){
    console.log(response.data[0]);
    setResult(response.data[0]);
}
function handlePexelsResponse(response){
setPhotos(response.data.photos);
}
function search(){
   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
   axios.get(apiUrl).then(handleResponse);

   let pexelsApiKey = "563492ad6f91700001000001470bf03f14d0442cae665aacc8c767d0";
   let pexelsUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = {Authorization: `Bearer ${pexelsApiKey} ` };
   axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
            <h2 className="title">What are you looking for?</h2>
            <section>
<form onSubmit={HandleSubmit}>
    <input type="search" onChange={handleKeyword} placeholder="Type your word"/>
</form>
</section>
<section className="dictionary">
<Result results={result}/>
<Photos photos={photos}/>
</section>

        </div>
    )
} else {
    load();
    return "loading..";
}
}