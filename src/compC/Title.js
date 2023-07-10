import React,{useState} from "react";
function Title ({question,answer}){
    const [show,setshow]=useState()
    return <div>
<div className="color">
<h3>{question} </h3>
<p className="btn" onClick={()=>setshow(!show )}>{show?"➖" :"➕"}</p>


{show&& <p>{"answer"}</p>}
</div>
    </div>
}
export default Title;