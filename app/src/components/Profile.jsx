import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import YardageForm from "./YardageForm";
import YardageDisplay from "./YardageDisplay";
import ScorecardForm from "./ScorecardForm";
import ScorecardList from "./ScorecardList";

function Profile() {
  const initialScorecard = {
    hOne: "",
    hTwo: "",
    hThree: "",
    hFour: "",
    hFive: "",
    hSix: "",
    hSeven: "",
    hEight: "",
    hNine: "",
    hTen: "",
    hEleven: "",
    hTwelve: "",
    hThirteen: "",
    hFourteen: "",
    hFifteen: "",
    hSixteen: "",
    hSeventeen: "",
    hEighteen: "",
    myOne: "",
    myTwo: "",
    myThree: "",
    myFour: "",
    myFive: "",
    mySix: "",
    mySeven: "",
    myEight: "",
    myNine: "",
    myTen: "",
    myEleven: "",
    myTwelve: "",
    myThirteen: "",
    myFourteen: "",
    myFifteen: "",
    mySixteen: "",
    mySeventeen: "",
    myEighteen: "",
    parOne: "",
    parTwo: "",
    parThree: "",
    parFour: "",
    parFive: "",
    parSix: "",
    parSeven: "",
    parEight: "",
    parNine: "",
    parTen: "",
    parEleven: "",
    parTwelve: "",
    parThirteen: "",
    parFourteen: "",
    parFifteen: "",
    parSixteen: "",
    parSeventeen: "",
    parEighteen: "",
  };
  const initialYardages = {
    driver: 0,
    threeWood: 0,
    fiveWood: 0,
    hybrid: 0,
    threeIron: 0,
    fourIron: 0,
    fiveIron: 0,
    sixIron: 0,
    sevenIron: 0,
    eightIron: 0,
    nineIron: 0,
    pitchingWedge: 0,
    gapWedge: 0,
    sandWedge: 0,
    lobWedge: 0,
  };
  const [yardages, setYardages] = useState(initialYardages);
  const [scorecard, setScorecard] = useState(initialScorecard);

  const [scorecards, setScorecards] = useState([]);
  const [addScorecard, setAddScorecard] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [distance, setDistance] = useState("yds");
  const [handicap, setHandicap] = useState("");

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  function toggleScorecardForm() {
    setAddScorecard(!addScorecard);
  }

  function handleScorecardSubmit(e) {
    e.preventDefault();
    setScorecards((scorecards) => [scorecard, ...scorecards]);
    setScorecard(initialScorecard);
  }

  return (
    <div className={isEditing ? "blur-sm" : "blur-none"}>
      <div className="flex h-160">
        <div className="flex flex-col basis-1/3 items-center">
          <div className="w-60 h-60 border rounded-full shadow-lg">
            <UserIcon />
          </div>

          <h2 className="text-xl text-bold mt-4">Terrence Jung</h2>
          <select name="exp" id="exp">
            <option value="amateur">Amateur</option>
            <option value="pro">Pro</option>
            <option value="master">Master</option>
          </select>

          <label className="mt-2">
            HC:{" "}
            <input
              className="w-12"
              type="text"
              value={handicap}
              onChange={(e) => setHandicap(e.target.value)}
            />
          </label>
        </div>

        <div className="flex basis-2/3 justify-center">
          <div className="lg:w-224 md:w-128 sm:w-96 h-128 flex flex-col border-2 border-slate-700/50 rounded-3xl shadow-md">
            <h2 className="text-2xl text-bold p-5">My Yardages</h2>

            <YardageDisplay distance={distance} yardages={yardages} />

            <div className="flex justify-end items-baseline">
              <div className="flex items-center mx-2">
                <input
                  id="yard-radio"
                  type="radio"
                  value={distance}
                  checked={distance === "yds"}
                  name="yards"
                  className="radio-button"
                  onChange={() => setDistance("yds")}
                />
                <label
                  htmlFor="yard-radio"
                  className="ml-2 text-sm font-medium text-slate-500"
                >
                  Yards
                </label>
              </div>
              <div className="flex items-center mx-2">
                <input
                  id="meter-radio"
                  type="radio"
                  value={distance}
                  checked={distance === "m"}
                  name="meters"
                  className="radio-button"
                  onChange={() => setDistance("m")}
                />
                <label
                  htmlFor="meter-radio"
                  className="ml-2 text-sm font-medium text-slate-500"
                >
                  Meters
                </label>
              </div>
              <button
                className="my-2 mx-6 bg-zanah-500 p-1 w-20 rounded-full text-slate-100"
                onClick={() => {
                  handleEdit();
                  window.yardage_form.showModal();
                }}
              >
                Edit
              </button>
            </div>

            <dialog id="yardage_form" className="modal rounded-3xl">
              <form
                method="dialog"
                className="modal-box lg:w-224 md:w-128 sm:w-96 h-128"
              >
                <h3 className="text-2xl text-bold p-5">New Yardages</h3>
                <YardageForm
                  yardages={yardages}
                  setYardages={setYardages}
                  distance={distance}
                />
                <div className="modal-action flex justify-end mr-10 mt-4">
                  <button
                    onClick={() => handleEdit()}
                    className="hover:text-zanah-500"
                  >
                    Save
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>

      <div className="h-full mt-24 pb-32">
        <div className="flex justify-between w-full">
          <h1 className="ml-36 underline text-2xl text-extrabold">
            My Scorecards
          </h1>
          <button
            onClick={() => toggleScorecardForm()}
            className="mr-36 text-lg hover:text-zanah-500"
          >
            {addScorecard ? "Close" : "Add Scorecard"}
          </button>
        </div>

        {addScorecard && (
          <ScorecardForm
            scorecard={scorecard}
            setScorecard={setScorecard}
            handleScorecardSubmit={handleScorecardSubmit}
          />
        )}

        <ScorecardList scorecard={scorecard} scorecards={scorecards} />
      </div>
    </div>
  );
}

export default Profile;
