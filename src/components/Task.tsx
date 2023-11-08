

import _ from 'lodash';
import React from 'react'
import { useState } from 'react'
import { memo } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';

import { ExternalLinkIcon  } from '@chakra-ui/icons';

import { 
  Box, 
  Button, 
  IconButton, 
  FormLabel,
  Input,
  useToast, 
  Flex,
  useDisclosure, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalBody, 
  ModalFooter,
  FormControl, 
  ModalHeader,
  ModalCloseButton, 
  useEditableControls,

  } from '@chakra-ui/react';


type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

var isLoadPedidos: boolean = true

function Task( {index,  task,  onUpdate: handleUpdate,  onDropHover: handleDropHover,  onDelete: handleDelete }: TaskProps)
{
  
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>({ task, index: index }, handleDropHover  );
  const handleDeleteClick = () => {  handleDelete(task.id)  }

  const minH = 50
  const maxH = 400
  const [altura, setAltura] =  useState(minH)
  const [backGround, setBackGround] =  useState(task.color)


  


  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )

    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const toast = useToast()  


  var BuscarPedido: number = Math.floor(Math.random() * 9999)

  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()


  return (    
      <Box ref={ref} as="div" role="group" position="relative"  w='100%' cursor="grab" opacity={isDragging? 1 : 1}>        

        <IconButton  position="absolute" top={0} right={0} zIndex={100}    
              aria-label="open-task"
              size="lg"
              colorScheme="solid"
              color={'gray.700'}
              icon={<ExternalLinkIcon />}
              _groupHover={{ opacity: .9, }}
              opacity={0}
              onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
              }}       
        ></IconButton>

        <Box background={backGround} marginBottom='5px' display='flex' minH={50} h={altura} rounded="lg">
            <Box>           
                  <Modal size='4xl'
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    closeOnOverlayClick={false}
                  >
                    {overlay}
                    <ModalOverlay />

                    <ModalContent>
                      <ModalHeader>Pedido {task.id}</ModalHeader>
                      <ModalCloseButton />

                      <ModalBody>
                            <FormControl >
                              <FormLabel>Data Pedido:</FormLabel>
                              <FormLabel>Data Envio: <Input variant='filled' placeholder='Filled' /></FormLabel>
                              <FormLabel>Prazo Fabricação:<Input variant='filled' placeholder='Filled' /></FormLabel>
                              <FormLabel>Cliente:<Input variant='filled' placeholder='Filled' /></FormLabel>
                              <FormLabel>Plataforma:<Input variant='filled' placeholder='Filled' /></FormLabel>
                            </FormControl>
                      </ModalBody>

                      <ModalBody>
                            <FormControl >
                              <FormLabel>Quantidade:</FormLabel>
                              <FormLabel>Descrição:</FormLabel>
                              <FormLabel>Cor:</FormLabel>
                              <FormLabel>Tamanho:</FormLabel>
                              <FormLabel>Fotos:</FormLabel>                            
                            </FormControl>
                      </ModalBody>

                      <ModalBody>
                            <FormControl >                         
                              <FormLabel>Fotos:</FormLabel>
                              <FormLabel>Modelo Estampa:</FormLabel>
                              <FormLabel>Cor da Estampa:</FormLabel>                            
                            </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {                       
                          const examplePromise = new Promise((resolve, reject) => {
                            setTimeout(() => resolve(200), 2000)
                            toast({
                              position: 'bottom-left',
                              render: () => (
                                <Box color='white' p={3} bg='blue.500'>
                                  Hello World
                                </Box>
                              ),
                            })
                          })                          
                          toast.promise(examplePromise, {
                            success: { title: 'Promise resolved', description: 'Looks great' },
                            error: { title: 'Promise rejected', description: 'Something wrong' },
                            loading: { title: 'Promise pending', description: 'Please wait' },
                          })
                        }}
                        >
                          Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>

                      </ModalFooter>
                    </ModalContent>
                  </Modal>
            </Box> 
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
