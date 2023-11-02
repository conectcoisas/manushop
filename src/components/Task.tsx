import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Button, IconButton, ScaleFade } from '@chakra-ui/react';
import _ from 'lodash';
import { memo } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';

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

  return (    
      <Box ref={ref} as="div" role="group" position="relative" rounded="lg" 
        w='100%' 
        p='2' 
        m='1'
        cursor="grab"  
        bgColor={task.color}
        opacity={isDragging ? 0.5 : 1}>           

        <IconButton position="absolute" top={0} right={0}  zIndex={100}
          aria-label="open-task"
          size="lg"
          colorScheme="solid"
          color={'gray.700'}
          icon={<ExternalLinkIcon />}
          _groupHover={{ opacity: 1, }}
          opacity={0}
          onClick={handleDeleteClick}
        />
        <Box>
          <Button></Button>
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
