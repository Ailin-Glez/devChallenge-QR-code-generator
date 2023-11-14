import { VStack, Image, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import qrLogo from './assets/logo-qr-generator.svg'

function App() {

  return (
    <VStack marginTop='15%'>
      <Image src={qrLogo} marginBottom={5} />
      <InputGroup width='40rem' boxSizing='border-box'>
        <Input 
          p='1.6rem' 
          placeholder='Enter an url' 
          variant='filled' 
          borderColor='brand.blue' 
          backgroundColor='brand.dark'
          borderRadius={10} 
          _focus={{ bg: 'brand.black' }}
          _hover={{ bg: 'brand.black', cursor: 'pointer' }}
        />
        <InputRightElement w='5.5rem' marginY='0.4rem' marginRight='1.7rem'>
          <Button 
            fontSize='0.8rem' 
            bg='brand.blue' 
            transition='all ease 0.5s'
            _hover={{ bg: 'cyan.400', color: 'brand.dark', fontSize: '0.9rem' }} 
            size='md' px='4rem'
          >
            QR code
          </Button>
        </InputRightElement>
      </InputGroup>
    </VStack>
  )
}

export default App
