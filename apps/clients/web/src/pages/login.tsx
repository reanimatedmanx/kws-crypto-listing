import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  LinkBox,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

export function Login() {
  const a = 0;
  return (
    <Center h="100vh">
      <Box shadow={4} bgColor="#fff" minWidth={980} borderRadius="10px">
        <Stack direction="row">
          <Box
            bgGradient="linear(to-tl, #6c13ff, #5800FF)"
            p={5}
            h="760px"
            w="50%"
            borderStartRadius="10px"
          >
            <Stack direction="column">
              <Heading
                as="h3"
                color="white"
                fontWeight={600}
                fontSize={18}
                textShadow="2px 0px 10px #6c13ff"
              >
                Logo
              </Heading>
              <Center>
                <Box marginTop="250px">
                  <Heading
                    as="h1"
                    color="white"
                    fontWeight={400}
                    fontSize={56}
                    textShadow="2px 0px 6px #6c13ff"
                    textAlign="center"
                  >
                    Hi!
                  </Heading>
                  <Text
                    as="h1"
                    color="whiteAlpha.900"
                    fontWeight={500}
                    fontSize={18}
                    textShadow="2px 0px 6px #6c13ff"
                    textAlign="center"
                  >
                    This is restricted access area, login or register an account
                    to get in.
                  </Text>
                </Box>
              </Center>
            </Stack>
          </Box>
          <Box p={5} w="50%">
            <Stack direction="column">
              <Heading
                as="h3"
                color="black"
                fontWeight={500}
                fontSize={28}
                mt={8}
                textAlign="center"
              >
                Welcome!
              </Heading>
              <Center>
                <Box marginTop="150px" w="100%" p={6}>
                  <FormControl isInvalid={false}>
                    <Stack>
                      <Box>
                        <FormLabel fontWeight={600}>Email</FormLabel>
                        <Input
                          type="email"
                          variant="filled"
                          bgColor="blackAlpha.100"
                          value={''}
                          onChange={() => {}}
                        />
                        {a ? (
                          <FormHelperText>
                            Enter the email you&apos;d like to receive the
                            newsletter on.
                          </FormHelperText>
                        ) : (
                          <FormErrorMessage>
                            Email is required.
                          </FormErrorMessage>
                        )}
                      </Box>
                      <Box>
                        <FormLabel fontWeight={600}>Password</FormLabel>
                        <Input
                          type="password"
                          variant="filled"
                          bgColor="blackAlpha.100"
                          value={''}
                          onChange={() => {}}
                        />
                        {a ? (
                          <FormHelperText>
                            Enter the email you&apos;d like to receive the
                            newsletter on.
                          </FormHelperText>
                        ) : (
                          <FormErrorMessage>
                            Email is required.
                          </FormErrorMessage>
                        )}
                        <Stack alignItems="flex-end" m={4} mr={0}>
                          <Box>
                            <Button
                              size="md"
                              color="whiteAlpha.900"
                              bgColor="#5800FF"
                              _hover={{
                                backgroundColor: '#6c13ff',
                              }}
                              _active={{
                                backgroundColor: '#6c13ff',
                              }}
                            >
                              Login
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                    <Stack direction="column" mt={24}>
                      <Box mt={12}>
                        <Text
                          as="h3"
                          color="black"
                          fontWeight={500}
                          fontSize={15}
                        >
                          Pssst, hey you! Need an account?
                        </Text>
                        <LinkBox color="black" fontWeight={600} fontSize={15}>
                          <Link href="#">Register 👏</Link>
                        </LinkBox>
                      </Box>
                    </Stack>
                  </FormControl>
                </Box>
              </Center>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}

export default Login;
