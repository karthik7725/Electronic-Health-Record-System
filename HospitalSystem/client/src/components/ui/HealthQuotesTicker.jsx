import React from "react";

const quotes = [
  { text: "The greatest wealth is health.", author: "Virgil" },
  {
    text: "Let food be thy medicine and medicine be thy food.",
    author: "Hippocrates",
  },
  {
    text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha",
  },
  {
    text: "Health is not valued till sickness comes.",
    author: "Thomas Fuller",
  },
  { text: "The first wealth is health.", author: "Ralph Waldo Emerson" },
  {
    text: "He who has health has hope, and he who has hope has everything.",
    author: "Arabian Proverb",
  },
  {
    text: "To eat is a necessity, but to eat intelligently is an art.",
    author: "François de La Rochefoucauld",
  },
  { text: "A healthy outside starts from the inside.", author: "Robert Urich" },
];

const HealthQuotesTicker = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <div className="flex animate-ticker ">
        {quotes.concat(quotes).map((quote, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-6 py-3 bg-white rounded-2xl "
            style={{
              width: "400px",
              borderColor: "#FFD700",
              borderWidth: "5px",
            }}
          >
            <p className="text-2xl font-semibold text-gray-800">{quote.text}</p>
            <p className="text-md italic text-gray-600 mt-2">
              - {quote.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthQuotesTicker;
