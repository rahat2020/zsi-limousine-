"use client";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

const NotFound = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="container flex max-w-md flex-col items-center justify-center gap-4 text-center">
          <h1 className="bg-gradient-to-r from-[#CD8B11] to-[#E6A93B] bg-clip-text text-9xl font-bold text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight">
            Page not found
          </h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <button className="gap-2 bg-black px-4 py-2 text-white  hover:bg-black/90">
              <Link href="/" className="gap-2 flex justify-center items-center">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
