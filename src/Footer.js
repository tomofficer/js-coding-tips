import React from 'react';
import {
  Box,
  Stack,
  Flex,
  Image,
  HStack,
  Link,
  Divider,
  VStack,
  Icon,
  Text,
  Center,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <Box
        bg="yellow.300"
        _dark={{
          bg: 'black',
        }}
        mt={5}
      >
        <VStack py={0}>
          <Image
            src="https://ik.imagekit.io/e16xo45jw/Blog/jsct-logo-white_57YEipdMW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662871696512"
            alt="Company Logo"
            width={{
              base: '150px',
              lg: '150px',
            }}
            height={{
              base: '150px',
              lg: '150px',
            }}
            my={{
              base: 2,
              lg: 0,
            }}
          />
          <Text>Follow me on</Text>
          <HStack justify="center">
            {/* <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
                _hover={{
                  color: 'white',
                }}
                h="25px"
                w="25px"
                as={FaFacebookF}
              />
            </Link> */}

            <Link>
              <Icon
                _dark={{
                  color: 'white',
                }}
                h="25px"
                w="25px"
                as={FaInstagram}
                _hover={{
                  color: 'white',
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tomofficer/"
              target={'_blank'}
            >
              <Icon
                _dark={{
                  color: 'white',
                }}
                h="25px"
                w="25px"
                as={FaTwitter}
                _hover={{
                  color: 'white',
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tomofficer/"
              target={'_blank'}
            >
              <Icon
                _dark={{
                  color: 'white',
                }}
                h="25px"
                w="25px"
                as={FaLinkedinIn}
                _hover={{
                  color: 'white',
                }}
              />
            </Link>
          </HStack>
        </VStack>
        <Center mt={3}>
          <Text
            textAlign="center"
            fontSize="smaller"
            _dark={{
              color: 'white',
            }}
          >
            &copy;2022 Tom Officer | JavaScript Coding Tips | All rights
            reserved
          </Text>
        </Center>
      </Box>
      ;
    </div>
  );
};

export default Footer;

// <Stack
//   direction={{
//     base: 'column',
//     lg: 'row',
//   }}
//   w="full"
//   justify="space-between"
//   p={10}
// >
//   <Flex justify="center"></Flex>
//   <HStack
//     alignItems="start"
//     flex={1}
//     justify="space-around"
//     fontSize={{
//       base: '12px',
//       md: '16px',
//     }}
//     color="black"
//     _dark={{
//       color: 'yellow.300',
//     }}
//     textAlign={{
//       base: 'center',
//       md: 'left',
//     }}
//   >
//     <Flex justify="start" direction="column">
//       <Link textTransform="uppercase">Pre-Sale FAQS</Link>
//       <Link textTransform="uppercase">Submit a ticket</Link>
//     </Flex>
//     <Flex justify="start" direction="column">
//       <Link textTransform="uppercase">Services</Link>
//       <Link textTransform="uppercase">Theme Tweak</Link>
//     </Flex>
//   </HStack>
//   <HStack
//     alignItems="start"
//     flex={1}
//     justify="space-around"
//     fontSize={{
//       base: '12px',
//       md: '16px',
//     }}
//     color="black"
//     _dark={{
//       color: 'yellow.300',
//     }}
//     textAlign={{
//       base: 'center',
//       md: 'left',
//     }}
//   >
//     <Flex justify="start" direction="column">
//       <Link textTransform="uppercase">Show Case</Link>
//       <Link textTransform="uppercase">Widget Kit</Link>
//       <Link textTransform="uppercase">Support</Link>
//     </Flex>
//     <Flex justify="start" direction="column">
//       <Link textTransform="uppercase">About Us</Link>
//       <Link textTransform="uppercase">Contact Us</Link>
//       <Link textTransform="uppercase">Resources</Link>
//     </Flex>
//   </HStack>
// </Stack>;
