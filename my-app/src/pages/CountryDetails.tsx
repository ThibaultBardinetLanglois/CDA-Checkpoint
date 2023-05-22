import { useParams } from "react-router-dom";
import { GetCountryByCode } from "../api/queries";

const CountryDetails = () => {
  const { code } = useParams();
  const { countryByCode } = GetCountryByCode(code);
 

  return (
    <div>
      <h2>Country Details</h2>
      {countryByCode?.country ? (
        <>
          <div>
            <span>Name:</span>
            <span> {countryByCode?.country.name} </span>
          </div>
          <div>
            <span>Capital:</span>
            <span> {countryByCode?.country.capital} </span>
          </div>
          <div>
            <span>Continent:</span>
            <span> {countryByCode?.country.continent.name} </span>
          </div>
          <div>
            <span>Currency:</span>
            <span> {countryByCode?.country.currency} </span>
          </div>

          <div>
            <span>Languages:</span>
            {countryByCode?.country.languages.map((language: any, i: number) => (
              <span key={i}> {language.name} </span>
            ))}
          </div>
        </>
      ) : (
        <p>Le pays n'a pas été chargé</p>
      )}
      
    </div>
  )
}

export default CountryDetails
