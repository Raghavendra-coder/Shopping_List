import react, { useState } from 'react';
import './index.css';
import './ToDoLists';
import ToDoLists from './ToDoLists';


const App = () => {

const [item,setItem] = useState("");
const [list,setList] = useState([]);
const [input,setInput] = useState("Add Items");


const addItems = () => {
  if(item===""){
    setInput("Input is Empty");
  }
  else {
  setList((oldvalue) => {
  return [...oldvalue,item]
  } )
  setItem("");
  setInput("Add Items");
   }
}


const itemEvent = (event) =>{
  setItem(event.target.value);
}

const deleteItems = (id) => {
  console.log("delete");
  setList((oldvalue) => {
    return oldvalue.filter((arrEle, index) => {
      return index !== id ;
    }
    );
  } );
} 


return(
  <><div className="main_div">
         <div className = "List">
         
  <h1>Shoopping List</h1>
  <br/>
  <input type="text" placeholder={input} onChange={itemEvent} value={item} maxLength="15"/>
  <button onClick={addItems}> + </button>
  <br/>
  
  
  <ol>
       { list.map( (itemvalue,index) => {
         return  <ToDoLists text={itemvalue} id={index} key={index} onSelect={deleteItems} /> ;
         
       }) }
    
   
  </ol>


</div>
    </div>

  </>
)
      }


export default App;