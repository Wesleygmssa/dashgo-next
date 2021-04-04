import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { Children, createContext, ReactNode, useContext } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type sidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as sidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
