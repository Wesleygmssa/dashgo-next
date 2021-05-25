import { Button, Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void; //pagina mudar
}

const siblingsCount = 1; // disntanciar por página

// 2 a 5
function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)] // Gerando array em branco
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastePage = Math.floor(totalCountOfRegisters / registersPerPage); // arrendondando  divisão pra cima

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastePage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastePage)
        )
      : [];

  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            {" "}
            <PaginationItem number={1} />{" "}
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {/* Paginas anteriores */}
        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <PaginationItem key={page} number={page} />;
          })}

        {/*Pagina atual */}
        <PaginationItem number={currentPage} isCurrent />

        {/* Paginas seguintesS */}
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem key={page} number={page} />;
          })}
        {currentPage + siblingsCount < lastePage && (
          <>
            {currentPage + 1 + siblingsCount < lastePage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastePage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
