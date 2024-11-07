import React,{useState} from 'react'
import Button from './Button'


function Calculator(){

      const [display, setDisplay] = useState('');
      const [operand, setOperand] = useState('');
      const [operator, setOperator] = useState('');

      const pressButton = (value) => {
          if (display === '0') {
              setDisplay(value);
          } else {
              setDisplay(display + value);
          }
      };

      const pressOperator = (operation) => {
          setOperand(parseFloat(display));
          setOperator(operation);
          setDisplay('0');
      };

      const calculate = () => {
          const num = parseFloat(display);
          switch (operator) {
              case '+':
                  setDisplay((operand + num).toString());
                  break;
              case '-':
                  setDisplay((operand - num).toString());
                  break;
              case '*':
                  setDisplay((operand * num).toString());
                  break;
              case '/':
                  setDisplay((operand / num).toString());
                  break;
          }
          setOperand('');
          setOperator('');
      };

      const reset = ()=>{
        setDisplay('')
        setOperand('');
        setOperator('');
      }

    return (
        <>
            <div >
                <input type="text" value={display}></input>
                <hr/>
                <div>
                    <Button click={()=>pressButton(1)} label="1" />
                    <Button click={()=>pressButton(2)} label="2" />
                    <Button click={()=>pressButton(3)} label="3" />
                    <Button click={()=>pressOperator('+')} label="+" />
                </div>
                <div>
                    <Button click={()=>pressButton(4)} label="4" />
                    <Button click={()=>pressButton(5)} label="5" />
                    <Button click={()=>pressButton(6)} label="6" />
                    <Button click={()=>pressOperator('-')} label="-" />
                </div>
                <div>
                    <Button click={()=>pressButton(7)} label="7" />
                    <Button click={()=>pressButton(8)} label="8" />
                    <Button click={()=>pressButton(9)} label="9" />
                    <Button click={()=>pressOperator('*')} label="*" />
                </div>
                <div>
                    <Button click={()=>reset()} label="C" />
                    <Button click={()=>pressButton(0)} label="0" />
                    <Button click={calculate} label="=" />
                    <Button click={()=>pressOperator('/')} label="/" />
                </div>
            </div>
        </>
    )
}

export default Calculator