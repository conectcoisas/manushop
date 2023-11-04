import { ExternalLinkIcon,ArrowUpDownIcon, DownloadIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, IconButton, ScaleFade, Text, WrapItem } from '@chakra-ui/react';
import _ from 'lodash';
import { memo, useEffect } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';
import { useState } from 'react'
import { FormLabel, DrawerOverlay, DrawerCloseButton, Wrap, DrawerBody, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import { Drawer, Center, DrawerContent, DrawerHeader, Input, Stack, InputGroup } from '@chakra-ui/react'
import { useToast, Avatar, InputRightAddon } from '@chakra-ui/react'
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, FormControl, ModalHeader, ModalCloseButton } from '@chakra-ui/react'
import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

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

  const [primeiraVez, setPrimeiraVez] = useState(true)
  const primeiraVezFalse = () => setPrimeiraVez(false)

  const numeroAleatorio = useEffect(() => {    
    Math.floor(Math.random() * 9999)
  }, []); 

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
            <Box>           
                  <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    closeOnOverlayClick={false}
                  >
                    {overlay}
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel>First name</FormLabel>
                          <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel>Last name</FormLabel>
                          <Input placeholder='Last name' />
                        </FormControl>
                      </ModalBody>
                      <Box padding='6' boxShadow='lg' bg='white'>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                      </Box>
                      <ModalFooter>
                      <Button
                        onClick={() =>
                          toast({
                            position: 'bottom-left',
                            render: () => (
                              <Box color='white' p={3} bg='blue.500'>
                                Hello World
                              </Box>
                            ),
                          })
                        }
                      >
                        Show Toast
                      </Button>
                      <Button
                          onClick={() =>
                            toast({
                              title: 'Account created.',
                              description: "We've created your account for you.",
                              status: 'success',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          Show Toast
                        </Button>
                        <Button
                          onClick={() => {
                            // Create an example promise that resolves in 5s
                            const examplePromise = new Promise((resolve, reject) => {
                              setTimeout(() => resolve(200), 5000)
                            })

                            // Will display the loading toast until the promise is either resolved
                            // or rejected.
                            toast.promise(examplePromise, {
                              success: { title: 'Promise resolved', description: 'Looks great' },
                              error: { title: 'Promise rejected', description: 'Something wrong' },
                              loading: { title: 'Promise pending', description: 'Please wait' },
                            })
                          }}
                        >
                          Show Toast
                        </Button>
                        <Button colorScheme='blue' mr={3}>
                          Save
                        </Button>

                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
            </Box> 

            { primeiraVez? 
                <span> {} </span>  
            : null }
           
            {}
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
