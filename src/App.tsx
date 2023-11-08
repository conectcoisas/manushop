import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';
import './App.css'
import { useState } from 'react'
import { FormLabel, DrawerOverlay, DrawerCloseButton, Wrap, DrawerBody, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import { Drawer, Center, Button, Text, DrawerContent, DrawerHeader, Box, Input, Stack, InputGroup } from '@chakra-ui/react'
import { InputLeftAddon, Select, Textarea, DrawerFooter, InputRightAddon } from '@chakra-ui/react'
import { useDisclosure, ModalOverlay, IconButton  } from '@chakra-ui/react'
import   BsFillAirplaneEnginesFill from 'react-icons/fa'
import { MDBIcon } from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { TouchBackend } from 'react-dnd-touch-backend';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const Backend = isMobile ? TouchBackend : HTML5Backend; 

<MDBIcon fas icon="broom" />

import React from 'react'

function App() {

  var with01 = "100%"
  var with02 = '100%'
  var with03 = '100%'

  const columnWhithPedidos: string[] = [with01, with02, with03, with03, with03]
  const columnWhithCorte: string[] = [with02, with01, with02, with03, with03]
  const columnWhithSilk: string[] = [with03, with02, with01, with02, with03]
  const columnWhithCostura: string[] = [with03, with03, with02, with01, with02]
  const columnWhithRevisao: string[] = [with03, with03, with03, with03, with03]


  const columnsWhith = [ 
    columnWhithPedidos, 
    columnWhithCorte, 
    columnWhithSilk, 
    columnWhithCostura, 
    columnWhithRevisao ]
 
  const [rezize, setResize] = useState(0)
  const btnSetRezize = (rezizeColumn: any) => { setResize(rezizeColumn) } 

  const [showPedidos, setShowPedidos] = useState(true)

  const [showCorte, setShowCorte] = useState(true)
  const [showSilk, setShowSilk] = useState(true)
  const [showCostura, setShowCostura] = useState(true)
  const [showRevisao, setShowRevisao] = useState(true)

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

  return (
    <main >  
        <Center margin='20px'>        
          <Text fontSize={{ base: "24px", md: "30px", lg: "36px" }}>
                    MANUSHOP - Painel de Produção    
          </Text>
        </Center>  
        <Box>    
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Configurações</DrawerHeader>
                <DrawerBody>
                  <p>Adicionar Colaborador</p>
                  <p>Adicionar Produto</p>
                  <p>Adicionar Categoria</p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
        </Box>        
        <Wrap position='absolute' top={0} right={0} margin='15px'>          
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" onClick={onOpen}>
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"/>
              </svg>
        </Wrap>  
       
        <DndProvider backend={Backend}>  
        <Wrap justify='space-evenly' marginTop='20px' >

           { showPedidos ? 
                <Tabs w='25%'>
                  <TabList>
                    <Tab>Pedidos</Tab>  
                    <Tab>               
                        <MDBIcon fas icon="calendar-alt" />
                    </Tab>             
                  </TabList>
                  <TabPanels>
                    <TabPanel padding='0px' paddingTop='15px'>
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.PEDIDO} onRezize={btnSetRezize} />    
                    </TabPanel> 
                    <TabPanel padding='0px' paddingTop='15px'>
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.REVISAO} onRezize={btnSetRezize} />    
                    </TabPanel>            
                  </TabPanels>
                </Tabs> 
            : null }

            { showCorte ? 
                <Tabs w='25%'>
                  <TabList>
                    <Tab>Corte</Tab>
                    <Tab>
                        <MDBIcon fas icon="fill-drip" />
                    </Tab>
                    <Tab>               
                        <MDBIcon fab icon="accusoft" />
                    </Tab>
                    <Tab>               
                      <MDBIcon far icon="calendar" />
                    </Tab>      
                  </TabList>
                  <TabPanels>
                    <TabPanel padding='0px' paddingTop='15px'>
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.CORTE} onRezize={btnSetRezize} />    
                    </TabPanel>
                    <TabPanel padding='0px' paddingTop='15px'> 
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.SILK} onRezize={btnSetRezize}/>              
                    </TabPanel >
                    <TabPanel padding='0px' paddingTop='15px'> 
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.REVISAO} onRezize={btnSetRezize} /> 
                    </TabPanel>
                    <TabPanel padding='0px' paddingTop='15px'> 
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.REVISAO} onRezize={btnSetRezize} /> 
                    </TabPanel>  
                  </TabPanels>
                </Tabs>
            : null }

            { showSilk ? 
                <Tabs w='25%'>
                  <TabList>
                  <Tab>Silk</Tab>
                    <Tab>
                        <MDBIcon fas icon="camera" />
                    </Tab>
                    <Tab>
                        <MDBIcon far icon="calendar" />
                    </Tab>      
                  </TabList>
                  <TabPanels>
                    <TabPanel padding='0px' paddingTop='15px'>
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.SILK} onRezize={btnSetRezize} />    
                    </TabPanel >
                    <TabPanel padding='0px' paddingTop='15px'> 
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.REVISAO} onRezize={btnSetRezize}/>              
                    </TabPanel>
                    <TabPanel padding='0px' paddingTop='15px'> 
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.CORTE} onRezize={btnSetRezize} /> 
                    </TabPanel> 
                  </TabPanels>
                </Tabs>
            : null }

            { showCostura ? 
                <Tabs w='25%'>
                  <TabList>
                    <Tab>Costura</Tab>  
                    <Tab>               
                        <MDBIcon fas icon="calendar-alt" />
                    </Tab>               
                  </TabList>
                  <TabPanels>
                    <TabPanel padding='0px' paddingTop='15px'>
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.COSTURA} onRezize={btnSetRezize} />    
                    </TabPanel> 
                    <TabPanel padding='0px' paddingTop='15px'>
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.REVISAO} onRezize={btnSetRezize} />    
                    </TabPanel>            
                  </TabPanels>
                </Tabs>
            : null }

           { showRevisao ? 
                <Tabs w='25%'>
                  <TabList>
                    <Tab>Revisao</Tab>       
                    <Tab>               
                        <MDBIcon fas icon="calendar-alt" />
                    </Tab>          
                  </TabList>
                  <TabPanels>
                    <TabPanel padding='0px' paddingTop='15px'>
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.REVISAO} onRezize={btnSetRezize} />    
                    </TabPanel> 
                    <TabPanel padding='0px' paddingTop='15px'>
                        <Column width={columnsWhith[rezize][0]} column={ColumnType.REVISAO} onRezize={btnSetRezize} />    
                    </TabPanel>            
                  </TabPanels>
                </Tabs> 
            : null }

          </Wrap>                                 
        </DndProvider>      
    </main>
  );
}

export default App;
