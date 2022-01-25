import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styleGield = {
//     width: '300px'
//   }
//   return <input 
//               placeholder={holder} 
//               type="text" 
//               style={styleGield} />
// }

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styleGield = {
      width: '300px'
    }
    return <input 
    placeholder={holder} 
    type="text" 
    style={styleGield} />
  }
}

function Btn() {
  const text = 'log';
  const logged = false;

  return <button>{logged ? 'Enter': text}</button>
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
      <field></field>
    </div>
  );
}


export {Header}
export default App;
