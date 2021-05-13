import { Flex, Button, Stack } from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Input from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//tipagens
interface SigninData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail Inválido"),
  password: yup.string().required("Senha obrigatório"),
});

export default function Home() {
  //hooks para manipulação do formulario
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const history = useHistory();

  const { errors } = formState;
  console.log(errors);

  //função para recuperar os dados do form
  const handleSignin: SubmitHandler<SigninData> = useCallback(
    async (values, event) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(values);
      window.location.href = "/dashboard";
    },
    []
  );

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        //submit dos dados
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-Mail"
            type="email"
            error={errors.email}
            //Referencia dos dados passando por props para input
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
