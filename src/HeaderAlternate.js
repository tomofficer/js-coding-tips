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
                <Box role="group"></Box>
                <a href="/">
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
                    Home
                  </Button>
                </a>
              </HStack>
            </Box>
            <Spacer />

            <Box display="flex" alignItems="center">
              <a href="/resources">
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
              </a>
              <a href="/about">
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
              </a>
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
