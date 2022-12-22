import "./scoreCard.css";

function ScoreCard({ scores, xPlaying }) {
  const { xScore, oScore } = scores;

  return (
    <div className="scorecardContainer">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
}

export default ScoreCard;
