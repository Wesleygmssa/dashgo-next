import {
  FormControl,
  FormLabel,
  Input as ChackaInput,
  InputProps as ChackraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

import React, { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

//recebendo as {props} do input e a {ref}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackaInput
        name={name}
        id={name}
        outline={0}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
        ref={ref}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
