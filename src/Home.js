import React, { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Landing from './Landing';
import ArticlePreview from './ArticlePreview';
import SignUp from './SignUp';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
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
    <div>
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
        <SignUp />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
