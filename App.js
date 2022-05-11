import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

import { sessionStorageService } from "./_services/sessionStorage.services";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
// import GlobalFonts from "./assets/fonts/fonts";
import GlobalFonts from "./assets/monserrat-fonts/fonts";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

export default function App() {
  
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    sessionStorageService.currentUser.subscribe((x) => {
      setCurrentUser(x);
    });
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalFonts />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jenssen Dashboard</title>
          <link rel="canonical" href="http://changethis.com" />
        </Helmet>
        <PrivateRoutes />
        <PublicRoutes />
      </QueryClientProvider>
    </>
  );
}
