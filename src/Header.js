import React, { useRef } from 'react';
import {
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Link,
  chakra,
  Box,
  SimpleGrid,
  Stack,
  VStack,
  Button,
  CloseButton,
  Flex,
  HStack,
  Spacer,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ blogHandle, homeHandle, signUpHandle }) => {
  const bg = useColorModeValue('yellow.300', 'black');
  const cl = useColorModeValue('black', 'white');
  const headerText = useColorModeValue('black', 'yellow.300');
  const headerTextHover = useColorModeValue('white', 'white');
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ic = useColorModeValue('brand.600', 'brand.50');
  const hbg = useColorModeValue('gray.50', 'brand.400');
  const tcl = useColorModeValue('gray.900', 'gray.50');
  const dcl = useColorModeValue('gray.500', 'gray.50');
  const hbgh = useColorModeValue('gray.100', 'brand.500');

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const Section = props => {
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{
          bg: 'hbg',
        }}
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Features = (
    <React.Fragment>
      <Box bg="black">
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
            lg: 5,
          }}
          pos="relative"
          gap={{
            base: 6,
            sm: 8,
          }}
          px={5}
          py={6}
          p={{
            sm: 8,
          }}
          color="white"
        >
          <Box
            _hover={{
              transform: 'scale(1.05)',
            }}
          >
            <Section
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              }
            >
              <chakra.h2 fontWeight={500} color={'yellow.300'}>
                Article 1
              </chakra.h2>
              <chakra.p color={'white'}>
                Get a better understanding of where your traffic is coming from.
              </chakra.p>
            </Section>
          </Box>

          <Box
            _hover={{
              transform: 'scale(1.05)',
            }}
          >
            <Section
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              }
            >
              <chakra.h2 fontWeight={500} color={'yellow.300'}>
                Article 2
              </chakra.h2>
              <chakra.p color={'white'}>
                Get a better understanding of where your traffic is coming from.
              </chakra.p>
            </Section>
          </Box>

          <Box
            _hover={{
              transform: 'scale(1.05)',
            }}
          >
            <Section
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              }
            >
              <chakra.h2 fontWeight={500} color={'yellow.300'}>
                Article 3
              </chakra.h2>
              <chakra.p color={'white'}>
                Get a better understanding of where your traffic is coming from.
              </chakra.p>
            </Section>
          </Box>

          <Box
            _hover={{
              transform: 'scale(1.05)',
            }}
          >
            <Section
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              }
            >
              <chakra.h2 fontWeight={500} color={'yellow.300'}>
                Article 4
              </chakra.h2>
              <chakra.p color={'white'}>
                Get a better understanding of where your traffic is coming from.
              </chakra.p>
            </Section>
          </Box>

          <Box
            _hover={{
              transform: 'scale(1.05)',
            }}
          >
            <Section
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              }
            >
              <chakra.h2 fontWeight={500} color={'yellow.300'}>
                Article 5
              </chakra.h2>
              <chakra.p color={'white'}>
                Get a better understanding of where your traffic is coming from.
              </chakra.p>
            </Section>
          </Box>
        </SimpleGrid>
      </Box>
    </React.Fragment>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost">
        Dashboard
      </Button>
      <Button w="full" variant="solid" colorScheme="brand">
        Inbox
      </Button>
      <Button w="full" variant="ghost">
        Videos
      </Button>
    </VStack>
  );

  //JSX Return
  return (
    <React.Fragment>
      <Box position="sticky" top={0} borderBottom="1px solid black">
        <chakra.header
          h="full"
          bg={bg}
          _hover={{
            bg: 'white',
          }}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Link display="flex" alignItems="center" href="/">
              {/* <Logo /> */}
            </Link>
            <Box
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <HStack spacing={1}>
                <Box role="group">
                  <Button
                    bg="none"
                    color={headerText}
                    alignItems="center"
                    fontSize="md"
                    _hover={{
                      transform: 'scale(1.1)',
                    }}
                    _focus={{
                      boxShadow: 'none',
                    }}
                    // rightIcon={<IoIosArrowDown />}
                    // mr={10}
                  >
                    Latest Articles
                  </Button>
                  <Box
                    pos="absolute"
                    left={0}
                    w="full"
                    display="none"
                    _groupHover={{
                      display: 'block',
                    }}
                    pt={3}
                  >
                    {Features}
                  </Box>
                </Box>
                <Button
                  bg="none"
                  color={headerText}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  onClick={() => goToTop()}
                >
                  Home
                </Button>
                <Button
                  bg="none"
                  color={headerText}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  onClick={() => blogHandle()}
                >
                  Blog
                </Button>
                <Button
                  bg="none"
                  color={headerText}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  onClick={() => signUpHandle()}
                >
                  Sign up
                </Button>
              </HStack>
            </Box>
            <Spacer />

            <Box display="flex" alignItems="center">
              <Button
                bg="none"
                color={headerText}
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  transform: 'scale(1.1)',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
              >
                Resources
              </Button>
              <Button
                bg="none"
                color={headerText}
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  transform: 'scale(1.1)',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
              >
                About
              </Button>
              <Button
                bg="none"
                color={headerText}
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  transform: 'scale(1.1)',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
              >
                Contact
              </Button>
            </Box>

            <Box display="flex" alignItems="center" ml={5}>
              <HStack spacing={1}>
                <Button
                  colorScheme="brand"
                  variant="solid"
                  size="sm"
                  color="white"
                  bg={'black'}
                  _hover={{
                    color: 'yellow.300',
                    transform: 'scale(1.1)',
                  }}
                >
                  Subscribe
                </Button>
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{
                  base: '0',
                  md: '3',
                }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                // icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Box>
          </Flex>

          {MobileNavContent}
        </chakra.header>
      </Box>
    </React.Fragment>
  );
};

export default Header;
