import { useEffect, useState, useCallback } from 'react';
import { Link, useRoutes } from 'react-router-dom';

export function HomePage(): JSX.Element {

    const router = useRoutes([], '');

    return (
      <div>
        <p>Test HomePage works!!!</p>
        <hr />
        {router}
      </div>
    );
}
