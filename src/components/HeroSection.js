import React from 'react';
import {
  Image,
  Box,
  Heading,
  Flex,
  Center,
  Spacer,
} from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Flex mx={40} justifyContent="space-between">
      <Center>
        <Box width="40%">
          <Heading
            color="primary"
            fontWeight="bold"
            fontSize="60px"
            lineHeight="66px"
          >
            Get your child a dedicated learning tab
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Image
            height="500px"
            src="https://ulesson.com/images/webp/top-section.webp"
          />
        </Box>
      </Center>
    </Flex>
  );
};

export default HeroSection;
