import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <>
      <h1 className="bg-neutral-50 flex justify-center text-4xl pt-7">
        My Golf Tracker
      </h1>

      <Navigation />

      <main className="bg-neutral-50 w-full h-full pt-6">
        <Outlet />;
      </main>
    </>
  );
}

export default Layout;
