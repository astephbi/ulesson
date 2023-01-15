import React from 'react';
import {
  Image,
  Box,
  Text,
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
            Get your child a dedicated
            <span style={{ color: 'secondary' }}> learning tab</span>
          </Heading>
          <Text mt="10px">
            A personal learning tablet for children in primary and
            secondary school to learn anywhere, anytime, and excel
            academically.
          </Text>
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
