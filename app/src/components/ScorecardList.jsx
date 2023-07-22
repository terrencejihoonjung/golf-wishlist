import Scorecard from "./Scorecard";

function ScorecardList({ scorecards, handleDeleteScorecard }) {
  const renderScorecards = scorecards.map((scorecard) => {
    return (
      <Scorecard
        key={scorecard.id}
        scorecard={scorecard}
        handleDeleteScorecard={handleDeleteScorecard}
      />
    );
  });
  return (
    <div className="grid grid-cols-2 gap-6 h-256 overflow-auto w-full py-12 px-32">
      {renderScorecards}
    </div>
  );
}

export default ScorecardList;
