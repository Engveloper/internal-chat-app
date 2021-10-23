import {Grid, Box, Heading} from '@chakra-ui/react'

export default function Jobs() {
  return (
    <div>
      <h1>Do you wanna be part of the team</h1>
      <h2>Apply Now, We are hiring ;)</h2>

      <Grid templateColums="repeat(auto-fill, minmax(250px, 1fr))">
        <Box>
          <Heading>How apply</Heading>
          <Box>
            <div>Write us an email to jobs@getnerdify.com or a list of cool projects you have worked in and lets schedule a meeting</div>
          </Box>
        </Box>
        <Box>
          <Heading>Are you familiar with any of these technologies</Heading>
          <Box>
            <ul>
              <li>Laravel</li>
              <li>React</li>
              <li>Vue</li>
              <li>Docker</li>
            </ul>
          </Box>
        </Box>
      </Grid>
    </div>
  )
}