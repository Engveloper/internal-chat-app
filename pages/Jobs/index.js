import {Grid, Box, Heading} from '@chakra-ui/react'

export default function Jobs() {
  return (
    <div>
      <h1>Jobs</h1>
      <h2>Do you want work with us?</h2>

      <Grid templateColums="repeat(auto-fill, minmax(250px, 1fr))">
        <Box>
          <Heading>How apply</Heading>
          <Box></Box>
        </Box>
        <Box>
          <Heading>Technology</Heading>
          <Box></Box>
        </Box>
      </Grid>
    </div>
  )
}
