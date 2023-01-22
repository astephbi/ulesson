import React from 'react';
import {
  Image,
  Box,
  Text,
  Heading,
  Flex,
  ButtonGroup,
  Center,
  Button,
  Spacer,
} from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box mx={40}>
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

          <Text color="primary" mt="10px">
            A personal learning tablet for children in primary and
            secondary school to learn anywhere, anytime, and excel
            academically.
          </Text>
          <ButtonGroup mt={5}>
            <Button
              bgColor="primary"
              size="lg"
              color="white"
              rounded={30}
              _hover="none"
            >
              Buy via WhatsApp
            </Button>
            <Button
              bgColor="white"
              size="lg"
              color="primary"
              rounded={30}
              variant="outline"
              _hover="none"
            >
              Buy Online
            </Button>
          </ButtonGroup>
        </Box>
        <Spacer />
        <Box>
          <Image
            height="500px"
            src="https://ulesson.com/images/webp/top-section.webp"
          />
        </Box>
      </Center>
    </Box>
  );
};

export default HeroSection;
