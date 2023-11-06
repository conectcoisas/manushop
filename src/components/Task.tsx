import { ExternalLinkIcon,ArrowUpDownIcon, DownloadIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, IconButton, ScaleFade, Text } from '@chakra-ui/react';
import _ from 'lodash';
import { memo, useEffect } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';
import { useState } from 'react'
import { FormLabel, WrapItem, Wrap, Center, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import { Table, TableContainer, Thead, Tr, Input, Th, Tbody, Tfoot, Td } from '@chakra-ui/react'
import { useToast, TableCaption, InputRightAddon } from '@chakra-ui/react'
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, FormControl, ModalHeader, ModalCloseButton } from '@chakra-ui/react'
import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText,  } from '@chakra-ui/react'
import moment from 'moment'


import {
  Tag,
  TagLabel,
  HStack,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'

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


  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)



  const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
  )

  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const toast = useToast()

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
              onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
              }}       
        ></IconButton>

        <Box background={backGround} marginBottom='5px' display='flex' minH={50} h={altura} rounded="lg">
             
             <Modal size='6xl'
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    closeOnOverlayClick={false}
                    

                  >
                    {overlay}
                    <ModalOverlay />
                    
                    
                    <ModalContent >                      
                      
                      <ModalHeader>         
                            Pedido {task.id} -  { moment().format('DD/MM/YY')  } - Shopee 
                      </ModalHeader>    
                      <ModalCloseButton />
                      

                        <FormControl>                         
                           
                           <Box display='flex' marginLeft='20px'>
                            <Box>
                              <Box display='flex' margin='0px' padding='0px'> 
                                <FormLabel margin='0px' padding='0px'>Envio:</FormLabel>
                                <FormLabel margin='0px' padding='0px' marginLeft='5px'>06/12/2023</FormLabel>
                              </Box >
                              <Box display='flex'> 
                                <FormLabel margin='0px' padding='0px'>Prazo Fabricação:</FormLabel>
                                <FormLabel margin='0px' padding='0px' marginLeft='5px'>5 dias</FormLabel>
                              </Box>  
                              <Box display='flex'> 
                                <FormLabel margin='0px' padding='0px'>Cliente:</FormLabel>
                                <FormLabel margin='0px' padding='0px' marginLeft='5px'>Danilo Santos Gomes</FormLabel>
                              </Box> 
                              <Box display='flex'> 
                                <FormLabel margin='0px' padding='0px'>Telefone:</FormLabel>
                                <FormLabel margin='0px' padding='0px' marginLeft='5px'>(16) 982309101</FormLabel>
                              </Box>                    
                            </Box>
                            <Box backgroundColor='black'>
                              a
                            </Box>
                          </Box>

                           <Box display='flex' justifyContent='space-evenly' margin='20px'>
                           <TableContainer>
                              <Table variant='striped' colorScheme='teal' size='sm'>                                
                                <Thead>
                                  <Tr>
                                    <Th isNumeric>Quantidade</Th>
                                    <Th>Produtos</Th>
                                    <Th >Cor</Th>
                                    <Th >Tamanho</Th>   
                                    <Th >Ações</Th>                               
                                  </Tr>
                                </Thead>
                                <Tbody>
                                  <Tr>
                                    <Td isNumeric>2</Td>
                                    <Td>Lorem ipsum</Td>
                                    <Td>Verde</Td>
                                    <Td>GG</Td>
                                    <Td>GG</Td>
                                  </Tr>
                                  <Tr>
                                    <Td isNumeric>5</Td>
                                    <Td>Lorem ipsum</Td>
                                    <Td>Vermelho</Td>
                                    <Td >GG</Td>
                                    <Td>GG</Td>
                                  </Tr>
                                  <Tr>
                                    <Td isNumeric>10</Td>
                                    <Td>Lorem ipsum</Td>
                                    <Td>Azul</Td>
                                    <Td >GG</Td>
                                    <Td>GG</Td>
                                  </Tr>
                                  <Tr>
                                    <Td isNumeric>12</Td>
                                    <Td>Lorem ipsum</Td>
                                    <Td>Grey</Td>
                                    <Td >GG</Td>
                                    <Td>GG</Td>
                                  </Tr>
                                </Tbody>
                               
                              </Table>
                            </TableContainer>          
                           </Box> 

                        </FormControl>                     

                      <ModalFooter> 
                        <Button colorScheme='blue' mr={3} onClick={() => {                           
                            const examplePromise = new Promise((resolve, reject) => {
                              setTimeout(() => resolve(200), 1000)
                            })                           
                            toast.promise(examplePromise, {
                              success: { title: 'Processado', description: 'Sucesso' },
                              error: { title: 'Erro no processo', description: 'Tente novamente' },
                              loading: { title: 'Processando', description: 'Aguarde um momento' },
                            })
                          }}>
                          Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                      </ModalFooter>
                    </ModalContent>
                    
                  </Modal>
        
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
