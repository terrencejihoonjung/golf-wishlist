import { UserIcon } from "@heroicons/react/24/outline";

function Profile() {
  return (
    <>
      <div class="flex h-160">
        <div class="flex flex-col basis-1/3 items-center">
          <div class="w-60 h-60 border rounded-full shadow-lg">
            <UserIcon />
          </div>

          <h2 class="text-xl text-bold mt-4">Terrence Jung</h2>
          <h3 class="text-md text-bold">Amateur</h3>
        </div>

        <div class="flex basis-2/3 justify-center">
          <div class="lg:w-224 md:w-128 sm:w-96 h-128 flex flex-col border-2 border-slate-700/50 rounded-2xl shadow-md">
            <h2 class="text-2xl text-bold p-4">My Yardage</h2>

            <div class="flex w-full h-96">
              <div class="flex flex-col justify-around items-center h-full basis-1/3">
                <label>
                  DRIVER
                  <input class="club" type="text" name="driver" />
                  yds
                </label>

                <label>
                  3-WOOD
                  <input class="club" type="text" name="three-wood" />
                  yds
                </label>

                <label>
                  5-WOOD
                  <input class="club" type="text" name="five-wood" />
                  yds
                </label>

                <label>
                  HYBRID
                  <input class="club" type="text" name="hybrid" />
                  yds
                </label>

                <label>
                  3-IRON
                  <input class="club" type="text" name="three-iron" />
                  yds
                </label>
              </div>

              <div class="flex flex-col justify-around items-center h-full basis-1/3">
                <label>
                  4-IRON
                  <input class="club" type="text" name="four-iron" />
                  yds
                </label>

                <label>
                  5-IRON
                  <input class="club" type="text" name="five-iron" />
                  yds
                </label>

                <label>
                  6-IRON
                  <input class="club" type="text" name="six-iron" />
                  yds
                </label>

                <label>
                  7-IRON
                  <input class="club" type="text" name="seven-iron" />
                  yds
                </label>

                <label>
                  8-IRON
                  <input class="club" type="text" name="eight-iron" />
                  yds
                </label>
              </div>

              <div class="flex flex-col justify-around items-center h-full basis-1/3">
                <label>
                  9-IRON
                  <input class="club" type="text" name="nine-iron" />
                  yds
                </label>

                <label>
                  PW
                  <input class="club" type="text" name="pw" />
                  yds
                </label>

                <label>
                  GW
                  <input class="club" type="text" name="gw" />
                  yds
                </label>

                <label>
                  SW
                  <input class="club" type="text" name="sw" />
                  yds
                </label>

                <label>
                  LW
                  <input class="club" type="text" name="lw" />
                  yds
                </label>
              </div>
            </div>

            <div class="flex justify-end">
              <button class="my-2 mx-6 bg-zanah-500 p-1 w-20 rounded-full text-slate-100">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="h-192">
        <h1 class="pl-40 underline text-2xl text-extrabold">My Scorecards</h1>
      </div>
    </>
  );
}

export default Profile;
