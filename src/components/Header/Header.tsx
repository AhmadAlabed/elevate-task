import { toast } from "react-toastify";
import Button from "../ui/Button/Button";
import ThemeSwitch from "../ui/ThemeSwitch/ThemeSwitch";

const Header = () => {
  const clickHandler = () => {
    toast.info("This feature is not available yet 🙏");
  };
  return (
    <>
      <header className="">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-end ">
            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <Button
                  type="button"
                  className=""
                  variant="containedReversed"
                  onClick={clickHandler}
                >
                  <span className="">Login</span>
                </Button>
                <Button
                  type="button"
                  className=""
                  variant="contained"
                  onClick={clickHandler}
                >
                  <span className="">Register</span>
                </Button>
                <ThemeSwitch />
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
