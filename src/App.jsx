import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import ActiveTodo from "./pages/ActiveTodo";
import CompletedTodo from "./pages/CompletedTodo";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="text-center mx-96 my-32 font-alata">
          <h1 className="py-12 bg-brown rounded-t-lg text-3xl text-white">
            Todo List
          </h1>
          <div className="bg-amber-100 border border-amber-100 rounded-b-lg">
            <InputTodo />
            <ul className="flex">
              <li>
                <Link
                  to="/"
                  className=" bg-white py-2 px-4 rounded-xl ml-9 mr-4 focus:bg-brown focus:text-white"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  to="/active"
                  className=" bg-white py-2 px-4 rounded-xl mx-4 focus:bg-brown focus:text-white"
                >
                  Active
                </Link>
              </li>
              <li>
                <Link
                  to="/completed"
                  className=" bg-white py-2 px-4 rounded-xl mx-4 focus:bg-brown focus:text-white"
                >
                  Complete
                </Link>
              </li>
            </ul>
            {/* <ListTodo /> */}
            <Routes>
              <Route path="/" element={<ListTodo />} />
              <Route path="/active" element={<ActiveTodo />} />
              <Route path="/completed" element={<CompletedTodo />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
