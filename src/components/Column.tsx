import {  Box,  Button,  Flex,  IconButton,  Stack, color  } from '@chakra-ui/react';
import useColumnDrop from '../hooks/useColumnDrop';
import useColumnTasks from '../hooks/useColumnTasks';
import { ColumnType } from '../utils/enums';
import Task from './Task';


function Column({ column }: { column: ColumnType }) {

  const { tasks, addEmptyTask, deleteTask, dropTaskFrom, swapTasks, updateTask } = useColumnTasks(column);
  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);  
 
  
  const ColumnTasks = 
  tasks.map((task, index) => (<Task key={task.id} task={task} index={index}  onDropHover={swapTasks}  
    onUpdate={updateTask} 
    onDelete={deleteTask} /> 
  ));
  
  return (     
    <Box w='20%' display='flex' m='1'>  
        <Box ref={dropRef} w='100%'>           
            <Button onClick={ () => {addEmptyTask()} }>{column}</Button>
            {ColumnTasks}             
        </Box>
    </Box>  
  );
}

export default Column;
