import gql from 'graphql-tag';

export const getCustomers = gql`
        query getCustomers {
            customers {
            id lastname frstname orders { id  }
          }
        }
      `
;
