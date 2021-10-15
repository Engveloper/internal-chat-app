import type {NextPage} from 'next'
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  Stack,
} from '@chakra-ui/react'
import {PhoneIcon, AddIcon, WarningIcon} from '@chakra-ui/icons'


import Hero from '../components/hero'

const Home: NextPage = () => {
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

            <Box boxShadow={`sm`} minH={430} bg={`white`} mt={5}></Box>
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
