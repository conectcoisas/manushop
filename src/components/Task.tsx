import { ExternalLinkIcon, EditIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, IconButton, Text } from '@chakra-ui/react';
import _ from 'lodash';
import { memo, useEffect } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';
import { useState } from 'react'
import { FormLabel, Wrap, WrapItem, Center, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import { Table, TableContainer, Thead, Tr, Input, Th, Tbody, Tfoot, Td } from '@chakra-ui/react'
import { useToast, Icon } from '@chakra-ui/react'
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, FormControl, ModalHeader, ModalCloseButton } from '@chakra-ui/react'
import React from 'react'
import { SimpleGrid, Divider, Stack, Image } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


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

              <Wrap display='flex' opacity={.7}  >      
                  <WrapItem>
                    <Avatar name='M L' size='sm' backgroundColor='yellow' margin='8px' color='black' onClick={handleDeleteClick} cursor='pointer'/>
                  </WrapItem>      
                  <WrapItem>                  
                    <Text as='b' marginTop='10px' fontSize='sm' color='white' >{task.id}</Text>
                  </WrapItem>             
              </Wrap>

             <Modal size='6xl'
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    closeOnOverlayClick={false}
                  >
                    {overlay}
                    <ModalOverlay />
                    
                    <ModalContent> 

                      <ModalHeader margin='0px' color='blue.500'>         
                            Pedido {task.id} - 06/10/2024 - Shopee 
                      </ModalHeader>    
                      <ModalCloseButton />
                      
                        <Divider />
                        <FormControl color='blue.500'>                              
                          <SimpleGrid columns={2}  margin='30px' color='blue.500' >
                              <Box>
                                <Box display='flex' margin='0px' padding='0px' color='blue.500'> 
                                  <FormLabel margin='0px' padding='0px' color='blue.500'>Envio:</FormLabel>
                                  <FormLabel margin='0px' padding='0px' marginLeft='5px' >06/12/2023</FormLabel>
                                </Box >
                                <Box display='flex'> 
                                  <FormLabel margin='0px' padding='0px' color='blue.500'>Prazo Fabricação:</FormLabel>
                                  <FormLabel margin='0px' padding='0px' marginLeft='5px'>5 dias</FormLabel>
                                </Box>  
                                <Box display='flex'> 
                                  <FormLabel margin='0px' padding='0px' color='blue.500'>Cliente:</FormLabel>
                                  <FormLabel margin='0px' padding='0px' marginLeft='5px'>Danilo Santos Gomes</FormLabel>
                                </Box> 
                                <Box display='flex'> 
                                  <FormLabel margin='0px' padding='0px' color='blue.500'>Telefone:</FormLabel>
                                  <FormLabel margin='0px' padding='0px' marginLeft='5px'>(16) 982309101</FormLabel>
                                </Box>                    
                              </Box>
                              <Box >
                                <Stack direction='row-reverse'>
                              
                                  <Image
                                    boxSize='100px'
                                    objectFit='cover'
                                    src='https://scontent.frao1-2.fna.fbcdn.net/v/t1.6435-9/123116188_198588911670476_4405785766780635308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=84c479&_nc_ohc=1exiLBgRJFoAX-CJa43&_nc_ht=scontent.frao1-2.fna&oh=00_AfDfia3A4XAZJey6ek65Emrn_wZmNK-D1qZ2A64476wvIA&oe=6570DFF3'
                                    alt='Dan Abramov'
                                  />
                                   <Image
                                    boxSize='100px'
                                    objectFit='cover'
                                    src='https://br.web.img3.acsta.net/r_654_368/newsv7/18/06/22/22/52/1801743.jpg'
                                    alt='Dan Abramov'
                                  />
                                   <Image
                                    boxSize='100px'
                                    objectFit='cover'
                                    src='https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_900x506.png.webp'
                                    alt='Dan Abramov'></Image>
                                
                                </Stack>
                              </Box>
                          </SimpleGrid>
                    
                          <Divider />

                          <Box display='flex' justifyContent='space-evenly' margin='20px' >
                           <TableContainer>
                              <Table variant='striped' colorScheme='teal' size='sm' color='blue.500'>                                
                                <Thead >
                                  <Tr >
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
                                    <Td>
                                      <HStack color='blue.500'>                                        
                                      <Icon as={EditIcon}  boxSize={5} color='blue.500'/>    
                                        <Icon as={DeleteIcon} boxSize={5} color='blue.500'/> 
                                        <Icon as={AddIcon} boxSize={5}  color='blue.500'/>
                                      </HStack>                         
                                    </Td>
                                  </Tr>
                                  <Tr>
                                    <Td isNumeric>5</Td>
                                    <Td>Lorem ipsum</Td>
                                    <Td>Vermelho</Td>
                                    <Td >GG</Td>
                                    <Td>
                                      <HStack color='blue.500'>                                        
                                        <Icon as={EditIcon}  boxSize={5} color='blue.500'/>    
                                        <Icon as={DeleteIcon} boxSize={5} color='blue.500'/> 
                                        <Icon as={AddIcon} boxSize={5}  color='blue.500'/>
                                      </HStack>                         
                                    </Td>
                                  </Tr>
                                  <Tr>
                                    <Td isNumeric>10</Td>
                                    <Td>Lorem ipsum</Td>
                                    <Td>Azul</Td>
                                    <Td >GG</Td>
                                    <Td>
                                      <HStack color='blue.500'>
                                      <Icon as={EditIcon}  boxSize={5} color='blue.500'/>    
                                        <Icon as={DeleteIcon} boxSize={5} color='blue.500'/> 
                                        <Icon as={AddIcon} boxSize={5}  color='blue.500'/>
                                      </HStack>                         
                                    </Td>
                                  </Tr>
                                  <Tr>
                                    <Td isNumeric>12</Td>
                                    <Td>Lorem ipsum</Td>
                                    <Td>Grey</Td>
                                    <Td >GG</Td>
                                    <Td>
                                      <HStack color='blue.500'>
                                      <Icon as={EditIcon}  boxSize={5} color='blue.500'/>    
                                        <Icon as={DeleteIcon} boxSize={5} color='blue.500'/> 
                                        <Icon as={AddIcon} boxSize={5}  color='blue.500'/>
                                      </HStack>                         
                                    </Td>
                                  </Tr>
                                </Tbody>
                               
                              </Table>
                            </TableContainer>          
                          </Box> 
                        </FormControl> 
                        <Divider />
                        
                        <SimpleGrid columns={2}  margin='30px' color='blue.500' >
                              <Box>                              
                                <Box display='flex'> 
                                  <FormLabel margin='0px' padding='0px' color='blue.500'>OBS:</FormLabel>
                                  <FormLabel margin='0px' padding='0px' marginLeft='5px'> Lorem ipsum mollis imperdiet ultricies vulputate donec neque consequat malesuada sodales, 
                                risus </FormLabel>
                                </Box>                                             
                              </Box>                       
                          </SimpleGrid>

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
