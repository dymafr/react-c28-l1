import { useState, useTransition } from "react";
import { wait } from "./utils";

function App() {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  const handleSubmit =  (event) => {
    event.preventDefault();
    startTransition(async () => {
      try {
       const res = await wait(3000, true);
      } catch (e) {
        setError(e);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-20">
      <div className="mb-20">
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            if (error) {
              setError(null);
            }
          }}
          type="text"
          placeholder="Enter your name"
          name="name"
        />
        <p>{error}</p>
      </div>
      <button disabled={isPending} className="btn btn-primary">
      {isPending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

export default App;