import { ExternalLinkIcon,ArrowUpDownIcon, DownloadIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, IconButton, ScaleFade, Text } from '@chakra-ui/react';
import _ from 'lodash';
import { memo } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';
import { useState } from 'react';
import Login from '../Login';

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({  index,  task,  onUpdate: handleUpdate,  onDropHover: handleDropHover,  onDelete: handleDelete }: TaskProps)
{
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>({ task, index: index }, handleDropHover  );
  const handleDeleteClick = () => {  handleDelete(task.id)  }

  const minH = 50
  const maxH = 400

  const [altura, setAltura] =  useState(minH)
  const [backGround, setBackGround] =  useState(task.color)
  

  return (    
      <Box ref={ref} as="div" role="group" position="relative"  w='100%' cursor="grab" opacity={isDragging? 1 : 1} >        

        <IconButton  position="absolute" top={0} right={0} zIndex={100}    
              aria-label="open-task"
              size="lg"
              colorScheme="solid"
              color={'gray.700'}
              icon={<ExternalLinkIcon />}
              _groupHover={{ opacity: .7, }}
              opacity={0}
              onClick={handleDeleteClick}       
        ></IconButton>

        <Box background={backGround} marginBottom='2px' display='flex' minH={50} h={altura} rounded="lg">

        </Box>
        
      </Box>
  );
}

export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }
  return false;
});
