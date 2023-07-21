import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import YardageForm from "./YardageForm";
import YardageDisplay from "./YardageDisplay";

function Profile() {
  const [yardages, setYardages] = useState({
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
  });
  const [isEditing, setIsEditing] = useState(false);
  const [distance, setDistance] = useState("yds");
  const [handicap, setHandicap] = useState("");

  function handleEdit() {
    setIsEditing(!isEditing);
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

      <div className="h-full">
        <div className="flex justify-between w-full">
          <h1 className="ml-48 underline text-2xl text-extrabold">
            My Scorecards
          </h1>
          <button className="mr-32 text-lg hover:text-zanah-500">
            Add Scorecard
          </button>
        </div>

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
              <div>hole, handicap, and par</div>
            </div>
          </div>

          <div className="flex justify-end h-16 w-full items-center">
            <button className="mr-4 hover:text-zanah-500" type="submit">
              Submit
            </button>
          </div>
        </form>

        <div className="h-192 w-full text-center">
          <h1 className="text-2xl">LIST</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
