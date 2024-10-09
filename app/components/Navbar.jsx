"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold hidden md:block">
          Job Finder App
        </Link>
        <div className="space-x-4">
          <Link href="/jobs/create" className="text-gray-300 hover:text-white">
            Create Job Posting
          </Link>
        </div>
      </div>
    </nav>
  );
}
