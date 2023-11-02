import {  Box,  Button, Collapse   } from '@chakra-ui/react';
import useColumnDrop from '../hooks/useColumnDrop';
import useColumnTasks from '../hooks/useColumnTasks';
import { ColumnType } from '../utils/enums';
import Task from './Task';
import { useState } from 'react'

function Column({ width, column, onRezize }: { width: string, column: ColumnType, onRezize: Function}) {

  const { tasks, addEmptyTask, deleteTask, dropTaskFrom, swapTasks, updateTask } = useColumnTasks(column);
  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);  
 
  
  const ColumnTasks = 
  tasks.map((task, index) => (  <Task key={task.id} task={task} index={index}  
    onDropHover={swapTasks}  onUpdate={updateTask}  onDelete={deleteTask} />  ));  


  var retRezize = {pedidos: 0, corte: 1, silk: 2, costura: 3, revisao: 4 }
  var retRezizeNumber = retRezize[column]

  return (     
    <Box display='flex' w={width} margin='0' padding='1px'>  
        <Box ref={dropRef} w='100%' margin='0' padding='0'>           
            <Button margin='0' padding='0' onClick={ () => { addEmptyTask();  onRezize(retRezizeNumber) }}
             w='100%'>{column}</Button>
            {ColumnTasks}             
        </Box>
    </Box>  
  );
}

export default Column;
