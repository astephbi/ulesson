import {
  Center,
  Box,
  Text,
  Heading,
  VStack,
  Image,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import logoApple from '../assets/apple.png';
import logoGoogle from '../assets/google.png';
import childSmiling from '../assets/download-image.webp';

const HeroSection2 = () => {
  return (
    <Box p={170}>
      <Center
        bg="primary"
        fontSize={30}
        px={200}
        pt={50}
        borderRadius={40}
      >
        <VStack>
          <Heading
            textAlign="center"
            fontWeight={600}
            borderRadius="50"
          >
            Download the learning app for better school grades
          </Heading>
          <Text fontSize={16}>
            Learn Easily. Pass Exams in One Sitting.
          </Text>
          <HStack>
            <Image src={logoApple} alt="logo apple" height={50} />
            <Image src={logoGoogle} alt="logo google" height={50} />
          </HStack>
          <Image src={childSmiling} />
        </VStack>
      </Center>
    </Box>
  );
};

export default HeroSection2;
