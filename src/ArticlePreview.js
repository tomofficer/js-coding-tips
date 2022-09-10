import React from 'react';
import { Flex, Box, Image, chakra, Link } from '@chakra-ui/react';

const ArticlePreview = () => {
  const articleData = [
    {
      title: 'How To Scroll To A Component In React Using the useRef Hook',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil, voluptates soluta reprehenderit maiores similique exercitationem saepe asperiores vel laboriosam, cupiditate laborum laudantium explicabo necessitatibus rem quidem adipisci magnam suscipit ducimus debitis praesentium doloremque aliquid in. Quis maiores exercitationem iure',
    },
    {
      title: 'How To Do This Thing In Article 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil, voluptates soluta reprehenderit maiores similique exercitationem saepe asperiores vel laboriosam, cupiditate laborum laudantium explicabo necessitatibus rem quidem adipisci magnam suscipit ducimus debitis praesentium doloremque aliquid in. Quis maiores exercitationem iure',
    },
    {
      title: 'How To Do This Thing In Article 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil, voluptates soluta reprehenderit maiores similique exercitationem saepe asperiores vel laboriosam, cupiditate laborum laudantium explicabo necessitatibus rem quidem adipisci magnam suscipit ducimus debitis praesentium doloremque aliquid in. Quis maiores exercitationem iure',
    },
    {
      title: 'How To Do This Thing In Article 4',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil, voluptates soluta reprehenderit maiores similique exercitationem saepe asperiores vel laboriosam, cupiditate laborum laudantium explicabo necessitatibus rem quidem adipisci magnam suscipit ducimus debitis praesentium doloremque aliquid in. Quis maiores exercitationem iure',
    },
  ];
  return (
    <>
      {articleData.map(article => (
        <>
          <Flex
            bg="#edf3f8"
            _dark={{
              bg: '#3e3e3e',
            }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg="white"
              _dark={{
                bg: 'gray.800',
              }}
              maxW="2xl"
            >
              <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
              />

              <Box p={6}>
                <Box>
                  <chakra.span
                    fontSize="xs"
                    textTransform="uppercase"
                    color="brand.600"
                    _dark={{
                      color: 'brand.400',
                    }}
                  >
                    Blog Post
                  </chakra.span>
                  <Link
                    display="block"
                    color="gray.800"
                    _dark={{
                      color: 'white',
                    }}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{
                      color: 'gray.600',
                      textDecor: 'underline',
                    }}
                  >
                    {article.title}
                  </Link>
                  <chakra.p
                    mt={2}
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                      color: 'gray.400',
                    }}
                  >
                    {article.body}
                  </chakra.p>
                </Box>

                <Box mt={4}>
                  <Flex alignItems="center">
                    <Flex alignItems="center">
                      <Image
                        h={10}
                        fit="cover"
                        rounded="full"
                        src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                        alt="Avatar"
                      />
                      <Link
                        mx={2}
                        fontWeight="bold"
                        color="gray.700"
                        _dark={{
                          color: 'gray.200',
                        }}
                      >
                        Tom Officer
                      </Link>
                    </Flex>
                    <chakra.span
                      mx={1}
                      fontSize="sm"
                      color="gray.600"
                      _dark={{
                        color: 'gray.300',
                      }}
                    >
                      Sep 10 2022
                    </chakra.span>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Flex>
        </>
      ))}
    </>
  );
};

export default ArticlePreview;
