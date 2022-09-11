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
          backgroundSize="cover"
        >
          <Container maxW={'3xl'}>
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
                        w={'400px'}
                      />
                    </VStack>
                  </Center>
                </Box>
              </Heading>

              <Text color={'white'} fontSize="18px">
                Hey, I'm Tom, thanks for checking out my blog! <br /> I'm a full
                stack developer from Northern California with a bachelor's
                degree in Audio Engineering. I currently work remotely from
                beautiful Northern California as a Frontend Developer for a
                company based out of Los Angeles. I created this blog to share
                solutions to challenges I've came across in my career and to
                share information about topics that have little pre-exisiting
                documentation. I hope you can find it of use! <br />
                <br /> Before I fell in love with the world of programming I
                spent many years working as a live sound engineer and touring
                with bands. I am also a musician who plays a few bands out here
                in California and a father to an amazing deaf child. When I'm
                not building websites I spend the little free time I have
                practicing American Sign Language, playing gigs with my band and
                enjoying the wilderness of beautiful Northern California with my
                two dogs. <br /> <br />
                Thanks for visiting JavaScript Coding Tips and stay tuned for
                new content weekly! Please don't hesitate to reach out or
                connect with me on any of my social media links. <br /> I love
                making new connections and am always open to new opportunities!
                <br /> <br />
                Cheers!
              </Text>
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

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

export default About;
