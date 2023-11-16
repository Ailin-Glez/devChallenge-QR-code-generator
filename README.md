# React + TypeScript + Chakra UI
The challenge is to create a simple QR quote generator application that requires you to use an external library.

From [Dev Challenges](https://devchallenges.io/)

### User Stories

 - Create a QR code generator app that matches the given design.

 - Use HTML to create the basic structure.

 - Add inputs, buttons,.. according to the design.

 - Use JavaScript to add interactivity.

 - Users should be able to enter a URL.

 - User should be able to see a QR quote after selecting the QR code button.

 - User should be able to download QR quote image by selecting download button.

 - User should be able to copy Quote to the clipboard by selecting Share button.

 - The page should be responsive on different screen sizes.

### Implementation

The App has 2 components with the following functionalities:
1. **Home component** is displayed the first time the user enters in the application
- Receives 2 props to lift to the parent the entered url and to set showQR property to true, in order to display the other component
2. **QRCode component** is displayed once the user clicks on the QR code button or press the Enter key
- Receives 3 props: isLoading (to show a spinner), the imageSrc (to show the QR image) and showQR property, that will be set to false if the user clicks on the logo (to return to the Home page)

#### Custom hook
The useQRImage custom hook was created to get the image url, using the following [API](http://goqr.me/api/doc/create-qr-code/). 
The hook returns the image url as a string and also the isLoading property to show a spinner when the request hasn´t been completed yet

#### Enhancements
- If the user enters no url, a toast is displayed informing the error
- When the user clicks on the Share button, another toast is displayed indicating that the link was copied to the clipboard

