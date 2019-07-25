import React, {useState} from "react";
import Youtube from "react-youtube";

function Form () {

    const [newFrame, setNewFrame] = useState("2g811Eo7K8U");

    const submitHandler = event => {
        event.preventDefault();
    }

    const changeHandler = event => {
        setNewFrame({...newFrame, [event.target.name] : event.target.value })
    }
    return (
        <div>
            <form onSubmit ={submitHandler}>
                <input type="text" name="url" id="url" placeholder="/watch?v={add-this}" size="30" onChange ={changeHandler}/>
                <button>Submit</button>
            </form>
           <Youtube videoId = {newFrame} />
        </div>
    )
}

export default Form;

