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
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          w="full"
          justify="space-between"
          p={10}
        >
          <Flex justify="center">
            <Image
              src="http://placehold.jp/2a2a2c/ffffff/200x100.png?text=Company%20Logo&css=%7B%22font-size%20%22%3A%22%2016px%22%7D"
              alt="Company Logo"
              rounded="lg"
              width={{
                base: '150px',
                lg: '200px',
              }}
              height={{
                base: '75px',
                lg: '100px',
              }}
              my={{
                base: 2,
                lg: 0,
              }}
            />
          </Flex>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: '12px',
              md: '16px',
            }}
            color="black"
            _dark={{
              color: 'yellow.300',
            }}
            textAlign={{
              base: 'center',
              md: 'left',
            }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Pre-Sale FAQS</Link>
              <Link textTransform="uppercase">Submit a ticket</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Services</Link>
              <Link textTransform="uppercase">Theme Tweak</Link>
            </Flex>
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: '12px',
              md: '16px',
            }}
            color="black"
            _dark={{
              color: 'yellow.300',
            }}
            textAlign={{
              base: 'center',
              md: 'left',
            }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Show Case</Link>
              <Link textTransform="uppercase">Widget Kit</Link>
              <Link textTransform="uppercase">Support</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">About Us</Link>
              <Link textTransform="uppercase">Contact Us</Link>
              <Link textTransform="uppercase">Resources</Link>
            </Flex>
          </HStack>
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="black"
          _dark={{
            color: 'yellow.300',
          }}
          h="3.5px"
        />
        <VStack py={3}>
          <HStack justify="center">
            <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
                _hover={{
                  color: 'white',
                }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>

            <Link>
              <Icon
                _dark={{
                  color: 'white',
                }}
                h="20px"
                w="20px"
                as={FaInstagram}
                _hover={{
                  color: 'white',
                }}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: 'white',
                }}
                h="20px"
                w="20px"
                as={FaTwitter}
                _hover={{
                  color: 'white',
                }}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: 'white',
                }}
                h="20px"
                w="20px"
                as={FaLinkedinIn}
                _hover={{
                  color: 'white',
                }}
              />
            </Link>
          </HStack>

          <Text
            textAlign="center"
            fontSize="smaller"
            _dark={{
              color: 'white',
            }}
          >
            &copy;Copyright JavaScript Coding Tips & Tom Officer. All rights
            reserved.
          </Text>
        </VStack>
      </Box>
      ;
    </div>
  );
};

export default Footer;