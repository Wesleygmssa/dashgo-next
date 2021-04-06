import {
  FormControl,
  FormLabel,
  Input as ChakraIpnut,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

import {
  forwardRef,
  ForwardRefRenderFunction,
  HtmlHTMLAttributes,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase = ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel html="password">{label}</FormLabel>}

      <ChakraIpnut
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
