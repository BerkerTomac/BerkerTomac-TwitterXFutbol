import React, { useState } from 'react';
import {Button} from './components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/Card';
import {QuestionCard} from './components/ui/QuestionCard';


const quizData = {
  questions: [
    {
      id: 1,
      image: "/assets/12-13colman.jfif",
      question: "Sana ne dmler geliyodur şimdi?",
      options: [
        { id: 'a', text: "Jaja", isCorrect: false },
        { id: 'b', text: "12-13 Colman", isCorrect: true },  
        { id: 'c', text: "Yattara", isCorrect: false }
      ]
    },
    {
        id: 2,
        image: "/assets/alperpotuk.jfif", 
        question: "fotoda bahsi geçen futbolcular sırasıyla kimdir",
        options: [
          { id: 'a', text: "Mehmet Ekici - Hasan Ali Kaldırım - Alper Potuk", isCorrect: false },
          { id: 'b', text: "Hasan Ali Kaldırım - Alper Potuk - Mehmet Ekici", isCorrect: false },  
          { id: 'c', text: "Hasan Ali Kaldırım - Mehmet Ekici - Alper Potuk", isCorrect: true }
        ]
      },
      {
        id: 3,
        image: "/assets/ankaragucu.jfif", 
        question: "Tweetteki buzdolabı üzerinde yer alan logo hangi takıma aittir",
        options: [
          { id: 'a', text: "Galatasaray", isCorrect: false },
          { id: 'b', text: "Gençlerbirliği", isCorrect: false },  
          { id: 'c', text: "Ankaragücü", isCorrect: true }
        ]
      },
      {
        id: 4,
        image: "/assets/baskaformabulamadınmi.jfif", 
        question: "?",
        options: [
          { id: 'a', text: "giyecek başka şey bulamadın mı amk", isCorrect: true },
          { id: 'b', text: "fenerli olsa yapmazdı", isCorrect: false },  
          { id: 'c', text: "kadın beşiktaşlıymış", isCorrect: false }
        ]
      },
      {
        id: 5,
        image: "/assets/alperpotuk2.jfif", 
        question: "Fotoda bahsi geçen futbolcu kimdir",
        options: [
          { id: 'a', text: "Oğuzhan Özyakup", isCorrect: false },
          { id: 'b', text: "Alper Potuk", isCorrect: true },  
          { id: 'c', text: "Baki Mercimek", isCorrect: false }
        ]
      },
      {
        id: 6,
        image: "/assets/bencetesadüf.jfif", 
        question: "Aykut hocanın fotodaki ünlü sözü",
        options: [
          { id: 'a', text: "bazı çiçekler bazı topraklarda olmuyor", isCorrect: false },
          { id: 'b', text: "söyleyebildiğim tek şey acı çektiğimdir", isCorrect: false },  
          { id: 'c', text: "bence tesadüf", isCorrect: true }
        ]
      },
      {
        id: 7,
        image: "/assets/celalbaggins.jfif", 
        question: "Tweeti kim atmıştır",
        options: [
          { id: 'a', text: "celal baggins", isCorrect: true },
          { id: 'b', text: "losgar hool", isCorrect: false },  
          { id: 'c', text: "prandelli", isCorrect: false }
        ]
      },
      {
        id: 8,
        image: "/assets/ercantaner.jfif", 
        question: "Fotodaki olaya maruz kalan kişi kimdir",
        options: [
          { id: 'a', text: "Ercan Taner", isCorrect: true },
          { id: 'b', text: "Serdar Ali Çelikler", isCorrect: false },  
          { id: 'c', text: "Sinan Engin", isCorrect: false }
        ]
      },
      {
        id: 9,
        image: "/assets/vitorpereira.jfif", 
        question: "Kimdir",
        options: [
          { id: 'a', text: "Aygıt Kocaman", isCorrect: false },
          { id: 'b', text: "Ersun Yanal", isCorrect: false },  
          { id: 'c', text: "Vitor Pereira", isCorrect: true }
        ]
      },
      {
        id: 10,
        image: "/assets/wijnaldum.jpg", 
        question: "Fotodaki adamla özleşen twitter hesabı",
        options: [
          { id: 'a', text: "aslı", isCorrect: false },
          { id: 'b', text: "zeynep", isCorrect: true },  
          { id: 'c', text: "merve", isCorrect: false }
        ]
      },
      {
        id: 11,
        image: "/assets/gs0tuzlaspor2.jfif", 
        question: "Fatih Hocanın bu bakışı hangi maç sonrasındadır",
        options: [
          { id: 'a', text: "Tuzlaspor", isCorrect: true },
          { id: 'b', text: "Kayserispor", isCorrect: false },  
          { id: 'c', text: "Fenerbahçe", isCorrect: false }
        ]
      },
      {
        id: 12,
        image: "/assets/ilk yarı(türkiye 1 hollanda 0).jfif", 
        question: "Bu foto hangi maç için atılmıştır",
        options: [
          { id: 'a', text: "Türkiye-Karadağ", isCorrect: false },
          { id: 'b', text: "Türkiye-Avusturya", isCorrect: false },  
          { id: 'c', text: "Türkiye-Hollanda", isCorrect: true }
        ]
      },
      {
        id: 13,
        image: "/assets/kenanyıldız.jfif", 
        question: "Bu tweet hangi futbolcu için atılmıştır",
        options: [
          { id: 'a', text: "Masuaku", isCorrect: false },
          { id: 'b', text: "Barış Alper", isCorrect: false },  
          { id: 'c', text: "Kenan Yıldız", isCorrect: true }
        ]
      },
      {
        id: 14,
        image: "/assets/keremkoşu.jfif", 
        question: "Bu foto hangi futbolcunun golü sırasında atılmıştır",
        options: [
          { id: 'a', text: "Kerem Aktürkoğlu", isCorrect: true },
          { id: 'b', text: "Arda Güler", isCorrect: false },  
          { id: 'c', text: "Hakan Çalhanoğlu", isCorrect: false }
        ]
      },
      {
        id: 15,
        image: "/assets/kroosunpaslar.jfif", 
        question: "Ne benzetmesi yapılmıştır",
        options: [
          { id: 'a', text: "Messinin paslar", isCorrect: false },
          { id: 'b', text: "Kroosun paslar", isCorrect: true },  
          { id: 'c', text: "Modricin paslar", isCorrect: false }
        ]
      },
      {
        id: 16,
        image: "/assets/maradona.jfif", 
        question: "Mustafa topaloğlu konserinde bulunan o futbolcu kimdir",
        options: [
          { id: 'a', text: "Maradona", isCorrect: true },
          { id: 'b', text: "Eriksen", isCorrect: false },  
          { id: 'c', text: "Schweinsteiger", isCorrect: false }
        ]
      },
      {
        id: 17,
        image: "/assets/muzorta.jfif", 
        question: "Context",
        options: [
          { id: 'a', text: "bekte ömer bayram oynuyor aq", isCorrect: false },
          { id: 'b', text: "pas istediği yere bak aq", isCorrect: false },  
          { id: 'c', text: "Muz orta (tribündeki maymunlara", isCorrect: true }
        ]
      },
      {
        id: 18,
        image: "/assets/nihatkahveci.jfif", 
        question: "söze sahip kişi",
        options: [
          { id: 'a', text: "Ahmet Çakar", isCorrect: false },
          { id: 'b', text: "Nihat Kahveci", isCorrect: true },  
          { id: 'c', text: "Serdar Akın", isCorrect: false }
        ]
      },
      {
        id: 19,
        image: "/assets/nova.jfif", 
        question: "o meşhur tweet sahibi",
        options: [
          { id: 'a', text: "NOVA", isCorrect: true },
          { id: 'b', text: "yescontextfb", isCorrect: false },  
          { id: 'c', text: "zlatan", isCorrect: false }
        ]
      },
      {
        id: 20,
        image: "/assets/ronaldinho.jfif", 
        question: "o futbolcu",
        options: [
          { id: 'a', text: "fenomen ronaldo", isCorrect: false },
          { id: 'b', text: "ronaldinho", isCorrect: true },  
          { id: 'c', text: "messi", isCorrect: false }
        ]
      },
      {
        id: 21,
        image: "/assets/soksungötüne.jfif", 
        question: "ünlü düşünürün sözü",
        options: [
          { id: 'a', text: "çok zor ya", isCorrect: false },
          { id: 'b', text: "bir gün fatih terim", isCorrect: false },  
          { id: 'c', text: "soksun götüne", isCorrect: true }
        ]
      },
      {
        id: 22,
        image: "/assets/sturidge.jfif", 
        question: "sturidgge abiye ait o şarkı",
        options: [
          { id: 'a', text: "yarim yarim", isCorrect: true },
          { id: 'b', text: "ey gidi karadeniz", isCorrect: false },  
          { id: 'c', text: "uy aha", isCorrect: false }
        ]
      },
      {
        id: 23,
        image: "/assets/türkiyecumhuriyetigençleri(atatürk).jfif", 
        question: "bu 4lünün olduğu o twitter odasının adı",
        options: [
          { id: 'a', text: "BOKANI BU GECE GÖNDERİYORUZ", isCorrect: false },
          { id: 'b', text: "Türkiye cumhuriyeti gençleri(atatürk)", isCorrect: true },  
          { id: 'c', text: "Adayı satıp osimhen alma planları", isCorrect: false }
        ]
      },
      {
        id: 24,
        image: "/assets/yanlisyaptim.jfif",
        question: "context",
        options: [
          { id: 'a', text: "eko baskan ile ts sampiyon", isCorrect: false },
          { id: 'b', text: "yanlis yaptim", isCorrect: true },  
          { id: 'c', text: "10-11 şampiyonu trabzon baskanim ile", isCorrect: false }
        ]
      },
      {
        id: 25,
        image: "/assets/yokartık.jfif", 
        question: "context",
        options: [
          { id: 'a', text: "yok artık", isCorrect: true },
          { id: 'b', text: "hassiktir", isCorrect: false },  
          { id: 'c', text: "erman yaşardı o", isCorrect: false }
        ]
      },




  ],
  scoringRules: [
    { minScore: 0, maxScore: 5, redirectUrl: "/a1" },
    { minScore: 6, maxScore: 10, redirectUrl: "/a2" },
    { minScore: 10, maxScore: 15, redirectUrl: "/b1" },
    { minScore: 15, maxScore: 20, redirectUrl: "/b2" },
    { minScore: 20, maxScore: 23, redirectUrl: "/c1" },
    { minScore: 24, maxScore: 25, redirectUrl: "/c2" }
  ]
};

