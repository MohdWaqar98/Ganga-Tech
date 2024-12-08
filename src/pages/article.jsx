import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Article = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const openModal = (block) => {
    setSelectedBlock(block);
  };

  const closeModal = () => {
    setSelectedBlock(null);
  };

  const blocks = [
    {
      title: 'pH',
      content:
        'The pH of water measures how acidic or alkaline the water is. A pH of 7 is considered neutral, while values below 7 are acidic and above 7 are alkaline. The pH of the Ganga River is important as it affects aquatic life. A balanced pH ensures that fish and other organisms can thrive. If the water becomes too acidic or too alkaline, it harms these organisms and disrupts the natural ecosystem.',
      bgColor: 'bg-gradient-to-r from-[#EEFFF1] to-[#2FE270]',
    },
    {
      title: 'D.O.',
      content:
        'Dissolved Oxygen (DO) refers to the amount of oxygen present in the water. Oxygen is essential for the survival of aquatic creatures like fish and plants. High DO levels indicate good water quality, supporting a healthy ecosystem. Low DO levels, often caused by pollution, can lead to the death of aquatic life. Therefore, monitoring DO levels is crucial to understanding the health of the river.',
      bgColor: 'bg-gradient-to-r from-[#FFFFEE] to-[#E0F15F]',
    },
    {
      title: 'B.O.D.',
      content:
        'BOD is a measure of the amount of oxygen required by microorganisms to break down organic material in water. Higher BOD levels mean more pollution, as it indicates that there is more organic waste (like sewage) in the water. This reduces the amount of oxygen available for fish and other aquatic life. A low BOD indicates cleaner water with less pollution.',
      bgColor: 'bg-gradient-to-r from-[#FFF5FF] to-[#FF81E4]',
    },
    {
      title: 'Total Coliform',
      content:
        'Total Coliform refers to a group of bacteria commonly found in the intestines of warm-blooded animals, including humans. These bacteria themselves are not harmful, but their presence in water suggests that harmful pathogens may also be present. High levels of total coliform in the Ganga indicate contamination, usually due to human or animal waste, which can lead to waterborne diseases.',
      bgColor: 'bg-gradient-to-r from-[#FFFAEE] to-[#FBCA2A]',
    },
    {
      title: 'Fecal Coliform',
      content:
        'Fecal Coliform is a subset of total coliform bacteria, specifically associated with the feces of warm-blooded animals. Its presence in water is a strong indicator of recent contamination by human or animal waste. High levels of fecal coliform bacteria make the water unsafe for drinking and bathing, posing serious health risks.',
      bgColor: 'bg-gradient-to-r from-[#EEFFF1] to-[#2FE270]',
    },
    {
      title: 'Ganga Basin',
      content:
        'The Ganga Basin is the vast area that drains water into the Ganga River. It covers parts of India, Nepal, China, and Bangladesh, and is home to millions of people. The basin includes various tributaries, towns, and cities, making it one of the most densely populated and industrialized regions in the world. Protecting the quality of water in the Ganga is crucial not just for the river, but also for the livelihoods of millions of people who depend on it for drinking, irrigation, and cultural purposes.',
      bgColor: 'bg-gradient-to-r from-[#FFFFEE] to-[#E0F15F]',
    },
    {
      title: 'Classification of Water According to CPCB',
      content:
        'The Central Pollution Control Board (CPCB) classifies water quality based on various parameters like pH, DO, BOD, and coliform levels. The classification is divided into five categories: Class I (A): Best quality (Drinking water source without treatment), Class II: Good quality (Outdoor bathing), Class III: Moderate quality (Drinking water source after treatment), Class IV: Poor quality (Fishery, industrial cooling), Class V: Very poor quality (Water unsuitable for aquatic life).',
      bgColor: 'bg-gradient-to-r from-[#FFF5FF] to-[#FF81E4]',
    },
    {
      title: 'Namami Gange Project',
      content:
        'The Namami Gange Project is an ambitious initiative launched by the Government of India to clean and rejuvenate the Ganga River. It aims to reduce pollution levels, improve water quality, and conserve the river\'s ecosystem. The project focuses on sewage treatment, solid waste management, and promoting sustainable practices along the river. It is a long-term effort to restore the river to its pristine state and ensure clean water for future generations.',
      bgColor: 'bg-gradient-to-r from-[#FFFAEE] to-[#FBCA2A]',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#00ADFF] to-[#006FFF]">
      <div className="p-4">
        <h1 className="text-white text-4xl font-bold text-center mb-6 mt-6">
          Know Your Ganga
        </h1>
        <div className="space-y-6 overflow-y-scroll h-[75vh] scrollbar-hide">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`rounded-3xl p-4 shadow-lg relative ${block.bgColor}`}
            >
              <h2 className="text-gray-800 text-[32px] font-bold">
                {block.title}
              </h2>
              <p className="text-gray-700 mt-2 text-[20px] leading-[30px] font-[275] line-clamp-2">
                {block.content.substring(0, 100)}...
              </p>
              <div className="text-right mt-2">
                <button
                  onClick={() => openModal(block)}
                  className="text-blue-600 font-semibold text-[20px] hover:underline"
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBlock && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            className={`bg-white rounded-3xl p-6 max-w-lg w-full ${selectedBlock.bgColor}`}
          >
            <h2 className="text-[32px] font-bold mb-4 text-gray-800">
              {selectedBlock.title}
            </h2>
            <p className="text-gray-700 text-[20px] leading-[30px]">
              {selectedBlock.content}
            </p>
            <div className="text-right mt-6">
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Article;
