import { FormEvent, useRef } from 'react';
import { VStack, Image, InputGroup, Input, InputRightElement, Button, useToast } from '@chakra-ui/react'
import qrLogo from './assets/logo-qr-generator.svg'

interface Props {
    onGetQR: (show: boolean) => void;
    onSetEnteredUrl: (url: string) => void;
}

const stylesInput = {
    p: '1.6rem',
    placeholder: 'Enter an url',
    variant: 'filled',
    borderColor: 'brand.blue', 
    backgroundColor: 'brand.dark',
    borderRadius: '0.8rem',
    _focus: { bg: 'brand.black' },
    _hover: { bg: 'brand.black', cursor: 'pointer' }
}

const stylesButton = {
    fontSize: '0.8rem',
    bg: 'brand.blue',
    color: '#f2f5f9',
    transition: 'all ease 0.5s',
    _hover: { bg: 'cyan.400', color: 'brand.dark', fontSize: '0.9rem' },
    size: 'md', 
    px: '4rem'
}

function Home({ onGetQR, onSetEnteredUrl: onSetUrl }: Props) {
    const urlRef = useRef<HTMLInputElement>(null)
    const toast = useToast()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (urlRef.current) {
            if (urlRef.current.value !== '') {
                onGetQR(true)
                onSetUrl(urlRef.current.value)
            } else {
                toast({
                    title: 'The URL field can`t be empty',
                    status: 'error',
                    position: 'top-right'
                })
            }
        }
    }

    return (
        <VStack marginTop='15%' >
          <Image src={qrLogo} marginBottom={5} />
          <form onSubmit={handleSubmit}>
            <InputGroup width='40rem'>
                <Input ref={urlRef} {...stylesInput} />
                <InputRightElement w='5.5rem' marginY='0.4rem' marginRight='1.7rem'>
                <Button { ...stylesButton } onClick={handleSubmit}>
                    QR code
                </Button>
                </InputRightElement>
            </InputGroup>
          </form>
        </VStack>
    );
}

export default Home;