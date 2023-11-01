
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
      <div className="container">
        <DndProvider backend={HTML5Backend}>         
          <Column column={ColumnType.TO_DO} /> 
          <Column column={ColumnType.IN_PROGRESS} />
          <Column column={ColumnType.BLOCKED} /> 
          <Column column={ColumnType.COMPLETED} />           
        </DndProvider>         
      </div>      
    </main>
  );
}

export default App;
