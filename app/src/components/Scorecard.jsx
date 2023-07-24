import { TrashIcon } from "@heroicons/react/24/outline";

function Scorecard({ scorecard, handleDeleteScorecard }) {
  return (
    <div className="flex flex-col h-128 border-2 border-slate-300 shadow-lg p-4 rounded-2xl">
      <div className="flex">
        <h2 className="grow text-zanah-950">
          {scorecard.location} ({scorecard.tee}) - {scorecard.date}
        </h2>

        <i
          onClick={() => handleDeleteScorecard(scorecard.id)}
          className="h-6 w-6"
        >
          <TrashIcon />
        </i>
      </div>

      <div className="flex flex-col justify-around basis-5/6">
        <span className="flex flex-row justify-around">
          <h3 className="w-8">Hole: </h3>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
        </span>

        <span className="flex flex-row justify-around">
          <h3 className="w-8">HC: </h3>
          <p className="scorecard-input">{scorecard.hOne}</p>
          <p className="scorecard-input">{scorecard.hTwo}</p>
          <p className="scorecard-input">{scorecard.hThree}</p>
          <p className="scorecard-input">{scorecard.hFour}</p>
          <p className="scorecard-input">{scorecard.hFive}</p>
          <p className="scorecard-input">{scorecard.hSix}</p>
          <p className="scorecard-input">{scorecard.hSeven}</p>
          <p className="scorecard-input">{scorecard.hEight}</p>
          <p className="scorecard-input">{scorecard.hNine}</p>
          <p className="scorecard-input">{scorecard.hTen}</p>
          <p className="scorecard-input">{scorecard.hEleven}</p>
          <p className="scorecard-input">{scorecard.hTwelve}</p>
          <p className="scorecard-input">{scorecard.hThirteen}</p>
          <p className="scorecard-input">{scorecard.hFourteen}</p>
          <p className="scorecard-input">{scorecard.hFifteen}</p>
          <p className="scorecard-input">{scorecard.hSixteen}</p>
          <p className="scorecard-input">{scorecard.hSeventeen}</p>
          <p className="scorecard-input">{scorecard.hEighteen}</p>
        </span>

        <span className="flex flex-row justify-around">
          <h3 className="w-8">TJ: </h3>
          <p className="scorecard-input">{scorecard.myOne}</p>
          <p className="scorecard-input">{scorecard.myTwo}</p>
          <p className="scorecard-input">{scorecard.myThree}</p>
          <p className="scorecard-input">{scorecard.myFour}</p>
          <p className="scorecard-input">{scorecard.myFive}</p>
          <p className="scorecard-input">{scorecard.mySix}</p>
          <p className="scorecard-input">{scorecard.mySeven}</p>
          <p className="scorecard-input">{scorecard.myEight}</p>
          <p className="scorecard-input">{scorecard.myNine}</p>
          <p className="scorecard-input">{scorecard.myTen}</p>
          <p className="scorecard-input">{scorecard.myEleven}</p>
          <p className="scorecard-input">{scorecard.myTwelve}</p>
          <p className="scorecard-input">{scorecard.myThirteen}</p>
          <p className="scorecard-input">{scorecard.myFourteen}</p>
          <p className="scorecard-input">{scorecard.myFifteen}</p>
          <p className="scorecard-input">{scorecard.mySixteen}</p>
          <p className="scorecard-input">{scorecard.mySeventeen}</p>
          <p className="scorecard-input">{scorecard.myEighteen}</p>
        </span>

        <span className="flex flex-row justify-around">
          <h3 className="w-8">Par: </h3>
          <p className="scorecard-input">{scorecard.parOne}</p>
          <p className="scorecard-input">{scorecard.parTwo}</p>
          <p className="scorecard-input">{scorecard.parThree}</p>
          <p className="scorecard-input">{scorecard.parFour}</p>
          <p className="scorecard-input">{scorecard.parFive}</p>
          <p className="scorecard-input">{scorecard.parSix}</p>
          <p className="scorecard-input">{scorecard.parSeven}</p>
          <p className="scorecard-input">{scorecard.parEight}</p>
          <p className="scorecard-input">{scorecard.parNine}</p>
          <p className="scorecard-input">{scorecard.parTen}</p>
          <p className="scorecard-input">{scorecard.parEleven}</p>
          <p className="scorecard-input">{scorecard.parTwelve}</p>
          <p className="scorecard-input">{scorecard.parThirteen}</p>
          <p className="scorecard-input">{scorecard.parFourteen}</p>
          <p className="scorecard-input">{scorecard.parFifteen}</p>
          <p className="scorecard-input">{scorecard.parSixteen}</p>
          <p className="scorecard-input">{scorecard.parSeventeen}</p>
          <p className="scorecard-input">{scorecard.parEighteen}</p>
        </span>
      </div>
      <div className="flex justify-end basis-1/6 items-center mr-4">
        <p className="underline underline-offset-4">
          SCORE:{" "}
          {scorecard.score >= 0 ? `+${scorecard.score}` : `${scorecard.score}`}
        </p>
      </div>
    </div>
  );
}

export default Scorecard;
