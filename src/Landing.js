import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import './App.css';

export default function Landing({ blogRef, blogHandle, homeRef }) {
  return (
    <Container maxW={'5xl'} zIndex={0} ref={homeRef}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 40 }}
      >
        {/* <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          <Text as={'span'} color={'white'}>
            Welcome To{' '}
          </Text>
          JavaScript Coding Tips
        </Heading> */}
        <Text color={'gray.500'} maxW={'3xl'}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sunt
          consectetur in dolore sapiente a illo aut quo. Adipisci molestiae
          maiores molestias mollitia magnam illo.
        </Text>
        <Stack spacing={6} direction={'row'}>
          {/* <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'black'}
            _hover={{ bg: 'white', color: 'black', transform: 'scale(1.1)' }}
            onClick={() => blogHandle()}
          >
            Let's go!
          </Button> */}
          <button className="landing-btn" onClick={() => blogHandle()}>
            Let's go!
          </button>
          {/* <Button
            rounded={'full'}
            px={6}
            _hover={{ bg: 'black', color: 'white', transform: 'scale(1.1)' }}
          >
            Learn more
          </Button> */}
        </Stack>

        <Image src="https://ik.imagekit.io/e16xo45jw/Blog/js1a_lcOMm6WvG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662842125322" />
      </Stack>
      {/* <Heading
        pb={5}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
      >
        <Text as={'span'} color={'white'}>
          Welcome To{' '}
        </Text>
        JavaScript Coding Tips
      </Heading> */}
      <div ref={blogRef}></div>
    </Container>
  );
}
