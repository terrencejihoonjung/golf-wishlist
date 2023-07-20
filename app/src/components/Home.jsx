import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div class="flex h-160">
        <div class="flex flex-col basis-1/2 justify-center items-center">
          <h2 class="text-xl font-bold mb-3">Track Your Score</h2>
          <p class="text-base text-center">
            Track your golf progress with <br />
            simple and easy-to-use digital scorecards
          </p>
        </div>

        <div class="flex basis-1/2 justify-center items-center">
          <p class="text-base text-center">Scorecard template here</p>
        </div>
      </div>

      <div class="flex h-160">
        <div class="flex basis-1/2 justify-center items-center">
          <p class="text-base text-center">Yardage template here</p>
        </div>

        <div class="flex flex-col basis-1/2 justify-center items-center">
          <h2 class="text-xl font-bold mb-3">Personalized Yardages</h2>
          <p class="text-base text-center">
            Record your current yardages <br />
            and update them in your profile.
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center h-160">
        <h2 class="m-3 text-xl">Contact Info</h2>
        <nav class="w-full py-5">
          <Link class="mx-4" to="https://github.com/terrencejihoonjung">
            Github
          </Link>
          <Link class="mx-4" to="https://www.linkedin.com/in/terrencejung/">
            LinkedIn
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Home;
