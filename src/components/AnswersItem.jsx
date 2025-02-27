// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, i) => (
        <li key = {i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, colour, timeSpent, review, bestFeatures, worstBits }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <section>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </section>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
          {/* Additional questions */}
          <p>
          <em>What are the best features of your rubber duck?</em>
          <span className="answer__line">{bestFeatures}</span>
        </p>
        <p>
          <em>What are the worst bits of your rubber duck?</em>
          <span className="answer__line">{worstBits}</span>
        </p>
      </article>
    </li>
  );
}
