import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Container, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MedicationIcon from '@mui/icons-material/Medication';
import { useNavigate } from 'react-router-dom';

import img1 from "./imgs/하이레보정.png";
import img2 from "./imgs/경방.png";
import img3 from "./imgs/하트반정.png";
import img4 from "./imgs/모아펜.png";
import img5 from "./imgs/글라비스정.png";
import img6 from "./imgs/라푸니정.png";
import img7 from "./imgs/코자미연질캡슐.png";

const Pharmacy = () => {
  const navigate = useNavigate();

  const goToInformationPage = (medicineNumber) => {
    navigate(`Medicine${medicineNumber}`);
  };
  
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box width={"98mm"} height={"218mm"} border='1px solid grey' 
    justifyContent={"flex-start"} alignItems={"flex-start"} display={"flex"} 
    flexDirection={"column"}>
      <AppBar position='relative'>
        <Container sx={{display: "flex", flexDirection: "row", bgcolor: "white", padding: 1}}>
        <Box sx={{display: 'flex', flex: 1}}>
          <ArrowBackIosNewIcon sx={{display: "flex", color: "#0168CF"}}/>
          </Box>
          <Box sx={{display: 'flex', justifyContent:'center', flex: 1}}>
            <Typography sx={{color: "black", fontWeight:"bold"}}>성장</Typography>
          </Box>
          <Box sx={{ flex: 1}}>
          </Box>
        </Container>
      </AppBar>

      <Box width={'100%'} display="flex" flexDirection="column" alignItems="center">
      
       <List sx={{ width: '95%', bgcolor: 'background.paper', marginTop: 3, justifyContent:"center", alignItems:"center", display:'flex',
      borderTop: '3px solid lightgrey', borderBottom: '3px solid lightgrey', }}>
       <ListItem>
         <Stack width={"100%"} direction={'row'} spacing={2}>
           <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flex={1.5} height={50} bgcolor={"lightgrey"}>
            <img src={img1} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Image1"/>
           </Box>
        
         <Box display={"flex"} flex={3} flexDirection={"column"}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
            <Box bgcolor={"#0168CF"} borderRadius={3} pt={0.1} pb={0.1} pr={0.7} pl={0.7} mr={1}>
              <Typography color={"white"} sx={{ whiteSpace: 'nowrap' }}> 일반 </Typography>
            </Box>
            <Typography
              fontWeight={"bold"}
              onClick={() => goToInformationPage(1)}
              sx={{ cursor: 'pointer' }} 
            >
              하이레보정
            </Typography>
          </Box>
          <Typography fontSize={13} mt={0.8}>다신제약</Typography>
         </Box>

         <Box display={"flex"} flex={0.6} justifyContent={"center"} alignItems={"center"} >
          <AddCircleIcon sx={{color:'#0168CF', fontSize: '30px'}} />
          </Box>
         </Stack>
       </ListItem>
     </List>

     <List sx={{ width: '95%', bgcolor: 'background.paper', 
      borderBottom: '3px solid lightgrey', }}>
       <ListItem>
         <Stack width={"100%"} direction={'row'} spacing={2}>
           <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flex={1.5} height={50} bgcolor={"lightgrey"}>
           <img src={img2} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Image1"/>           
           </Box>
         <Box display={"flex"} flex={3} flexDirection={"column"}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
            <Box bgcolor={"#0168CF"} borderRadius={3} pt={0.1} pb={0.1} pr={0.7} pl={0.7} mr={1}>
              <Typography color={"white"} sx={{ whiteSpace: 'nowrap' }}> 일반 </Typography>
            </Box>
            <Typography
              fontWeight={"bold"}
              onClick={() => goToInformationPage(2)}
              sx={{ cursor: 'pointer' }} 
            >
              경방시프로폴록사신염산엽수화물정
            </Typography>
          </Box>
          <Typography fontSize={13} mt={0.8}>경방신약</Typography>
         </Box>

         <Box display={"flex"} flex={0.6} justifyContent={"center"} alignItems={"center"} >
          <AddCircleIcon sx={{color:'#0168CF', fontSize: '30px'}} />
          </Box>
         </Stack>
       </ListItem>
     </List>

     <List sx={{ width: '95%', bgcolor: 'background.paper', 
      borderBottom: '3px solid lightgrey', }}>
       <ListItem>
         <Stack width={"100%"} direction={'row'} spacing={2}>
           <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flex={1.5} height={50} bgcolor={"lightgrey"}>
           <img src={img3} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Image1"/>           
           </Box>
      
         <Box display={"flex"} flex={3} flexDirection={"column"}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
            <Box bgcolor={"#0168CF"} borderRadius={3} pt={0.1} pb={0.1} pr={0.7} pl={0.7} mr={1}>
              <Typography color={"white"} sx={{ whiteSpace: 'nowrap' }}> 일반 </Typography>
            </Box>
            <Typography
              fontWeight={"bold"}
              onClick={() => goToInformationPage(3)}
              sx={{ cursor: 'pointer' }} 
            >
              하트반정
            </Typography>
          </Box>
          <Typography fontSize={13} mt={0.8}>라이트팜텍</Typography>
         </Box>

         <Box display={"flex"} flex={0.6} justifyContent={"center"} alignItems={"center"} >
          <AddCircleIcon sx={{color:'#0168CF', fontSize: '30px'}} />
          </Box>
         </Stack>
       </ListItem>
     </List>

     <List sx={{ width: '95%', bgcolor: 'background.paper', 
      borderBottom: '3px solid lightgrey', }}>
       <ListItem>
         <Stack width={"100%"} direction={'row'} spacing={2}>
           <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flex={1.5} height={50} bgcolor={"lightgrey"}>
           <img src={img4} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Image1"/>           
           </Box>
      
         <Box display={"flex"} flex={3} flexDirection={"column"}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
            <Box bgcolor={"#0168CF"} borderRadius={3} pt={0.1} pb={0.1} pr={0.7} pl={0.7} mr={1}>
              <Typography color={"white"} sx={{ whiteSpace: 'nowrap' }}> 일반 </Typography>
            </Box>
            <Typography
              fontWeight={"bold"}
              onClick={() => goToInformationPage(4)}
              sx={{ cursor: 'pointer' }} 
            >
              모아펜소프트연질캡슐
            </Typography>
          </Box>
          <Typography fontSize={13} mt={0.8}>코스맥스파마</Typography>
         </Box>

         <Box display={"flex"} flex={0.6} justifyContent={"center"} alignItems={"center"} >
          <AddCircleIcon sx={{color:'#0168CF', fontSize: '30px'}} />
          </Box>
         </Stack>
       </ListItem>
     </List>

     <List sx={{ width: '95%', bgcolor: 'background.paper', 
      borderBottom: '3px solid lightgrey', }}>
       <ListItem>
         <Stack width={"100%"} direction={'row'} spacing={2}>
           <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flex={1.5} height={50} bgcolor={"lightgrey"}>
           <img src={img5} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Image1"/>           
           </Box>
      
         <Box display={"flex"} flex={3} flexDirection={"column"}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
            <Box bgcolor={"#0168CF"} borderRadius={3} pt={0.1} pb={0.1} pr={0.7} pl={0.7} mr={1}>
              <Typography color={"white"} sx={{ whiteSpace: 'nowrap' }}> 일반 </Typography>
            </Box>
            <Typography
              fontWeight={"bold"}
              onClick={() => goToInformationPage(5)}
              sx={{ cursor: 'pointer' }} 
            >
              글라비스정
            </Typography>
          </Box>
          <Typography fontSize={13} mt={0.8}>국제약품</Typography>
         </Box>

         <Box display={"flex"} flex={0.6} justifyContent={"center"} alignItems={"center"} >
          <AddCircleIcon sx={{color:'#0168CF', fontSize: '30px'}} />
          </Box>
         </Stack>
       </ListItem>
     </List>

     <List sx={{ width: '95%', bgcolor: 'background.paper', 
      borderBottom: '3px solid lightgrey', }}>
       <ListItem>
         <Stack width={"100%"} direction={'row'} spacing={2}>
           <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flex={1.5} height={50} bgcolor={"lightgrey"}>
           <img src={img6} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Image1"/>           
           </Box>
      
         <Box display={"flex"} flex={3} flexDirection={"column"}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
            <Box bgcolor={"#0168CF"} borderRadius={3} pt={0.1} pb={0.1} pr={0.7} pl={0.7} mr={1}>
              <Typography color={"white"} sx={{ whiteSpace: 'nowrap' }}> 일반 </Typography>
            </Box>
            <Typography
              fontWeight={"bold"}
              onClick={() => goToInformationPage(6)}
              sx={{ cursor: 'pointer' }} 
            >
              라푸니정
            </Typography>
          </Box>
          <Typography fontSize={13} mt={0.8}>더유제약</Typography>
         </Box>

         <Box display={"flex"} flex={0.6} justifyContent={"center"} alignItems={"center"} >
          <AddCircleIcon sx={{color:'#0168CF', fontSize: '30px'}} />
          </Box>
         </Stack>
       </ListItem>
     </List>
     <List sx={{ width: '95%', bgcolor: 'background.paper', 
      borderBottom: '3px solid lightgrey', }}>
       <ListItem>
         <Stack width={"100%"} direction={'row'} spacing={2}>
           <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flex={1.5} height={50} bgcolor={"lightgrey"}>
           <img src={img7} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Image1"/>           
           </Box>
      
         <Box display={"flex"} flex={3} flexDirection={"column"}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
            <Box bgcolor={"#0168CF"} borderRadius={3} pt={0.1} pb={0.1} pr={0.7} pl={0.7} mr={1}>
              <Typography color={"white"} sx={{ whiteSpace: 'nowrap' }}> 일반 </Typography>
            </Box>
            <Typography
              fontWeight={"bold"}
              onClick={() => goToInformationPage(7)}
              sx={{ cursor: 'pointer' }} 
            >
              코자미연집캡슐
            </Typography>
          </Box>
          <Typography fontSize={13} mt={0.8}>인트로바이오파마</Typography>
         </Box>

         <Box display={"flex"} flex={0.6} justifyContent={"center"} alignItems={"center"} >
          <AddCircleIcon sx={{color:'#0168CF', fontSize: '30px'}} />
          </Box>
         </Stack>
       </ListItem>
     </List>

     </Box>
     </Box>
    </div>
  )
};

export default Pharmacy;