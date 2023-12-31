import { Link, useLocation } from "react-router-dom";
import "../../../../App.css";
import Avt from "../../../../img/avt/avt.jpg";
import { Paths } from "./Paths";

function App() {
  const currentPath = useLocation().pathname;
  const isCurrentPath = (path) => {
    return currentPath === path || currentPath.startsWith(path);
  };
  return (
    <div className="w-1/5 p-4 bg-white flex-col border-2 border-rose-600">
      <div className="p-4 bg-white flex-col border-2 border-rose-200">
        <div className="justify-center flex">
          <img src={Avt} alt="" className="w-20"></img>
        </div>
        <div className="justify-center flex mt-5">ADMIN</div>
      </div>
      {Paths.map((path, index) => {
        return (
          <Link
            to={path.to}
            key={index}
            className={`block p-2 my-4 hover:bg-yellow-400 bg-gray-100 ${
              isCurrentPath(path.to) ? "bg-yellow-400" : "bg-gray-100"
            }`}
          >
            {path.page}
          </Link>
        );
      })}
    </div>
  );
}

export default App;
