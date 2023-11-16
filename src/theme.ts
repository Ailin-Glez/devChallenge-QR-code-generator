import { extendTheme } from "@chakra-ui/react"
import bgImage from './assets/bg-illustration.svg'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#111729',
                color: '#f2f5f9',
                fontFamily: ['Monserrat', 'Outfit'],
                fontWeight: '400',
                backgroundImage: bgImage,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '790px 35px'
            }
        }
    },
    colors: {
        brand: {
            gray: '#364153',
            blue: '#3662E3',
            darkBlue: '#4e80ee33',
            dark: '#080c18',
            black: '#000000'
        }
    }
})