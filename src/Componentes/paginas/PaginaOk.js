import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';



export default function PaginaOk({msj}) {

  return (
    <div className="container">
      <div className="mx-auto">
      <Alert variant='success'>
        {msj}{' '}
          <Link to="/"> ok </Link>
      </Alert>
      </div>
    </div>
  );
}
