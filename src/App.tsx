import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';
import './App.css'
import { useState } from 'react'

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
      <div className="topo">    
        <h2>MANUSHOP - Painel de Produção</h2>
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
