import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common';

/**
 * A 404 Not Found page for handling invalid routes.
 */
export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-6xl font-extrabold text-primary">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-white">Page Not Found</h2>
            <p className="mt-2 text-lg text-gray-400">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="mt-8">
                <Button>Go Back Home</Button>
            </Link>
        </div>
    );
};