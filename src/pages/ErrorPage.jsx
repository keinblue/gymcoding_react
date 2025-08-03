import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {error && <p>Error: {error.statusText || error.message}</p>}
    </div>
  );
}
export default ErrorPage;
