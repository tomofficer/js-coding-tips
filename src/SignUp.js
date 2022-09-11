import React from 'react';
import {
  Flex,
  Icon,
  Box,
  chakra,
  SimpleGrid,
  GridItem,
  Input,
  Button,
  Stack,
  VisuallyHidden,
  Text,
} from '@chakra-ui/react';

//todo test top box margin on larger screen

const SignUp = () => {
  return (
    <Box px={4} py={'90px'} mx="auto" bg={'black'}>
      <Box
        w={{
          base: 'full',
          md: 11 / 12,
          xl: 8 / 12,
        }}
        textAlign={{
          base: 'left',
          md: 'center',
        }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{
            base: '3xl',
            md: '4xl',
          }}
          fontWeight={{
            base: 'bold',
            md: 'extrabold',
          }}
          color="white"
          _dark={{
            color: 'gray.100',
          }}
          lineHeight="shorter"
          pb={8}
        >
          Drop your email to receive more clever <br />
          <span style={{ color: 'yellow' }}>JavaScript tips</span> and{' '}
          <span style={{ color: 'yellow' }}>React hacks</span> <br />
          right in your inbox.
        </chakra.h1>

        <SimpleGrid
          as="form"
          w={{
            base: 'full',
            md: 7 / 12,
          }}
          columns={{
            base: 1,
            lg: 6,
          }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem
            as="label"
            colSpan={{
              base: 'auto',
              lg: 4,
            }}
          >
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Input
              mt={0}
              size="lg"
              type="email"
              placeholder="Enter your email..."
              required
              bgColor={'gray.200'}
            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{
              base: 'auto',
              lg: 2,
            }}
            size="lg"
            type="submit"
            // colorScheme="brand"
            bgColor={'yellow.300'}
            ml={2}
            cursor="pointer"
            _hover={{
              transform: 'scale(1.05)',
              color: 'black',
              bgColor: 'yellow',
            }}
          >
            Let's go!
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{
            base: 'column',
            md: 'row',
          }}
          justifyContent={{
            base: 'start',
            md: 'center',
          }}
          mb={3}
          spacing={{
            base: 2,
            md: 8,
          }}
          fontSize="xs"
          color="white"
        ></Stack>
      </Box>
    </Box>
  );
};

export default SignUp;
