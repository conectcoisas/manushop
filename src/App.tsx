import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';
import './App.css'

function App() {
  return (
    <main>             
      <div className="topo">    
        <h2>MANUSHOP - Painel de Produção</h2>
      </div>  
      <div className="anuncios"> 
      </div>  
      <div className="container">
        <DndProvider backend={HTML5Backend}>  
          <Column column={ColumnType.PEDIDO}  /> 
          <Column column={ColumnType.CORTE} />
          <Column column={ColumnType.SILK} /> 
          <Column column={ColumnType.COSTURA} />    
          <Column column={ColumnType.REVISAO} />                     
        </DndProvider>         
      </div>      
    </main>
  );
}

export default App;
