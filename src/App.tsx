import {useState} from 'react'
import './App.css'



function addToInput(setInput: React.Dispatch<React.SetStateAction<string>>,value: string,input:string): void{
    const checkValues:string [] = ["+","-","/","*","."];
    if (checkValues.includes(value) && input.length>0){
        if (!(checkValues.includes(input[input.length-1]))) {
            setInput((prevState)=>prevState+value)
        }
    }
    else {
        if (!(value ==="0" && input.length==0)) {
            if ( !(value==="0" && checkValues.includes(input[input.length-1])) ){
                setInput((prevState) => prevState + value)
            }
        }
    }
}

function App() {
    const [input, setInput] = useState("")
  return (
    <div className="App">
      <h1>Calculator</h1>
        <div className={"MainWindow"}>
            <div className={"display"}>
                {input}
            </div>
          <div className="Row">
              <button onClick={()=>setInput("")} className={"action_button"}>AC</button>
              <button onClick={
                  ()=>{
                      addToInput(setInput,"%",input)
                  }
              } className={"action_button"}>%</button>
              <button onClick={()=>setInput((prevState)=>prevState.slice(0,prevState.length-1))} className={"action_button"}>C</button>
              <button onClick={()=>addToInput(setInput,"/",input)} className={"action_button"}>/</button>
          </div>
            <div className="Row">
                <button onClick={()=>addToInput(setInput,"7",input)} className={"numerical_button"}>7</button>
                <button onClick={()=>addToInput(setInput,"8",input)} className={"numerical_button"}>8</button>
                <button onClick={()=>addToInput(setInput,"9",input)} className={"numerical_button"}>9</button>
                <button onClick={()=>addToInput(setInput,"*",input)} className={"action_button"}>*</button>
            </div>
            <div className="Row">
                <button onClick={()=>addToInput(setInput,"4",input)} className={"numerical_button"}>4</button>
                <button onClick={()=>addToInput(setInput,"5",input)} className={"numerical_button"}>5</button>
                <button onClick={()=>addToInput(setInput,"6",input)} className={"numerical_button"}>6</button>
                <button onClick={()=>addToInput(setInput,"-",input)} className={"action_button"}>-</button>
            </div>
            <div className="Row">
                <button onClick={()=>addToInput(setInput,"1",input)} className={"numerical_button"}>1</button>
                <button onClick={()=>addToInput(setInput,"2",input)} className={"numerical_button"}>2</button>
                <button onClick={()=>addToInput(setInput,"3",input)} className={"numerical_button"}>3</button>
                <button onClick={()=>addToInput(setInput,"+",input)} className={"action_button"}>+</button>
            </div>
            <div className="Row">
                <button onClick={()=>addToInput(setInput,"00",input)} className={"numerical_button"}>00</button>
                <button onClick={()=>addToInput(setInput,"0",input)} className={"numerical_button"}>0</button>
                <button onClick={()=>addToInput(setInput,".",input)} className={"numerical_button"}>.</button>
                <button onClick={()=>{
                    const checkValues:string [] = ["+","-","/","*",".","%"];
                    let eval_string=""
                    let number=""
                    for (const i of input){
                    if (!checkValues.includes(i)){
                        number+=i;
                    }
                    else if (checkValues.includes(i) && i=="%"){
                        eval_string+=`(${number}/100)`
                        number=""
                    }
                    else{
                        eval_string+=number+i
                        number=""
                    }
                }
                    if (number!=""){
                        eval_string+=`(${number})`
                    }
                setInput(eval(eval_string))
                }
                } className="equal_button">=</button>
            </div>
        </div>
    </div>
  )
}


export default App
