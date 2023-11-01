import { useRef } from 'react';
import { useDrag, useDrop, XYCoord } from 'react-dnd';
import { ItemType } from '../utils/enums';
import { DragItem, TaskModel } from '../utils/models';

export function useTaskDragAndDrop<T extends HTMLElement>(
  { task, index }: { task: TaskModel; index: number },
  handleDropHover: (i: number, j: number) => void,
) {
  const ref = useRef<T>(null);

  const [{ isDragging }, drag] = useDrag<
    DragItem,
    void,
    { isDragging: boolean }
  >({
    item: { from: task.column, id: task.id, index },
    type: ItemType.TASK,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [_, drop] = useDrop<DragItem, void, unknown>({
    accept: ItemType.TASK,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      // as tarefas não estão na mesma coluna
      if (item.from !== task.column) {
        return;
      }

      const draggedItemIndex = item.index;
      const hoveredItemIndex = index;

      // estamos trocando a tarefa consigo mesmo
      if (draggedItemIndex === hoveredItemIndex) {
        return;
      }

      const isDraggedItemAboveHovered = draggedItemIndex < hoveredItemIndex;
      const isDraggedItemBelowHovered = !isDraggedItemAboveHovered;

      // obter coordenadas do mouse
      const { x: mouseX, y: mouseY } = monitor.getClientOffset() as XYCoord;

      // obter retângulo de item flutuante
      const hoveredBoundingRect = ref.current.getBoundingClientRect();

      // Obtenha a posição de altura média do item suspenso
      const hoveredMiddleHeight =
        (hoveredBoundingRect.bottom - hoveredBoundingRect.top) / 2;

      const mouseYRelativeToHovered = mouseY - hoveredBoundingRect.top;
      const isMouseYAboveHoveredMiddleHeight =
        mouseYRelativeToHovered < hoveredMiddleHeight;
      const isMouseYBelowHoveredMiddleHeight =
        mouseYRelativeToHovered > hoveredMiddleHeight;

       // Somente execute o movimento quando o mouse ultrapassar metade da altura dos itens
       // Ao arrastar para baixo, mova apenas quando o cursor estiver abaixo de 50%
       // Ao arrastar para cima, mova somente quando o cursor estiver acima de 50%

      if (isDraggedItemAboveHovered && isMouseYAboveHoveredMiddleHeight) {
        return;
      }

      if (isDraggedItemBelowHovered && isMouseYBelowHoveredMiddleHeight) {
        return;
      }

      // Hora de realmente executar a ação
      handleDropHover(draggedItemIndex, hoveredItemIndex);

      // Nota: estamos alterando o item monitor aqui!
      // Geralmente é melhor evitar mutações,
      // mas aqui é bom por uma questão de desempenho
      // para evitar pesquisas de índice caras.
      item.index = hoveredItemIndex;
    },
  });

  drag(drop(ref));

  return {
    ref,
    isDragging,
  };
}
