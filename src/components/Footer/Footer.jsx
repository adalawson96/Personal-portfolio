// import React from 'react';
// import './Footer.css';
// import { useState } from 'react';
// import {
//     Container,
//     FormControl,
//     FormLabel,
//     Heading,
//     Input,
//     Button,
//     Textarea,
//     FormErrorMessage,
//     Text,
//     useToast,
//   } from '@chakra-ui/react';
// import { sendContactForm } from '../../lib/api';

// const initValues = {name:"", email:"", subject:"", message:""};

// const initState = { values: initValues};

// export default function Footer(){
//     const toast = useToast;
//     const [state, setState] = useState(initState);
//     const [touched, setTouched] = useState({});

//     const{ values, isLoading,error } = state;

//     const onBlur = ({target}) => 
//         setTouched((prev) => ({ ...prev, [target.name]:true }));

//     const handleChange = ({ target }) => 
//         setState((prev) => ({
//             ...prev,
//             values: {
//                 ...prev.values,
//                 [target.name]: target.value,
//             },
//         }));

//     const onsubmit = async () => {
//         setState((prev) => ({
//             ...prev,
//             isLoading:true,
//         }));

//         try {
//             await sendContactForm(values);
//             setTouched({});
//             setState(initState);
//             toast({
//                 title: "Message sent.",
//                 status: "success",
//                 duration: 2000,
//                 position: "top",
//             })
//         } catch (error) {
//             setState((prev) => ({
//                 ...prev,
//                 isLoading: false,
//                 error: error.message,
//             }));
//         }
//     };

//     return(
//         <footer>
//             <div className="footer">
//                 <div className="col-1">
//                     <a className="anchor" id="Contact"></a>
//                     <div className="flexCenter innerWidth">
//                         <span className='primaryText yPaddings'>CONTACT</span>
//                     </div>
//                     <h2> I enjoy building relationships with individuals who want to collaborate. Let's Connect!</h2>
//                     <div className="social-icons">
//                         <a href="https://github.com/adalawson96" target="_blank"><img src="./github.png" alt="github" /></a>
//                         <a href="mailto:adalawson96@gmail.com" target="_blank"><img src="./mail.png" alt="email" /></a>
//                         <a href="https://www.linkedin.com/in/ada-lawson/" target="_blank"><img src="./linkedin.png" alt="linkedin" /></a>
//                         <a href="https://drive.google.com/file/d/1t2nlh3drCRTf-FeRBFCvqT9dRGtUAV2T/view" target="_blank"><img src="./resume.png" alt="resume" /></a>
//                     </div>
//                 </div>
                    
//                 {/* FORM */}
//                 <Container maxW="40rem" mt={12} >
//                     <Heading>Send me a message:</Heading>
//                     {error && (
//                         <Text color="red.300" my={4} fontSize="xl">
//                             {error}
//                         </Text>
//                     )}

//                     <FormControl isRequired isInvalid={touched.name && !values.name} mb={6}>
//                         <FormLabel>NAME</FormLabel>
//                         <Input 
//                             type="text" 
//                             name="name" 
//                             errorBorderColor="red.300"
//                             value={values.name} 
//                             onChange={handleChange}
//                             onBlur={onBlur}
//                         />
//                         <FormErrorMessage>Required</FormErrorMessage>
//                     </FormControl>
                    
//                     <FormControl isRequired isInvalid={touched.email && !values.email} mb={6}>
//                         <FormLabel>EMAIL</FormLabel>
//                         <Input 
//                             type="email" 
//                             name="email" 
//                             errorBorderColor="red.300"
//                             value={values.email} 
//                             onChange={handleChange}
//                             onBlur={onBlur}
//                         />
//                         <FormErrorMessage>Required</FormErrorMessage>
//                     </FormControl>

//                     <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={6}>
//                         <FormLabel>SUBJECT</FormLabel>
//                         <Input 
//                             type="text" 
//                             name="subject" 
//                             errorBorderColor="red.300"
//                             value={values.subject} 
//                             onChange={handleChange}
//                             onBlur={onBlur}
//                         />
//                         <FormErrorMessage>Required</FormErrorMessage>
//                     </FormControl>
                    
//                     <FormControl isRequired isInvalid={touched.message && !values.message}>
//                         <FormLabel>MESSAGE</FormLabel>
//                         <Textarea
//                             type="text" 
//                             name="message" 
//                             rows={5}
//                             value={values.message} 
//                             onChange={handleChange}
//                             onBlur={onBlur}
//                         />
//                         <FormErrorMessage>Required</FormErrorMessage>
//                     </FormControl>
//                 </Container>
//                 <Button
//                     variant="outline"
//                     colorScheme='purple'
//                     isLoading={isLoading}
//                     disabled={!values.name || !values.email || !values.subject || !values.message}
//                     onClick={onsubmit}
//                 >SUBMIT</Button>
//             </div>
//         </footer>
//     );

            