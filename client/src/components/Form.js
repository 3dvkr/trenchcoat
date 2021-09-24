import { Question } from './Question';

export const Form = () => {
    const questionData = [{
        id: 1,
        question: 'What number?',
        answers: [1, 2, 3, 4]
    }, {
        id: 2,
        question: 'What color?',
        answers: ['red', 'blue', 'green', 'yellow']
    }];

    return (
        <div className="p-6">
            <form>
                {questionData.map(q => <Question key={q.id} question={q.question} answers={q.answers} />)}
            </form>
        </div>
    )
}