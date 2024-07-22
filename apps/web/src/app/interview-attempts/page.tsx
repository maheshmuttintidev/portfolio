import React from "react";

interface AssignmentMeta {
  assignmentName: string;
  assignmentDescription: string;
}

interface Question {
  title: string;
  answered: boolean;
  answerEfficiency: number;
  myAnswer: string;
  flaws?: string[];
}

interface InterviewProcedure {
  type: string;
  meta?: AssignmentMeta | any;
  questions?:
    | {
        [key: string]: Question[];
      }
    | any;
  results: {
    status: number;
    statusText: string;
    techTeamResponse?: string;
  };
  attemptedAt: string;
}

interface InterviewData {
  companyName: string;
  interviewProcedure: InterviewProcedure[];
}

const interviewsData: InterviewData[] = [
  {
    companyName: "NeoKred",
    interviewProcedure: [
      {
        type: "Assignment",
        meta: {
          assignmentName: "Markdown Live Editor",
          assignmentDescription:
            "Implement Live Markdown to HTML renderer using react and nodejs full stack web application.",
        },
        results: { status: 3, statusText: "cleared" },
        attemptedAt: "Jul 6, 2024 at 2:02pm (IST)",
      },
      {
        type: "Tech Interview",
        questions: {
          react: [
            {
              title:
                "What is the use of useRef? What is the use of useRef over useState?",
              answered: true,
              answerEfficiency: 40,
              myAnswer:
                "useRef is used to access the properties and functions of the dom element. It is immutable and can't change its value....",
              flaws: [
                "Struggled to answer properly",
                "Not able to answer as he asks for what is the other use of useRef such as it will hold the data. so, what is the use of useRef to hold the data over useState?",
                "And also i intervined with controlled and uncontrolled components for useRef hook, which is entirely wrong",
              ],
            },

            {
              title: "What is forwardRef in react?",
              answered: true,
              answerEfficiency: 20,
              myAnswer:
                "Its used to access the functions of children component in the parent component and it uses useImperativeHandle hook to execute the function",
              flaws: ["Struggled to answer properly"],
            },
            {
              title: "Have you worked on redux?",
              answered: true,
              answerEfficiency: 50,
              myAnswer:
                "I have used redux in react projects, and due to lot of boilerplate code required to setup redux, I have used redux toolkit.",
              flaws: ["Struggled to answer properly"],
            },
            {
              title: "How will you handle the forms in react?",
              answered: true,
              answerEfficiency: 20,
              myAnswer:
                "I used normal use state and mobx state management library for complex forms",
              flaws: ["Struggled to answer properly"],
            },
            {
              title:
                "What is the difference between the context and redux? and why do we use redux? what is the usecases of them? what is benifit of mobx or redux over context?",
              answered: true,
              answerEfficiency: 30,
              myAnswer:
                "We use redux for global state management and it will support persist of data in the localstorage. but the context won't support. For larger scale applications, we use the redux and mobx. For Authentication etc., we use the context",
              flaws: ["Struggled to answer properly"],
            },
          ],
          reactNative: [
            {
              title: "What is the use of FlatList?",
              answered: true,
              answerEfficiency: 50,
              myAnswer:
                "It is used to improve the performance of the application, it will support the infinite scroll and pagination",
            },
            {
              title: "What is the  VirtualizedList?",
              answered: true,
              answerEfficiency: 50,
              myAnswer:
                "I am not used that frequently, its more or like flatlist....",
              flaws: [
                "Struggled to answer properly",
                "Its more of FlatList is my worst answer",
              ],
            },
          ],
          nodejs: [
            {
              title: "What is the event loop in the nodejs?",
              myAnswer:
                "Node js event single threaded and event loop is continuosly checks whether the call stack is empty, if call stack is empty it will push the task in the micro task queue or macro task queue.",
              answered: true,
              answerEfficiency: 50,
            },
            {
              title:
                "Let's suppose we have Promise function and inside console log is there, and other console log is below the Promise function. Now which one is log first and why?",
              myAnswer:
                "Initially console log will pushed to the call stack and executed, and the Promise function will go to the micro task queue. since there is a console log in the call stack it will execute that first and after that event loop will push the promise function to the call stack and then executes the console log inside the promise. In that way, it will execute like that",
              answered: true,
              answerEfficiency: 50,
            },
          ],
          mongodb: [
            {
              title: "Have you worked on MongoDB?",
              myAnswer: "I have used it once, but not more",
              answered: true,
              answerEfficiency: 0,
            },
          ],
          git: [
            {
              title: "What is git stash and what is the use of it?",
              myAnswer:
                "It is used to store the commit or changes into the temporary bucket. Its like, when we are in the middle of the work and some production bugs comes and you need the current code. In this case, we use the stash and later we will pop that stash and use it.",
              answered: true,
              answerEfficiency: 70,
            },
          ],
          postgres: [],
          microservices: [
            {
              title:
                "Do you know how to use microservices? tell me about the microservices",
              myAnswer:
                "I used the nobejs framework to create microservices which will have the infra.js to setup the configurations and all. I will be able to create the microservices in my local system",
              answered: true,
              answerEfficiency: 20,
            },
          ],
          devOps: [
            {
              title: "Did you work upon docker?",
              myAnswer: "No, I didn't work on docker.",
              answered: true,
              answerEfficiency: 20,
            },
          ],
          others: [
            {
              title:
                "What type of technologies have you used in your experience?",
              myAnswer:
                "I have used the react, react native for frontend, and nodejs and postgres for backend. Mostly i worked on mobile app developement, uploading the both android and ios apps into the playstore and appstores.",
              answered: true,
              answerEfficiency: 50,
            },

            {
              title: "In the assignment, you have used nest js, why?",
              myAnswer:
                "I have used the nextjs and in my personal projects for better seo. It will improve the seo.",
              answered: true,
              answerEfficiency: 40,
              flaws: [
                "I heard it is nextjs but it is nest js, i answered i didn't use nestjs in assignment",
              ],
            },
            {
              title: "Are you the most of frontend or backend guy?",
              myAnswer:
                "I am most of frontend guy which i have worked on react native mobile applications",
              answered: true,
              answerEfficiency: 20,
            },
          ],
        },
        meta: {},
        results: {
          status: 0,
          statusText: "attempted",
          techTeamResponse: "HR Team will get back to you",
        },
        attemptedAt: "Jul 22, 2024 at 3:30pm (IST)",
      },
    ],
  },
];

