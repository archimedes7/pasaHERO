import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SurveyModal from "../app/components/SurveyModal";

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "Follow these steps to reset your password...",
    },
    {
      question: "How do I book a ride?",
      answer: "Follow these steps to book a ride...",
    },
    // Add more FAQ items as needed
  ];

  const articleItems = [
    {
      title: "Getting Started",
      description: "Learn how to get started with our service...",
    },
    {
      title: "Advanced Features",
      description: "Explore advanced features of our service...",
    },
    // Add more article items as needed
  ];

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Help Center</h1>

      <div className="flex mb-6">
        <input
          className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for help..."
        />
        <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
          <IoSearchOutline size={24} />
        </button>
      </div>

      <Section title="Frequently Asked Questions">
        {faqItems.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </Section>

      <Section title="Articles and Guides">
        {articleItems.map((item, index) => (
          <ArticleItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Section>

      <button
        className="mt-6 p-4 rounded-md w-full bg-custom-blue text-white hover:bg-custom-blue-600"
        onClick={() => setIsSurveyOpen(true)}
      >
        Take Survey & Get 2% Discount
      </button>

      <SurveyModal
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
      />
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      {children}
    </section>
  );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

const ArticleItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HelpCenter;
