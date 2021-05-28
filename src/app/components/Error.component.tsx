import { AxiosError } from 'axios';
import React from 'react';
import styled from "styled-components";

const ErrorStyled = styled.div`
  border: 1px solid red;
`

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
    Houve um erro.
  </ErrorStyled>

}

