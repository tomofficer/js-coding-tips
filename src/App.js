import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor={'yellow.300'}>
        <Header />
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            <VStack spacing={8}></VStack>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
