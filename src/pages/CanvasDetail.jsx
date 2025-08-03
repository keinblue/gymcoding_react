import { use } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function CanvasDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams(); // This can be used if you need to access query parameters
  console.log('Search Params:', searchParams.get('keyword')); // Example of logging search params
  const location = useLocation(); // This can be used to access the current location object
  console.log('Current Location:', location); // Example of logging the current location
  return (
    <div>
      <p>Canvas Detail for Canvas ID: {id}</p>
      <p>Search Keyword: {searchParams.get('keyword')}</p>
    </div>
  );
}

export default CanvasDetail;
