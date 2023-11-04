import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';
import './App.css'
import { useState } from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import { AbsoluteCenter, Center, Square, Circle, Text, Link, Image, Box } from '@chakra-ui/react'
import Login from './Login';

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
  const btnSetRezize = (rezizeColumn: any) => { setResize(rezizeColumn); 
    console.log(rezizeColumn)
  }

  return (
    <main>  
        <Center>        
          <Text fontSize={{ base: "24px", md: "30px", lg: "36px" }}>
                    MANUSHOP - Painel de Produção
          </Text>
        </Center>           
        <Wrap position='absolute' top={0} right={0} margin='15px'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"/>
              </svg>
        </Wrap>  
       
        <DndProvider backend={HTML5Backend}>  
            <Tabs>
              <TabList>
                <Tab>Pedidos</Tab>              
              </TabList>
              <TabPanels>
                <TabPanel>
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.PEDIDO} onRezize={btnSetRezize} />    
                </TabPanel>             
              </TabPanels>
            </Tabs>
            <Tabs>
              <TabList>
                <Tab>Corte</Tab>
                <Tab>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </Tab>
                <Tab>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>                  
                </Tab>    
              </TabList>
              <TabPanels>
                <TabPanel>
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.PEDIDO} onRezize={btnSetRezize} />    
                </TabPanel>
                <TabPanel> 
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.SILK} onRezize={btnSetRezize}/>              
                </TabPanel>
                <TabPanel> 
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.CORTE} onRezize={btnSetRezize} /> 
                </TabPanel> 
              </TabPanels>
            </Tabs>
            <Tabs>
              <TabList>
              <Tab>Silk</Tab>
                <Tab>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </Tab>
                <Tab>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>                  
                </Tab>      
              </TabList>
              <TabPanels>
                <TabPanel>
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.PEDIDO} onRezize={btnSetRezize} />    
                </TabPanel>
                <TabPanel> 
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.SILK} onRezize={btnSetRezize}/>              
                </TabPanel>
                <TabPanel> 
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.CORTE} onRezize={btnSetRezize} /> 
                </TabPanel> 
              </TabPanels>
            </Tabs>
            <Tabs>
              <TabList>
                <Tab>Costura</Tab>              
              </TabList>
              <TabPanels>
                <TabPanel>
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.COSTURA} onRezize={btnSetRezize} />    
                </TabPanel>             
              </TabPanels>
            </Tabs>
            <Tabs>
              <TabList>
                <Tab>Revisao</Tab>              
              </TabList>
              <TabPanels>
                <TabPanel>
                    <Column width={columnsWhith[rezize][0]} column={ColumnType.REVISAO} onRezize={btnSetRezize} />    
                </TabPanel>             
              </TabPanels>
            </Tabs>                                  
        </DndProvider>   
    </main>
  );
}

export default App;
