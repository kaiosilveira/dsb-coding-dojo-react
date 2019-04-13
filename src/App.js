import React,{useState} from 'react'
import './App.css'

const users = [
  { id: 1, name: 'Takeshi' },
  { id: 2, name: 'Goiaba' },
  { id: 3, name: 'Kaio' },
  { id: 4, name: 'Errera' },
]



const Title = ({text}) => (
  <h1>{text}</h1>
)

const Card = ({index, text, button}) => (
  <div className='card'>
    {index}{text}<button>{button}</button>
  </div> 
)

const Form = () =>{
  const [name, setName] = useState('')

  return  (
    <form className="form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
      <button>+</button>
    </form> 
  )

}

const App = () => (
  <div className="App">
    <Title text='Usuários'/> 
    <Card text="#Kaio" index="#1" button="x"/>
    {
      users.map(n => (<Card text={n.name} index={n.id} button="x"/>))
    }
    <Form></Form>
  </div>
)

const Add = () =>{



}





export default App