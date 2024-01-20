import { useState} from 'react';
import logoNokia from '../public/logoNokia.png'
import './App.css'
import Button from './components/buttons';

function App() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('')
  function pegaValor(e) {
    let valor = e.target.value
    console.log("Valor quando clica " + valor)
    if (num === 0) { setNum(valor) }
    else {
      setNum((prevNum) => prevNum + valor)
      console.log("Num " + num)
    }
    switch (valor) {
      case '=':
        setResult(eval(num.toString()))
        setNum('')
        console.log(result)
        break;
        case 'c':
        setResult('')
        setNum('')
        console.log(result)
        break;
      default:
        break;
    }
  }

  return (
    <div id='boxCalcu'>
      <div id='divLogo'>
      <img id='nokiaLogo' src={logoNokia} alt="Logo Nokia" />
      </div>
      <input value={num} id='divNums'/>
      <div id='divBtns'>
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={7} textBtn={7} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={8} textBtn={8} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={'c'} textBtn={'c'} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={9} textBtn={9} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={4} textBtn={4} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={'-'} textBtn={'-'} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={5} textBtn={5} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={6} textBtn={6} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={'+'} textBtn={'+'} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={3} textBtn={3} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={2} textBtn={2} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={'*'} textBtn={'*'} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={1} textBtn={1} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={0} textBtn={0} />
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={'/'} textBtn={'/'} />
      </div>
      <div id='divResultAndBtn'>
      <div id='result'>Total: {result}</div>
      <Button onClickEle={(e) => pegaValor(e)} valueBtn={'='} textBtn={'='} />
      </div>
    </div>
  )
}

export default App
