import {  Box,  Button,  Flex,  IconButton,  Stack, color  } from '@chakra-ui/react';
import useColumnDrop from '../hooks/useColumnDrop';
import useColumnTasks from '../hooks/useColumnTasks';
import { ColumnType } from '../utils/enums';
import Task from './Task';


function Column({ column }: { column: ColumnType }) {

  const { tasks, addEmptyTask, deleteTask, dropTaskFrom, swapTasks, updateTask } = useColumnTasks(column);
  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);  
 
  
  const ColumnTasks = 
  tasks.map((task, index) => (<Task key={task.id} 
    task={task}
    index={index} 
    onDropHover={swapTasks} 
    onUpdate={updateTask} 
    onDelete={deleteTask} /> 
  ));
  
  return (     
    <Box className={column}>  
        <Box ref={dropRef} w='100%'  alignItems='center'>
            <div className="cabecalhoColunas">
              <div className={"info-"+column}></div>
              <button className={"button-"+column}>{column.toUpperCase()}</button>
            </div>
            {ColumnTasks}             
        </Box>
    </Box>  
  );
}

export default Column;
