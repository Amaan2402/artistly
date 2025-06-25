import Image from "next/image";
import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/404_not_found_gif.gif"
        alt="Not Found"
        width={500}
        height={500}
      />
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">
          The page you are looking for does not exist.
        </p>
        <p className="text-gray-600">
          Please check the URL or return to the homepage.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
