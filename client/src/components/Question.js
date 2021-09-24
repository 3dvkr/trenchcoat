export const Question = ({ key, question, answers }) => {
    // TODO: make the radio inputs dynamic/ add controlled inputs
    return (
        <>
            <h3>Question {key}: {question}</h3>
            {answers.map((answer, i) => {
                return (
                    <>
                        <input 
                            key={i} 
                            type="radio" 
                        ></input>
                        <label htmlFor={i}>{answer}</label>
                    </>
                )
            })}
        </>
    )
}