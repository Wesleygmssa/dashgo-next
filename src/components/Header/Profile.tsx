import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wesley Guerra</Text>
          <Text color="grat.300" fontSize="small">
            wesleyguerra9@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Wesley Guerra"
        src="https://github.com/Wesleygmssa"
      />
    </Flex>
  );
}
