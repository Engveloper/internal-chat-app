import {Grid, Box, Heading} from '@chakra-ui/react'

export default function AboutUs() {
  return (
    <div>
      <h1>Who we are.</h1>
      <h2>We are Nerdify, Based in Managua-Nicaragua, Founded in 2006</h2>

      <Grid templateColums="repeat(auto-fill, minmax(200px, 1fr))">
        <Box>
            <Heading>History</Heading>
            <Box></Box>
        </Box>
        <Box>
            <Heading>Records</Heading>
            <Box></Box>
        </Box>
        <Box>
            <Heading>Information</Heading>
            <Box></Box>
        </Box>
      </Grid>
    </div>
  );
}
