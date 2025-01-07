import gql from 'graphql-tag'

export const loginGQL = gql`
  query Login($input: JsCodeReq!) {
    Login(input: $input) {
      code
      jwt
      level
      status
    }
  }
`
export const loginAndAutoSignUpGQL = gql`
  mutation loginAndAutoSignUp($data: LoginAndAutoSignUpInput!) {
    loginAndAutoSignUp(data: $data) {
      accessToken
      refreshToken
      user {
        id
        openId
        createdAt
        avatarUrl
        nickName
        gender
        province
        birthday
      }
    }
  }
`
