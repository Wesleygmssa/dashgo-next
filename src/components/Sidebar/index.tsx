import { Box, Stack, Link, Icon, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { Navlink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start" fontSize="small">
        <NavSection title="Geral">
          <Navlink icon={RiDashboardLine}>Dashboard</Navlink>
          <Navlink icon={RiContactsLine}>Usuários</Navlink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <Navlink icon={RiInputMethodLine}>Formulários</Navlink>
          <Navlink icon={RiGitMergeLine}>Automação</Navlink>
        </NavSection>
      </Stack>
    </Box>
  );
}
