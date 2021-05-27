import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
<<<<<<< HEAD
=======
import { makeServer } from "../services/mirage";
import { ReactQueryDevtools } from "react-query/devtools";
>>>>>>> 76e275f674214e86fc602fa9fc810f580dc2e8a3

if (process.env.NODE_ENV === "development") {
  makeServer();
}
<<<<<<< HEAD
=======
const queryClient = new QueryClient();

>>>>>>> 76e275f674214e86fc602fa9fc810f580dc2e8a3
function MyApp({ Component, pageProps }: AppProps) {
  return (
    //Passando dados gloabis
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
