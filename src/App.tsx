import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';
import './App.css'
import { useState } from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { AbsoluteCenter, Center, Square, Circle } from '@chakra-ui/react'

function App() {

  var with01 = "65%"
  var with02 = '20%'
  var with03 = '5%'

  const columnWhithPedidos: string[] = [with01, with02, with03, with03, with03]
  const columnWhithCorte: string[] = [with02, with01, with02, with03, with03]
  const columnWhithSilk: string[] = [with03, with02, with01, with02, with03]
  const columnWhithCostura: string[] = [with03, with03, with02, with01, with02]
  //const columnWhithRevisao: string[] = [with03, with03, with03, with03, with03]
  const columnWhithRevisao: string[] = ["20%", "20%", "20%", "20%", "20%"]

  const columnsWhith = [ 
    columnWhithPedidos, 
    columnWhithCorte, 
    columnWhithSilk, 
    columnWhithCostura, 
    columnWhithRevisao ]
 
  const [rezize, setResize] = useState(4)
  const btnSetRezize = (rezizeColumn: any) => { setResize(rezizeColumn); 
    console.log(rezizeColumn)
  }

  return (
    <main>             
      <div className="topo" >  
        <Wrap >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
        </Wrap>
        <Center>
          <span>MANUSHOP - Painel de Produção</span>
        </Center>         
        <Wrap >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
        </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"/>
          </svg>
        </Wrap>
      </div>  
      <div className="anuncios"> 
      
      </div>  
      <div className="container">
        <DndProvider backend={HTML5Backend}>  
          <Column width={columnsWhith[rezize][0]} column={ColumnType.PEDIDO} onRezize={btnSetRezize} />               
          <Column width={columnsWhith[rezize][1]} column={ColumnType.CORTE} onRezize={btnSetRezize} />
          <Column width={columnsWhith[rezize][2]} column={ColumnType.SILK} onRezize={btnSetRezize}/> 
          <Column width={columnsWhith[rezize][3]} column={ColumnType.COSTURA} onRezize={btnSetRezize}/>    
          <Column width={columnsWhith[rezize][4]} column={ColumnType.REVISAO} onRezize={btnSetRezize}/>                     
        </DndProvider>         
      </div>      
    </main>
  );
}

export default App;
