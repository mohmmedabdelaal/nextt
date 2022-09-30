import React from 'react';
import Link from 'next/link';

function ErrorPage() {
  return (
    <div>
      <div>
        <h1 className="text-center">404 | Not found</h1>

        <Link href="/">
          <a> Back home</a>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
