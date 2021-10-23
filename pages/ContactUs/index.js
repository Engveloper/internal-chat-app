import {Input, VStack, Button} from '@chakra-ui/react'


export default function ContactUs() {
  return (

    <div>
      <h1>Contact Us</h1>
      <h2>You can drop us a line at any time (we promise we will back to you in less than 12 hours)</h2>

      <form>
        <VStack>
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Button>Send Message</Button>
        </VStack>
      </form>
    </div>
  );
}
