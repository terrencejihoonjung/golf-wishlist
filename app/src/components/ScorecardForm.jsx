function ScorecardForm({ scorecard }) {
  return (
    <form className="h-128 mx-80 my-8 border-4 border-slate-100 rounded-2xl">
      <div className="flex h-112">
        <div className="flex flex-col justify-around items-base basis-1/3 border pl-6">
          <label>
            Date:
            <input className="scorecard w-20" type="date"></input>
          </label>

          <label>
            Location:
            <input className="scorecard w-48" type="text"></input>
          </label>

          <label>
            Tee Box:{" "}
            <select name="tee-box">
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col basis-2/3 border">
          <h2 className="ml-2 mt-2">Enter Hole Information</h2>
          <div className="flex flex-col justify-around h-full">
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
              <input
                type="text"
                value={scorecard.hOne}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hTwo}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hThree}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hFour}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hFive}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hSix}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hSeven}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hEight}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hNine}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hTen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hEleven}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hTwelve}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hThirteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hFourteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hFifteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hSixteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hSeventeen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.hEighteen}
                className="scorecard-input"
              ></input>
            </span>

            <span className="flex flex-row justify-around">
              <h3 className="w-8">TJ: </h3>
              <input
                type="text"
                value={scorecard.myOne}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myTwo}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myThree}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myFour}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myFive}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.mySix}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.mySeven}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myEight}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myNine}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myTen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myEleven}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myTwelve}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myThirteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myFourteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myFifteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.mySixteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.mySeventeen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.myEighteen}
                className="scorecard-input"
              ></input>
            </span>

            <span className="flex flex-row justify-around">
              <h3 className="w-8">Par: </h3>
              <input
                type="text"
                value={scorecard.parOne}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parTwo}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parThree}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parFour}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parFive}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parSix}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parSeven}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parEight}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parNine}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parTen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parEleven}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parTwelve}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parThirteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parFourteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parFifteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parSixteen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parSeventeen}
                className="scorecard-input"
              ></input>
              <input
                type="text"
                value={scorecard.parEighteen}
                className="scorecard-input"
              ></input>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end h-16 w-full items-center">
        <button className="mr-4 hover:text-zanah-500" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ScorecardForm;
