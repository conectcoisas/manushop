import {  Box,  Button, InputGroup, InputLeftElement, Input, Tab, TabPanel, TabPanels, Center   } from '@chakra-ui/react';
import useColumnDrop from '../hooks/useColumnDrop';
import useColumnTasks from '../hooks/useColumnTasks';
import { ColumnType } from '../utils/enums';
import Task from './Task';
import { useState } from 'react'
import { ExternalLinkIcon, PhoneIcon, SearchIcon , DeleteIcon } from '@chakra-ui/icons';



function Column({ width, column, onRezize }: { width: string, column: ColumnType, onRezize: Function}) {

  const { tasks, addEmptyTask, deleteTask, dropTaskFrom, swapTasks, updateTask } = useColumnTasks(column);
  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);  

  const ColumnTasks = 
  tasks.map((task, index) => (  <Task key={task.id} task={task} index={index}  
    onDropHover={swapTasks}  onUpdate={updateTask}  onDelete={deleteTask} />  ));    

  var retRezize = {pedidos: 0, corte: 1, silk: 2, costura: 3, revisao: 4 }
  var retRezizeNumber = retRezize[column]

  return (     
    <Box w={width} margin='0' padding='1px'>  
      <Center padding='20px' paddingTop='0px'>
        <InputGroup>      
          <InputLeftElement onClick={addEmptyTask} >
            <SearchIcon  color='gray.300'  />
          </InputLeftElement>
          <Input type='text' placeholder='Pesquisar' />      
        </InputGroup>
      </Center>
       <Box ref={dropRef} minHeight='80px'>  
           {ColumnTasks}             
      </Box>
    </Box>  
  );
}

export default Column;
