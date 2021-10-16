import {Input, VStack, Button} from '@chakra-ui/react'


export default function ContactUs() {
  return (

    <div>
      <h1>Contact Us</h1>

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
