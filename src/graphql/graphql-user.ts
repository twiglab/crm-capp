// graphql-user.ts

import gql from 'graphql-tag'

export const refreshToken = gql`
  mutation refreshToken($token: JWT!) {
    refreshToken(token: $token) {
      accessToken
      refreshToken
    }
  }
`

export const Login = gql`
  query Login($input: JsCodeReq!) {
    Login(input: $input) {
      code
      jwt
    }
  }
`

// 更多...
