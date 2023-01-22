import React from 'react';
import logo from '../assets/logo.svg';
import { PhoneIcon } from '@chakra-ui/icons';
import {
  Image,
  Divider,
  Link,
  Box,
  Spacer,
  Flex,
  Button,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        py="25px"
        px="150px"
      >
        <Box p="2">
          <Image src={logo} alt="img-log" height="25px" />
        </Box>
        <Spacer />
        <Flex
          alignItems="center"
          justifyContent="space-between"
          gap="10"
        >
          <Link
            fontSize="md"
            fontWeight="bold"
            color="primary"
            fontFamily="body"
          >
            Buy Education
          </Link>
          <Link
            fontSize="md"
            fontWeight="bold"
            color="primary"
            fontFamily="body"
          >
            Buy Subscription
          </Link>
          <Link
            fontSize="md"
            fontWeight="bold"
            color="primary"
            fontFamily="body"
          >
            <PhoneIcon fontWeight="bold" /> 234-7000 222 333
          </Link>
          <Button
            colorScheme="primary"
            variant="outline"
            borderRadius="20px"
          >
            Sign In / Sign Up
          </Button>
        </Flex>

        {/*       <Icon
        as={colorMode === 'light' ? MoonIcon : SunIcon}
        alignSelf="center"
        size="md"
        height="28px"
        width="30px"
        onClick={() => toggleColorMode()}
      /> */}
      </Flex>
      <Divider mt="25px" />
    </Box>
  );
};

export default Navbar;
