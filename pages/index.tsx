import type {NextPage} from 'next'
import React, {useState} from 'react'
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import {
  Formik,
  Form,
  Field,
  FieldAttributes,
  FieldMetaProps,
  FieldInputProps,
  FormikProps,
} from 'formik'
import {PhoneIcon, AddIcon, WarningIcon} from '@chakra-ui/icons'

import Hero from '../components/hero'

interface FieldProps<V = any> {
  field: FieldInputProps<V>
  form: FormikProps<V>
  meta: FieldMetaProps<V>
}

const Home: NextPage = () => {
  const [messages, setMessages] = useState<string[]>([])

  function sendMessage({message}: {message: string}) {
    setMessages([...messages, message])
  }

  return (
    <Box p={10}>
      <Box boxShadow={`xl`} rounded="md" bg={`gray.100`}>
        <Flex>
          <Box w={`30%`} p={6}>
            <Stack>
              <InputGroup>
                <Input bg={`white`} type="text" placeholder="Search" />
              </InputGroup>
            </Stack>

            <Box boxShadow={`sm`} minH={200} bg={`white`} mt={5}></Box>
            <Box boxShadow={`sm`} minH={200} bg={`white`} mt={5}></Box>
          </Box>

          <Box flex={1} p={6}>
            <Stack direction="row" spacing={4}>
              <Button
                leftIcon={<PhoneIcon />}
                colorScheme="pink"
                variant="solid"
              >
                Settings
              </Button>
              <Button
                rightIcon={<WarningIcon />}
                colorScheme="blue"
                variant="outline"
              >
                Call us
              </Button>
            </Stack>

            <Box boxShadow={`sm`} minH={430} bg={`white`} mt={5}>
              {messages.map((msg, key) => (
                <Text key={`msg_${key}`}>{msg}</Text>
              ))}
            </Box>

            <Formik
              initialValues={{chatInput: ''}}
              onSubmit={(values) => {
                sendMessage({message: values.chatInput})
              }}
            >
              <Form>
                <HStack marginTop={2} spacing="4px">
                  <Field name="chatInput">
                    {({field}: FieldProps) => (
                      <Input
                        placeholder="Hi there!"
                        backgroundColor="white"
                        {...field}
                      />
                    )}
                  </Field>
                  <Button backgroundColor="white" type="submit">
                    Send
                  </Button>
                </HStack>
              </Form>
            </Formik>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Hero />
      </Box>
    </Box>
  )
}

export default Home