interface ImprovementsProps {
  questions: { [key: string]: Question[] };
}

const Improvements: React.FC<ImprovementsProps> = ({ questions }) => {
  const getImprovements = (questions: { [key: string]: Question[] }) => {
    const improvements: Array<any> = [];
    Object.keys(questions).forEach((category) => {
      questions[category].forEach((question) => {
        if (question.flaws && question.flaws.length > 0) {
          improvements.push({
            category,
            title: question.title,
            flaws: question.flaws,
          });
        }
      });
    });
    return improvements;
  };

  const improvements = getImprovements(questions);

  return (
    <div className="p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">Areas for Improvement</h3>
      {improvements.length === 0 ? (
        <p className="theme-text">No improvements needed.</p>
      ) : (
        <ul className="space-y-4">
          {improvements.map((improvement, index) => (
            <li key={index} className="p-4 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-medium theme-text">
                {improvement.category.charAt(0).toUpperCase() +
                  improvement.category.slice(1)}
              </h4>
              <p className="theme-text font-semibold text-xl mt-2">
                {improvement.title}
              </p>
              <ul className="list-disc list-inside theme-text mt-2">
                {improvement.flaws?.map((flaw: string, fIdx: number) => (
                  <li key={fIdx}>{flaw}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const InterviewAttempts: React.FC = () => {
  return (
    <div className="p-6 theme-bg min-h-screen container mx-auto">
      {interviewsData.map((interview, iIdx) => (
        <div key={iIdx} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{interview.companyName}</h2>
          {interview.interviewProcedure.map((procedure, pIdx) => (
            <div key={pIdx} className="theme-bg p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {procedure.type} - {procedure.attemptedAt}
              </h3>
              {procedure.type === "Assignment" && procedure.meta && (
                <div>
                  <p className="theme-text">
                    <strong>Assignment Name:</strong>{" "}
                    {procedure.meta.assignmentName}
                  </p>
                  <p className="theme-text">
                    <strong>Description:</strong>{" "}
                    {procedure.meta.assignmentDescription}
                  </p>
                  <p className="theme-text">
                    <strong>Status:</strong> {procedure.results.statusText}
                  </p>
                </div>
              )}
              {procedure.type === "Tech Interview" && procedure.questions && (
                <div className="space-y-4">
                  {Object.keys(procedure.questions).map((category, qIdx) => (
                    <div key={qIdx} className="space-y-2">
                      <h4 className="text-lg font-bold text-green-700">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h4>
                      {procedure?.questions[category].map(
                        (question: Question, qIdx: number) => (
                          <div
                            key={qIdx}
                            className="p-4 border border-gray-200 rounded-lg"
                          >
                            <p className="theme-text text-red-500 font-semibold text-xl">
                              {question.title}
                            </p>
                            <p className="theme-text">
                              <strong>Answered:</strong>{" "}
                              {question.answered ? "Yes" : "No"}
                            </p>
                            <p className="theme-text">
                              <strong>Answer Efficiency:</strong>{" "}
                              {question.answerEfficiency}%
                            </p>
                            <p className="theme-text">
                              <strong>My Answer:</strong> {question.myAnswer}
                            </p>
                            {question.flaws && question.flaws.length > 0 && (
                              <ul className="list-disc list-inside theme-text">
                                {question.flaws.map((flaw, fIdx) => (
                                  <li key={fIdx}>{flaw}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  ))}
                  <p className="theme-text">
                    <strong>Status:</strong> {procedure.results.statusText}
                  </p>
                  <p className="theme-text">
                    <strong>Tech Team Response:</strong>{" "}
                    {procedure.results.techTeamResponse}
                  </p>
                  <p className="theme-text">
                    <strong>Attempted At:</strong> {procedure.attemptedAt}
                  </p>
                  <Improvements questions={procedure.questions} />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InterviewAttempts;
