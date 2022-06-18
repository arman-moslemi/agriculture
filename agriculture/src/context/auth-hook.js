// import { useState, useCallback, useEffect } from "react";

// let logoutTimer;

// export const useAuth = () => {
//   const [token, setToken] = useState(null);
//  // const [userType, setUserType] = useState(null);
//   // const [tokenExpirationDate, setTokenExpirationDate] = useState();

//   const login = useCallback((token) => {
//     setToken(token);
//     // setUserType(uType);
//     // console.log("userType", token, uType);
//     // const tokenExpirationDate =
//     //   expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
//     // setTokenExpirationDate(tokenExpirationDate);
//     localStorage.setItem(
//       "userData",
//       JSON.stringify({
//         token,
//         // expiration: tokenExpirationDate.toISOString(),
//       })
//     );
//   }, []);

//   const logout = useCallback(() => {
//     setToken(null);
//     // setUserType(null);
//     // setTokenExpirationDate(null);
//     localStorage.removeItem("userData");
//   }, []);

//   // useEffect(() => {
//   //   if (token && tokenExpirationDate) {
//   //     const remainingTime =
//   //       tokenExpirationDate.getTime() - new Date().getTime();
//   //     logoutTimer = setTimeout(logout, remainingTime);
//   //   } else {
//   //     clearTimeout(logoutTimer);
//   //   }
//   // }, [token, logout, tokenExpirationDate]);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("userData"));
//     if (
//       storedData &&
//       storedData?.token
//       // &&
//       // new Date(storedData?.expiration) > new Date()
//     ) {
//       login(
//         storedData.token
//         // new Date(storedData.expiration)
//       );
//     }
//   }, [login]);

//   return { token, login, logout };
// };
