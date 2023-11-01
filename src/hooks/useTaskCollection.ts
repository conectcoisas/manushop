import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{[key in ColumnType]: TaskModel[]; }> ('tasks', 
  {
    pedidos: [
      {
        id: uuidv4(),
        column: ColumnType.PEDIDO,
        title: 'Task 1',
        color: 'blue.300',
      },
    ],
    corte: [
      {
        id: uuidv4(),
        column: ColumnType.CORTE,
        title: 'Task 2',
        color: 'yellow.300',
      },
    ],
    silk: [
      {
        id: uuidv4(),
        column: ColumnType.SILK,
        title: 'Task 3',
        color: 'red.300',
      },
    ],
    costura: [
      {
        id: uuidv4(),
        column: ColumnType.COSTURA,
        title: 'Task 4',
        color: 'green.300',
      },
    ],
    revisao: [
      {
        id: uuidv4(),
        column: ColumnType.REVISAO,
        title: 'Task 5',
        color: 'green.600',
      },
    ],
  });
}

export default useTaskCollection;
