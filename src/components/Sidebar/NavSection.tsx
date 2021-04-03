import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { Children, ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSctionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSctionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
