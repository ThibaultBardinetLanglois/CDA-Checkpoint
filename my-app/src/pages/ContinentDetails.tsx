import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GetContinentByCode } from "../api/queries";
import FilteredSearch from '../components/FilteredSearch';

const ContinentDetails = () => {
  let { code } = useParams();
  
  const { continentByCode } = GetContinentByCode(code);
  
  // Filtered search
  const [filteredCountries, setFilteredCountries] = useState<any[]>();
  const handleFilteredCountries = (countries: any[]) => {
    setFilteredCountries(countries);
  } 

  useEffect(() => {
    if (continentByCode?.continent?.countries) {
      handleFilteredCountries(continentByCode?.continent?.countries);
    } 
  }, [continentByCode?.continent?.countries]);
   
  return (
    <div>
      <h2>Continent Details</h2>
      <FilteredSearch dataToFilter={continentByCode?.continent?.countries} setItems={handleFilteredCountries}  />
      {filteredCountries && filteredCountries.map((country: any, index: number) => (
        <Link key={index} to={`/country-details/${country.code}`}> {country.name} </Link>
      ))}
    </div>
  )
}

export default ContinentDetails
