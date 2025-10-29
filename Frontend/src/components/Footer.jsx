import React from 'react';

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-400 py-6 mt-16">
        <p className="text-center text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            Kaveri Bhimappa Jarali
          </span>{" "}
          | All Rights Reserved
        </p>
      </footer>
  );
}
