import gql from 'graphql-tag';

export const getCategories = gql`
        query getCategories {
          categories { id name products { id name price } } }
      `
;
