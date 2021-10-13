import {SimpleGrid, Box, Center, Wrap, WrapItem} from '@chakra-ui/react'
import {Logo} from './logo'

export default function Nav() {
  return (
    <SimpleGrid columns={2} spacing={2}>
      <Box w="100%" p={4}>
        <Logo w="32" />
      </Box>

      <Box w="100%" p={4}>
        <Wrap>
          <WrapItem>
            <Center w="100px" h="40px" bg="gray.200">
              Item 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="100px" h="40px" bg="gray.200">
              Item 2
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="100px" h="40px" bg="gray.200">
              Item 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="100px" h="40px" bg="gray.200">
              Item 4
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </SimpleGrid>
  )
}
