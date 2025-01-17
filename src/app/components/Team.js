"use client"; // Ensure this is at the very top of the file

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle as faSolidUserCircle } from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    id: 1,
    name: 'Nahom Keneni',
    role: 'CEO , Backend Engineer and Blockchain developer ',
    image: '/nahom.jpg',
    linkedin: 'https://linkedin.com/in/Nahom',
    twitter: 'https://twitter.com/Nahom',
    profile: 'https://example.com/Nahom',
  },
  {
    id: 2,
    name: 'Keku kellemwork',
    role: ' Marketing Manager and Video Editor',
    image: '/keku.jpg',
    linkedin: 'https://linkedin.com/in/birukf',
    twitter: 'https://twitter.com/birukf',
    profile: 'https://example.com/birukf',
  },
  {
    id: 3,
    name: 'Biruk Getachew',
    role: 'Mern stack with Ai',
    image: '/156351009.jpg',
    linkedin: 'https://linkedin.com/in/Kaleb',
    twitter: 'https://twitter.com/Kaleb',
    profile: 'https://example.com/Kaleb',
  },
  
];

const Team = ({isVisible}) => {
  const [person, setPerson] = useState(false);
  const [detailid, setDetailid] = useState({});

  return (
    <section
    className={`container mx-auto px-4 py-12 service transition-opacity duration-500 ease-in-out ${
      isVisible ? "opacity-100 animate-serviceanime" : "opacity-0"
    }`}
    id="team"
  >
      <h2 className="text-3xl  text-gray-800 font-semibold text-center mb-8">Our Team</h2>
      <div className=" max-w-7xl grid  mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 gap-16">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white bg-opacity-10 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-2 border-slate-700 w-full max-w-full sm:w-full"
            onClick={() => {
              setPerson(true);
              setDetailid(member);
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 mx-auto object-cover rounded-full mt-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
              <p className="text-gray-500 text-center">{member.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a
                  href={member.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FontAwesomeIcon icon={faSolidUserCircle} size="lg" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {person && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 min-h-screen flex items-center justify-center ">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={() => setPerson(false)}
            >
              &times;
            </button>
            <div className="text-center">
              <img
                src={detailid.image}
                alt={detailid.name}
                className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{detailid.name}</h3>
              <p className="text-gray-600">{detailid.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={detailid.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href={detailid.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a
                  href={detailid.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FontAwesomeIcon icon={faSolidUserCircle} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
