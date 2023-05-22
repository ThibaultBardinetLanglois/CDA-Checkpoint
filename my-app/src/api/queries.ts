import { gql, useQuery } from "@apollo/client";

/************************************************ */
// QUERIES
/************************************************ */

const GET_ALL_CONTINENTS = gql`
  query {
    continents {
      name
      code
    }
  }
`;

const GET_CONTINENT_BY_CODE = gql`
  query ($code: ID!) {
    continent(code: $code) {
      countries {
        name
        capital
        currency
        code
        languages {
          native
          name
        }
        emoji
        emojiU
      }
    }
  }
`;

const GET_COUNTRY_BY_CODE = gql`
  query ($code: ID!) {
    country (code: $code) {
      name
      code
      native
      phone
      continent {name}
      capital
      currency
      languages {name, native}
      emoji
      emojiU
    }
  }
`;


/************************************************ */
// SERVICES
/************************************************ */

export const GetAllContinents = () => {
  const { data: allContinents, error: continentsError, loading: continentsLoading } = useQuery(GET_ALL_CONTINENTS);
  return { 
    allContinents, 
    continentsError, 
    continentsLoading 
  };
}

export const GetContinentByCode = (code: string | undefined) => {
  const { data: continentByCode, error: continentByCodeError, loading: continentByCodeLoading } = useQuery(GET_CONTINENT_BY_CODE, {
    variables: {
      code: code
    }
  });
  return { 
    continentByCode, 
    continentByCodeError, 
    continentByCodeLoading 
  };
}

export const GetCountryByCode = (code: string | undefined) => {
  const { data: countryByCode, error: countryByCodeError, loading: countryByCodeLoading } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: {
      code
    }
  });
  return { 
    countryByCode, 
    countryByCodeError, 
    countryByCodeLoading 
  };
}