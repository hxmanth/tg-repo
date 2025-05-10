
import { Link } from "react-router-dom";
import React from "react";

export default function ServiceCard({
  title,
  description,
  link,
  icon,
}: {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-white card-gradient rounded-2xl shadow-xl p-8 flex flex-col items-start border border-green-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-green-300 hover:bg-gradient-to-br hover:from-white hover:to-green-100 min-h-[270px]">
      {icon ? (
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-green-200">
          {icon}
        </div>
      ) : null}
      <h3 className="text-xl font-bold text-green-700 mb-2">{title}</h3>
      <p className="mb-6 text-gray-700">{description}</p>
      <Link
        to={link}
        className="green-btn text-lg mt-auto transition-all duration-300 hover:scale-105 hover:shadow-md"
        style={{ textDecoration: "none" }}
      >
        Know More
      </Link>
    </div>
  );
}
