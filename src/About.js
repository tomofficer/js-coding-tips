import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Center,
  VStack,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import HeaderAlternate from './HeaderAlternate';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <HeaderAlternate />

      <Box bg={'yellow.300'} w={'full'}>
        <Box
          w={'full'}
          backgroundImage="url('https://ik.imagekit.io/e16xo45jw/Blog/vipul-jha-a4X1cdC1QAc-unsplash_niPBlIeA7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662870890832')"
          backgroundPosition={'center'}
          backgroundSize="contain"
        >
          <Container maxW={'5xl'}>
            <Stack
              as={Box}
              textAlign={'center'}
              spacing={{ base: 8, md: 14 }}
              py={{ base: 20, md: 20 }}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
              >
                <Box>
                  <Center>
                    <VStack>
                      <Text fontSize={'60px'} mb={'20px'} color={'white'}>
                        Thank you for visiting
                      </Text>
                      <Image
                        src="https://ik.imagekit.io/e16xo45jw/Blog/jsct-logo-white_57YEipdMW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662871696512"
                        w={'300px'}
                      />
                    </VStack>
                  </Center>
                </Box>
              </Heading>

              <Box>
                <Center>
                  <Box
                    maxW={'370px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    overflow={'hidden'}
                    border="2px solid white"
                    borderRadius={'25px'}
                  >
                    <Image
                      h={'220px'}
                      w={'full'}
                      src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                      }
                      objectFit={'cover'}
                    />
                    <Flex justify={'center'} mt={-12}>
                      <Avatar
                        size={'xl'}
                        src={
                          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                        }
                        alt={'Author'}
                        css={{
                          border: '2px solid white',
                        }}
                      />
                    </Flex>

                    <Box p={6}>
                      <Stack spacing={0} align={'center'} mb={5}>
                        <Heading
                          fontSize={'2xl'}
                          fontWeight={500}
                          fontFamily={'body'}
                        >
                          Tom Officer
                        </Heading>
                        <Text color={'gray.500'}>Full Stack Developer</Text>
                      </Stack>

                      <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                          <Text fontWeight={600}>23k</Text>
                          <Text fontSize={'sm'} color={'gray.500'}>
                            Followers
                          </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                          <Text fontWeight={600}>23k</Text>
                          <Text fontSize={'sm'} color={'gray.500'}>
                            Followers
                          </Text>
                        </Stack>
                      </Stack>

                      <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}
                      >
                        Follow
                      </Button>
                    </Box>
                  </Box>
                </Center>
              </Box>

              <Box
                bg={'yellow.200'}
                borderRadius="25px"
                border="3px white solid"
              >
                <Text
                  color={'grey.800'}
                  fontSize="18px"
                  fontWeight={'600'}
                  p={'40px'}
                >
                  Hey, I'm Tom, thanks for checking out my blog! <br /> I'm a
                  full stack developer from Northern California with a
                  bachelor's degree in Audio Engineering. <br /> I currently
                  work remotely from beautiful Northern California as a Frontend
                  Developer. <br /> <br />I created this blog to share solutions
                  to challenges I've came across in my career and to share
                  information about topics that have little pre-exisiting
                  documentation. I hope you find it of good use.
                  <br /> I built this blog from scratch using JavaScript, React
                  and the beautiful Chakra UI library. <br />
                  <br />
                  Thanks for visiting JavaScript Coding Tips and stay tuned for
                  new content weekly. <br />
                  <br />
                  Please don't hesitate to reach out and connect with me on any
                  of my social media links. <br /> I love making new connections
                  and am always open to new opportunities!
                  <br /> <br />
                  Cheers!
                </Text>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Box bg={'yellow.300'}>
          <Center>
            <Image src="https://ik.imagekit.io/e16xo45jw/Blog/js1a_lcOMm6WvG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662842125322" />
          </Center>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default About;
