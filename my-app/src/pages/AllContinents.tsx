import { Link } from 'react-router-dom';
import { GetAllContinents } from '../api/queries';

interface IContinent  {
  code: string
  name: string
}

const AllContinents = () => {
  const { allContinents } = GetAllContinents();
  
  return (
    <div>
      {allContinents?.continents && allContinents.continents.map((continent: IContinent, index: number) => {
        return (
          <div key={index} className="continent-block">
            <Link to={`/continent-details/${continent.code}`} > {continent.name} </Link>
          </div>
        ) 
      })}
    </div>
  )
}

export default AllContinents;
