import { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const QuestionsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  background-color: transparent; /* Fundo transparente */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px; 
`;

const LeftSide = styled.div`
  flex: 1;
  background-color: transparent; /* Fundo transparente */
  color: #00264e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 20px;
`;

const RightSide = styled.div`
  flex: 2;
  padding: 20px;
`;

const QuestionList = styled.div`
  margin-top: 10px;
`;

const QuestionItem = styled.div`
  margin-bottom: 10px;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00264e;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;

  &:hover {
    background-color: #00264e;
  }
`;

const Answer = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
  margin-top: 5px;
  display: ${props => (props.expanded ? 'block' : 'none')}; /* Mostrar/ocultar resposta */
`;

const questionsData = [
  {
    question: 'O que é jurisprudência?',
    answer: 'Jurisprudência é o conjunto das decisões, aplicações e interpretações das leis feitas por tribunais superiores e que servem de referência para futuras decisões.'
  },
  {
    question: 'Como a jurisprudência é utilizada?',
    answer: 'Ela é utilizada pelos juízes e advogados como base para fundamentar decisões e argumentos jurídicos em casos semelhantes.'
  },
  {
    question: 'Qual a importância da jurisprudência?',
    answer: 'A jurisprudência assegura a uniformidade e a previsibilidade das decisões judiciais, promovendo segurança jurídica.'
  },
  {
    question: 'Qual a diferença entre jurisprudência e doutrina?',
    answer: 'Jurisprudência refere-se às decisões judiciais recorrentes sobre um tema, enquanto a doutrina se refere aos estudos teóricos dos juristas sobre as leis.'
  },
  {
    question: 'Como a jurisprudência influencia novas leis?',
    answer: 'A jurisprudência pode influenciar a criação de novas leis ao destacar lacunas ou a necessidade de regulamentação em determinadas áreas do direito.'
  },
  {
    question: 'Jurisprudência é obrigatória?',
    answer: 'Embora não seja obrigatória, a jurisprudência tem um forte valor persuasivo e é frequentemente utilizada para embasar decisões judiciais.'
  }
];

export default function Questions() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleAnswer = index => {
    setExpandedIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index) // Fecha a pergunta se já estiver aberta
        : [...prevIndexes, index] // Abre a pergunta se estiver fechada
    );
  };

  return (
    <>
      <QuestionsContainer>
        <LeftSide>
          Dúvidas frequentes
        </LeftSide>
        <RightSide>
          <QuestionList>
            {questionsData.map((item, index) => (
              <QuestionItem key={index}>
                <QuestionHeader onClick={() => toggleAnswer(index)}>
                  {item.question}
                  {expandedIndexes.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                </QuestionHeader>
                <Answer expanded={expandedIndexes.includes(index)}>
                  {item.answer}
                </Answer>
              </QuestionItem>
            ))}
          </QuestionList>
        </RightSide>
      </QuestionsContainer>
    </>
  );
}
