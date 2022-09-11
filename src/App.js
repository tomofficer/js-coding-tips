import React, { useRef } from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import ArticlePreview from './ArticlePreview';
import Subscribe from './Subscribe';

function App() {
  //useRef
  const scrollToBlogRef = useRef();

  //scroll handlers
  const scrollToBlogHandle = () => {
    scrollToBlogRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor={'yellow.300'}>
        <Header blogHandle={scrollToBlogHandle} />
        <Landing blogHandle={scrollToBlogHandle} blogRef={scrollToBlogRef} />
        <ArticlePreview blogRef={scrollToBlogRef} />
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
