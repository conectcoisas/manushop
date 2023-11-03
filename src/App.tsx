import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';
import './App.css'
import { useState } from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'

function App() {

  var with01 = "65%"
  var with02 = '20%'
  var with03 = '5%'

  const columnWhithPedidos: string[] = [with01, with02, with03, with03, with03]
  const columnWhithCorte: string[] = [with02, with01, with02, with03, with03]
  const columnWhithSilk: string[] = [with03, with02, with01, with02, with03]
  const columnWhithCostura: string[] = [with03, with03, with02, with01, with02]
  const columnWhithRevisao: string[] = [with03, with03, with03, with02, with01]

  const columnsWhith = [ 
    columnWhithPedidos, 
    columnWhithCorte, 
    columnWhithSilk, 
    columnWhithCostura, 
    columnWhithRevisao ]
 
  const [rezize, setResize] = useState(0)
  const btnSetRezize = (rezizeColumn: any) => { setResize(rezizeColumn); 
    console.log(rezizeColumn)
  }

  return (
    <main>             
      <div className="topo" >  
        <Wrap>
          <WrapItem >
            <Avatar name='Danilo Gomes'  size='sm'/> 
          </WrapItem>
        </Wrap>
        <Center >
          <h2>MANUSHOP - Painel de Produção</h2>
        </Center>         
        <Wrap>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
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
