import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <div className="text-center mx-96 my-32 font-alata">
        <h1 className="py-12 bg-brown rounded-t-lg text-3xl text-white">
          Todo List
        </h1>
        <div className="bg-amber-100 border border-amber-100 rounded-b-lg">
          <InputTodo />
          <ListTodo />
        </div>
      </div>
    </>
  );
}

export default App;
