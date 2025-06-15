// src/App.js
import React, { useState } from "react";
import { db, collection, addDoc } from "./firebase";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Alert,
  useTheme,
  useMediaQuery,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import styled, { keyframes } from "styled-components";

// Smooth fade-in animation for "Yes"
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components
const StyledPaper = styled(Paper)`
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const YesMessage = styled.div`
  animation: ${fadeIn} 0.8s ease-in-out;
`;

// font-size: 3rem is big
const YesText = styled.div`
  font-size: 1.1rem;
  color: #4caf50;
  font-weight: bold;
`;

const SubText = styled.div`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  color: #555;
`;

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === "Archana") {
      setAccessGranted(true);
      setError("");

      const istDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });

      try {
        await addDoc(collection(db, "greetingOpens"), {
          openedAtIST: istDate,
        });
      } catch (err) {
        console.error("Error logging time:", err);
      }
    } else {
      setError("Incorrect password");

      const istDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });

      try {
        await addDoc(collection(db, "wrongAttempts"), {
          attemptedPassword: password,
          attemptedAtIST: istDate,
        });
      } catch (err) {
        console.error("Error logging wrong attempt:", err);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        mt={isSmallScreen ? 6 : 10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <StyledPaper elevation={4}>
          {!accessGranted ? (
            <>
              <Typography
                variant={isSmallScreen ? "h6" : "h5"}
                gutterBottom
                fontWeight={600}
              >
                Enter Password
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  helperText="Hint: (teacher first name- 7 letters)"
                  sx={{ mb: 3 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size={isSmallScreen ? "medium" : "large"}
                >
                  Open Card
                </Button>
              </form>
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
            </>
          ) : (
            <YesMessage>
              <YesText>I do miss talking. And not just talking.</YesText>
              <SubText>Aap kaise hain. Hows your finger?</SubText>
              <SubText>Kya aap bhi miss karte hain?</SubText>
            </YesMessage>
          )}
        </StyledPaper>
      </Box>
    </Container>
  );
}

export default App;

///////////////////////////////////////////////////////////////////////
// // Version-2 with music
// import React, { useState, useRef } from "react";
// import { db, collection, addDoc } from "./firebase";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Paper,
//   Alert,
//   useTheme,
//   useMediaQuery,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import styled, { keyframes } from "styled-components";

// // Animation
// const fadeIn = keyframes`
//   from { opacity: 0; transform: scale(0.9); }
//   to { opacity: 1; transform: scale(1); }
// `;

// // Styled Components
// const StyledPaper = styled(Paper)`
//   padding: 2.5rem;
//   border-radius: 16px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
//   text-align: center;
// `;

// const YesMessage = styled.div`
//   animation: ${fadeIn} 0.8s ease-in-out;
// `;

// const YesText = styled.div`
//   font-size: 3rem;
//   color: #4caf50;
//   font-weight: bold;
// `;

// const SubText = styled.div`
//   font-size: 1.1rem;
//   margin-top: 0.5rem;
//   color: #555;
// `;

// function App() {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   const [password, setPassword] = useState("");
//   const [accessGranted, setAccessGranted] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const audioRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const istDate = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//     });

//     if (password === "Archana") {
//       setAccessGranted(true);
//       setError("");

//       audioRef.current?.play();

//       try {
//         await addDoc(collection(db, "greetingOpens"), {
//           openedAtIST: istDate,
//         });
//       } catch (err) {
//         console.error("Error logging time:", err);
//       }
//     } else {
//       setError("Incorrect password");

//       try {
//         await addDoc(collection(db, "wrongAttempts"), {
//           attemptedPassword: password,
//           attemptedAtIST: istDate,
//         });
//       } catch (err) {
//         console.error("Error logging wrong attempt:", err);
//       }
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         mt={isSmallScreen ? 6 : 10}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="70vh"
//       >
//         <StyledPaper elevation={4}>
//           {!accessGranted ? (
//             <>
//               <Typography
//                 variant={isSmallScreen ? "h6" : "h5"}
//                 gutterBottom
//                 fontWeight={600}
//               >
//                 Enter Password
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <TextField
//                   label="Password"
//                   type={showPassword ? "text" : "password"}
//                   fullWidth
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   helperText="Hint: (teacher first name (7-letters))"
//                   sx={{ mb: 3 }}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => setShowPassword(!showPassword)}
//                           edge="end"
//                           aria-label="toggle password visibility"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   size={isSmallScreen ? "medium" : "large"}
//                 >
//                   Open Card
//                 </Button>
//               </form>
//               {error && (
//                 <Alert severity="error" sx={{ mt: 2 }}>
//                   {error}
//                 </Alert>
//               )}
//             </>
//           ) : (
//             // <YesMessage>
//             //   <YesText>Yes</YesText>
//             //   <SubText>Aap kaise hain? Hows your finger?</SubText>
//             // </YesMessage>

//             <YesMessage>
//               <Typography variant="h6" align="left" gutterBottom>
//                 प्रिय,
//               </Typography>
//               <Typography
//                 variant="h5"
//                 align="left"
//                 fontWeight="bold"
//                 sx={{ mb: 4 }}
//               >
//                 Swati
//               </Typography>

//               {/* Intentional empty space for letter body */}
//               <Box
//                 sx={{
//                   border: "1px dashed #aaa",
//                   minHeight: "180px",
//                   px: 3,
//                   py: 3,
//                   mb: 6,
//                   backgroundColor: "#f9f9f9",
//                   borderRadius: "12px",
//                   maxWidth: "800px",
//                   margin: "0 auto",
//                   mb: 4,
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#999",
//                     fontStyle: "italic",
//                     width: "100%",
//                     textAlign: "center",
//                   }}
//                 >
//                   {/* (यहाँ मन की बातों के लिए स्थान छोड़ा गया है...) */}
//                   Aap Kaise hain ?
//                 </Typography>
//               </Box>

//               <Typography variant="h6" align="right" gutterBottom>
//                 सदा तुम्हारा,
//               </Typography>
//               <Typography variant="h5" align="right" fontWeight="bold">
//                 विशाल
//               </Typography>
//             </YesMessage>
//           )}
//         </StyledPaper>
//       </Box>

//       {/* Hidden audio element */}
//       <audio ref={audioRef} src="/media/kora_kagaz.mp3" preload="auto" />
//     </Container>
//   );
// }

// export default App;