const TwitterxFootball = () => {
    const [answers, setAnswers] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);
  
    const handleOptionSelect = (questionId, optionId) => {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: optionId
      }));
    };
  
    const calculateScore = () => {
      let score = 0;
      quizData.questions.forEach(question => {
        const selectedOptionId = answers[question.id];
        const selectedOption = question.options.find(opt => opt.id === selectedOptionId);
        if (selectedOption && selectedOption.isCorrect) {
          score++;
        }
      });
      return score;
    };
  
    const handleFinish = () => {
      if (Object.keys(answers).length === quizData.questions.length) {
        const score = calculateScore();
        const redirectRule = quizData.scoringRules.find(
          rule => score >= rule.minScore && score <= rule.maxScore
        );
  
        if (redirectRule) {
          window.location.href = redirectRule.redirectUrl;
        } else {
          alert('No scoring rule found');
        }
      } else {
        alert('Please answer all questions before finishing!');
      }
    };
  
    return (
      <div className="container mx-auto p-4 max-w-4xl">

        <div className="space-y-6">
          {quizData.questions.map((q) => (
            <Card key={q.id} className="overflow-hidden">
              <CardContent className="flex flex-col items-center">
                <div className="w-full max-w-2xl mx-auto">
                  <div className="flex flex-col items-center">
                    <img 
                      src={q.image} 
                      alt={`Question ${q.id}`} 
                      className="question-image"
                    />
                    <h2 className="question-text">
                      {q.question}
                    </h2>
                    <div className="w-full max-w-md mx-auto space-y-3">
                      {q.options.map((option) => (
                        <Button
                          key={option.id}
                          variant="option"
                          onClick={() => handleOptionSelect(q.id, option.id)}
                          selected={answers[q.id] === option.id}
                          className="w-full"
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-6 sticky bottom-0 bg-white py-4">
          <Button 
            onClick={handleFinish} 
            variant="ui"
            disabled={Object.keys(answers).length !== quizData.questions.length}
            className="w-full max-w-xl mx-auto"
          >
            Quizi Tamamla
          </Button>
        </div>
      </div>
    );
  };

export default TwitterxFootball;