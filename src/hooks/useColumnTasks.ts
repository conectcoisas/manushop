import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { pickChakraRandomColor, swap } from '../utils/helpers';
import { debug } from '../utils/logging';
import { TaskModel } from '../utils/models';
import useTaskCollection from './useTaskCollection';

const MAX_TASK_PER_COLUMN = 100;

function useColumnTasks(column: ColumnType) { 

  const [tasks, setTasks] = useTaskCollection();
  const columnTasks = tasks[column];

  const addEmptyTask = useCallback(() => {
    debug(`Adicionar Pedido em ${column} danilo`);
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        debug('Muitas tarefas!');
        return allTasks;
      }

      const newColumnTask: TaskModel = {
        id:  Math.floor(Math.random() * 99999).toString(),
        //id: uuidv4(),
        title: `Novo ${column}`,
        color: pickChakraRandomColor('.400'),
        column,
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);

  const deleteTask = useCallback(
    (id: TaskModel['id']) => {
      debug(`Removendo pedido ${id}..`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks],
  );

  const updateTask = useCallback(

      (id: TaskModel['id'], updatedTask: Omit<Partial<TaskModel>, 'id'>) => {
      debug(`Atualizando pedido ${id} with ${JSON.stringify(updateTask)}`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task,
          ),
        };
      });
    },
    [column, setTasks],
  );

  const dropTaskFrom = useCallback(
    
    (from: ColumnType, id: TaskModel['id']) => {
      
      setTasks((allTasks) => {
        
        
        const fromColumnTasks = allTasks[from];
        const toColumnTasks = allTasks[column];
        const movingTask = fromColumnTasks.find((task) => task.id === id);

        console.log(fromColumnTasks)
        console.log(toColumnTasks)  
        console.log(movingTask)      

        console.log(`Movendo pedido ${movingTask?.id} de ${from} para ${column}`);

        if (!movingTask) {
          console.log("!movingTask")
          return allTasks;
        }

        // remova a tarefa da coluna original e copie-a na coluna de destino              
        return {
          ...allTasks,
          [from]: fromColumnTasks.filter((task) => task.id !== id),
          [column]: [{ ...movingTask, column }, ...toColumnTasks],
        };    
      });
    },
    [column, setTasks],
  );
  
  const swapTasks = useCallback(
    (i: number, j: number) => {
      debug(`Swapping pedido ${i} with ${j} in ${column} column`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];        
        return {
          ...allTasks,
          [column]: swap(columnTasks, i, j),
        };
        
      });
    },
    [column, setTasks],
  );

  return {
    tasks: columnTasks,
    addEmptyTask,
    updateTask,
    dropTaskFrom,
    deleteTask,
    swapTasks,
  };
}

export default useColumnTasks;
