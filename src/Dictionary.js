import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

function handleKeyword(event){
setKeyword(event.target.value);
}
   function Search(event){
       event.preventDefault();
       alert(keyword);
   }
    return (
        <div className="Dictionary">
<form onSubmit={Search}>
    <input type="search" onChange={handleKeyword} value="Type your word"/>
</form>
        </div>
    )
}