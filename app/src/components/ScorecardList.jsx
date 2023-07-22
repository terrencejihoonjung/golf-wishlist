import Scorecard from "./Scorecard";

function ScorecardList({ scorecard, scorecards }) {
  return (
    <div className="grid grid-cols-2 gap-6 h-256 overflow-auto w-full py-12 px-32 overflow-auto">
      <Scorecard scorecard={scorecard} />
      <Scorecard scorecard={scorecard} />
      <Scorecard scorecard={scorecard} />
      <Scorecard scorecard={scorecard} />
      <Scorecard scorecard={scorecard} />
      <Scorecard scorecard={scorecard} />
      <Scorecard scorecard={scorecard} />
    </div>
  );
}

export default ScorecardList;
