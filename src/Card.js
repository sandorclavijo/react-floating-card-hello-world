import React from "react";

export default function Card({ title, description, image, actionText, onActionClick }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
      {image && <img className="w-full h-48 object-cover" src={image} alt={title} />}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        {actionText && (
          <button
            onClick={onActionClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}