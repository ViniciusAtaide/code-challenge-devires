import { AxiosError } from 'axios';
import React from 'react';
import { ErrorStyled } from './Error.styled';

interface ErrorProps {
  error: AxiosError
}

export function ErrorComponent(props: ErrorProps) {
  switch (props.error.code) {
    case "ECONNABORTED":
      return <ErrorStyled>
        O serviço está offline
        </ErrorStyled>
  }

  return <ErrorStyled>
    Houve um erro na conexão.
  </ErrorStyled>

}

