import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import ArticlePreview from './ArticlePreview';
import Subscribe from './Subscribe';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor={'yellow.300'}>
        <Header />
        <Landing />
        <ArticlePreview />
        {/* <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            
            <VStack spacing={8}></VStack>
          </Grid>
        </Box> */}
        <Subscribe />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
