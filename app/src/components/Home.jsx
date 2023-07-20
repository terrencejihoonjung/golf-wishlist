import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex h-160">
        <div className="flex flex-col basis-1/2 justify-center items-center">
          <h2 className="text-xl font-bold mb-3">Track Your Score</h2>
          <p className="text-base text-center">
            Track your golf progress with <br />
            simple and easy-to-use digital scorecards
          </p>
        </div>

        <div className="flex basis-1/2 justify-center items-center">
          <p class="text-base text-center">Scorecard template here</p>
        </div>
      </div>

      <div className="flex h-160">
        <div className="flex basis-1/2 justify-center items-center">
          <p className="text-base text-center">Yardage template here</p>
        </div>

        <div className="flex flex-col basis-1/2 justify-center items-center">
          <h2 className="text-xl font-bold mb-3">Personalized Yardages</h2>
          <p className="text-base text-center">
            Record your current yardages <br />
            and update them in your profile.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-160">
        <h2 className="m-3 text-xl">Contact Info</h2>
        <nav className="w-full py-5">
          <Link className="mx-4" to="https://github.com/terrencejihoonjung">
            Github
          </Link>
          <Link className="mx-4" to="https://www.linkedin.com/in/terrencejung/">
            LinkedIn
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Home;
