import { Image, Button, HStack, VStack, Box, useToast } from '@chakra-ui/react'
import { DownloadIcon, LinkIcon } from '@chakra-ui/icons';
import FileSaver from 'file-saver';
import qrLogo from './assets/logo-qr-generator.svg'

interface Props {
    imageSrc: string;
    onGetQR: (show: boolean) => void;
}

const stylesButton = {
    bg: 'brand.blue',
    borderRadius: '10px', 
    size: 'md',
    width: '13rem',
    py: '1.6rem',
    _hover: { bg: 'cyan.400', color: 'brand.dark', fontSize: '1.1rem' },
    transition: 'all ease 0.5s'
}

function QRCode({ imageSrc, onGetQR }: Props) {
    const toast = useToast()
    const handleDownload = () => {
        FileSaver.saveAs(imageSrc, 'qr-code.jpg')
    }

    const handleShare = () => {
        navigator.clipboard.writeText(imageSrc)
        toast({ 
            title: 'QR link copied!', 
            description: 'You can paste & share the QR image link anywhere',  
            position: 'top-right',
            isClosable: true 
        })
    }

    return (
        <>
            <Image src={qrLogo} width='7rem' m='2rem 3rem' _hover={{ cursor: 'pointer' }} onClick={() => onGetQR(false)} />
            <VStack marginTop='6rem' spacing='4rem'>
                <Image position='absolute' zIndex='1' top='150px' p={5} src={imageSrc} />
                <Box position='absolute' w='200px' h='200px' bg='white' top='150px' borderRadius='1rem' />
                <Box w='250px' h='250px' bg='brand.darkBlue' borderRadius='50%' />
                <HStack spacing={8} justifyContent='center'>
                    <Button {...stylesButton} onClick={handleDownload}>Download <DownloadIcon marginLeft={3} /> </Button>
                    <Button {...stylesButton} onClick={handleShare}>Share <LinkIcon marginLeft={3} /> </Button>
                </HStack>
            </VStack>
        </>
    );
}

export default QRCode;