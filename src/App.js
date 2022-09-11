import React, { useRef } from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import ArticlePreview from './ArticlePreview';
import SignUp from './SignUp';

function App() {
  //useRef
  const scrollToBlogRef = useRef();
  const scrollToHomeRef = useRef();
  const scrollToSignUpRef = useRef();

  //scroll handlers
  const scrollToBlogHandle = () => {
    scrollToBlogRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSignUpHandle = () => {
    scrollToSignUpRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor={'yellow.300'}>
        <Header
          blogHandle={scrollToBlogHandle}
          signUpHandle={scrollToSignUpHandle}
        />
        <Landing blogHandle={scrollToBlogHandle} blogRef={scrollToBlogRef} />
        <ArticlePreview
          blogRef={scrollToBlogRef}
          signUpRef={scrollToSignUpRef}
        />
        {/* <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            
            <VStack spacing={8}></VStack>
          </Grid>
        </Box> */}
        <SignUp />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
