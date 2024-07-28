import { useQuery, gql } from '@apollo/client';
import { Location } from '../types/api';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <div >
      {data.locations.map(({ id, name, description, photo }: Location) => (
        <div key={id}>
          <h2 className='text-center text-lg md:text-left md:text-xl md:pl-11 pb-4 font-bold'>{name}</h2>
          <div className='flex flex-col items-center justify-center '>  
             <img className='max-w-[80%] md:max-w-[60%] h-auto' alt='location-reference' src={photo} />          
          </div>
          <br />
          <div className='px-11 text-justify text-sm md:text-lg'>
             <b>About this location:</b>
             <p>{description}</p>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
