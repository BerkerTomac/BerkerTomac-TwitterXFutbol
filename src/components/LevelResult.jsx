import React, { useState } from 'react';

const LevelResult = ({ level, description, answers }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="text-white text-xl mb-8">
        twitter dili ve edebiyatı seviyeniz:
      </div>
      
      <div className="text-[#29A9FF] text-[120px] font-bold mb-4">
        {level}
      </div>
      
      <div className="text-white text-xl mb-12">
        {description}
      </div>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="bg-[#98FB98] text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        cevap anahtarı
      </button>

      {showAnswers && (
        <div className="mt-8 text-white">
          <h3 className="text-xl mb-4">Doğru Cevaplar:</h3>
          <ul className="list-disc pl-5">
            {answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LevelResult;