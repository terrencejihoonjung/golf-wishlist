function Scorecard({ scorecard }) {
  return (
    <div className="flex flex-col h-128 border p-4 rounded-2xl">
      <h2 className=" text-zanah-950">
        This is location {"(Tee)"} - This is date
      </h2>
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
          <input
            type="text"
            value={scorecard.hOne}
            onChange={(e) =>
              setScorecard({ ...scorecard, hOne: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hTwo}
            onChange={(e) =>
              setScorecard({ ...scorecard, hTwo: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hThree}
            onChange={(e) =>
              setScorecard({ ...scorecard, hThree: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hFour}
            onChange={(e) =>
              setScorecard({ ...scorecard, hFour: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hFive}
            onChange={(e) =>
              setScorecard({ ...scorecard, hFive: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hSix}
            onChange={(e) =>
              setScorecard({ ...scorecard, hSix: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hSeven}
            onChange={(e) =>
              setScorecard({ ...scorecard, hSeven: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hEight}
            onChange={(e) =>
              setScorecard({ ...scorecard, hEight: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hNine}
            onChange={(e) =>
              setScorecard({ ...scorecard, hNine: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hTen}
            onChange={(e) =>
              setScorecard({ ...scorecard, hTen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hEleven}
            onChange={(e) =>
              setScorecard({ ...scorecard, hEleven: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hTwelve}
            onChange={(e) =>
              setScorecard({ ...scorecard, hTwelve: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hThirteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, hThirteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hFourteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, hFourteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hFifteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, hFifteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hSixteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, hSixteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hSeventeen}
            onChange={(e) =>
              setScorecard({ ...scorecard, hSeventeen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.hEighteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, hEighteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
        </span>

        <span className="flex flex-row justify-around">
          <h3 className="w-8">TJ: </h3>
          <input
            type="text"
            value={scorecard.myOne}
            onChange={(e) =>
              setScorecard({ ...scorecard, myOne: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myTwo}
            onChange={(e) =>
              setScorecard({ ...scorecard, myTwo: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myThree}
            onChange={(e) =>
              setScorecard({ ...scorecard, myThree: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myFour}
            onChange={(e) =>
              setScorecard({ ...scorecard, myFour: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myFive}
            onChange={(e) =>
              setScorecard({ ...scorecard, myFive: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.mySix}
            onChange={(e) =>
              setScorecard({ ...scorecard, mySix: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.mySeven}
            onChange={(e) =>
              setScorecard({ ...scorecard, mySeven: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myEight}
            onChange={(e) =>
              setScorecard({ ...scorecard, myEight: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myNine}
            onChange={(e) =>
              setScorecard({ ...scorecard, myNine: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myTen}
            onChange={(e) =>
              setScorecard({ ...scorecard, myTen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myEleven}
            onChange={(e) =>
              setScorecard({ ...scorecard, myEleven: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myTwelve}
            onChange={(e) =>
              setScorecard({ ...scorecard, myTwelve: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myThirteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, myThirteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myFourteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, myFourteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myFifteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, myFifteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.mySixteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, mySixteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.mySeventeen}
            onChange={(e) =>
              setScorecard({ ...scorecard, mySeventeen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.myEighteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, myEighteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
        </span>

        <span className="flex flex-row justify-around">
          <h3 className="w-8">Par: </h3>
          <input
            type="text"
            value={scorecard.parOne}
            onChange={(e) =>
              setScorecard({ ...scorecard, parOne: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parTwo}
            onChange={(e) =>
              setScorecard({ ...scorecard, parTwo: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parThree}
            onChange={(e) =>
              setScorecard({ ...scorecard, parThree: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parFour}
            onChange={(e) =>
              setScorecard({ ...scorecard, parFour: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parFive}
            onChange={(e) =>
              setScorecard({ ...scorecard, parFive: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parSix}
            onChange={(e) =>
              setScorecard({ ...scorecard, parSix: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parSeven}
            onChange={(e) =>
              setScorecard({ ...scorecard, parSeven: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parEight}
            onChange={(e) =>
              setScorecard({ ...scorecard, parEight: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parNine}
            onChange={(e) =>
              setScorecard({ ...scorecard, parNine: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parTen}
            onChange={(e) =>
              setScorecard({ ...scorecard, parTen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parEleven}
            onChange={(e) =>
              setScorecard({ ...scorecard, parEleven: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parTwelve}
            onChange={(e) =>
              setScorecard({ ...scorecard, parTwelve: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parThirteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, parThirteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parFourteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, parFourteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parFifteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, parFifteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parSixteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, parSixteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parSeventeen}
            onChange={(e) =>
              setScorecard({ ...scorecard, parSeventeen: e.target.value })
            }
            className="scorecard-input"
          ></input>
          <input
            type="text"
            value={scorecard.parEighteen}
            onChange={(e) =>
              setScorecard({ ...scorecard, parEighteen: e.target.value })
            }
            className="scorecard-input"
          ></input>
        </span>
      </div>
      <div className="flex justify-end basis-1/6 items-center mr-4">
        <p className="underline underline-offset-4">SCORE: +4</p>
      </div>
    </div>
  );
}

export default Scorecard;
