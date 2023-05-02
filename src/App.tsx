import './App.css';

import { Box, ChakraProvider } from '@chakra-ui/react'
import { Tabs, TabList, Tab} from '@chakra-ui/react'

import { ApolloClient, InMemoryCache} from '@apollo/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import HomePage from './Pages/Home';
import AnimeDetailPage from './Pages/DetailPage';
import { ApolloProvider } from '@apollo/client';
import SearchPage from './Pages/SearchPage';
import FavPage from './Pages/FavPage';

const apolloClient = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client = {apolloClient}>
        <BrowserRouter>
          <Tabs isFitted variant='enclosed' bgColor='black'>
            <TabList mb='1em'>
              <Box paddingTop='2' paddingLeft='2' paddingRight='2' bgColor='grey'>FFanime</Box>
              <Link to = '/'>
                <Tab textColor="white">Home</Tab>
              </Link>
              <Link to = 'FavPage'>
                <Tab textColor="white">Favorite</Tab>
              </Link>
              <Link to = 'SearchPage'>
                <Tab textColor="white">Search</Tab>
              </Link>
            </TabList>
          </Tabs>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/:id' element={<AnimeDetailPage/>}></Route>
            <Route path='SearchPage' element={<SearchPage/>}></Route>
            <Route path='FavPage' element={<FavPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
