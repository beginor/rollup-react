import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

export function HomePage(): JSX.Element {

    return (
      <div>
        HomePage works!
        <Link to='/test'>Test</Link>
      </div>
    );
}
