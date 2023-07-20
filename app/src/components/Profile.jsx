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
          <h3 className="text-md text-bold">Amateur</h3>
        </div>

        <div className="flex basis-2/3 justify-center">
          <div className="lg:w-224 md:w-128 sm:w-96 h-128 flex flex-col border-2 border-slate-700/50 rounded-3xl shadow-md">
            <h2 className="text-2xl text-bold p-5">My Yardages</h2>

            <YardageDisplay yardages={yardages} />

            <div className="flex justify-end">
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
                <YardageForm yardages={yardages} setYardages={setYardages} />
                <div className="modal-action flex justify-end mr-10 mt-4">
                  <button
                    onClick={() => handleEdit()}
                    className="hover:text-zanah-500 mr-6"
                  >
                    Cancel
                  </button>
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

      <div className="h-192">
        <h1 className="pl-40 underline text-2xl text-extrabold">
          My Scorecards
        </h1>
      </div>
    </div>
  );
}

export default Profile;
