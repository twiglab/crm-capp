import gql from 'graphql-tag'

export const loginGQL = gql`
  query Login($input: JsCodeReq!) {
    Login(input: $input) {
      code
      jwt
    }
  }
`

export const listAsOwnerGQL = gql`
  query listAsOwner($questionnaireId: String!) {
    listAsOwner(questionnaireId: $questionnaireId) {
      friend {
        id
        nickName
        avatarUrl
      }
      visualization
    }
  }
`
