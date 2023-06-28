import { Link } from "react-router-dom";
import Button from "../components/Button";
import Profile from "./Profile";
import Photo from "../containers/Photo";
import { useState } from "react";

const Dashboard = () => {
  const [count, setCount] = useState(1);
  console.log(count);

  return (
    <>
      <div>Dashboard</div>

      <div>
        <Button
          style={{
            color: "red",
          }}
        >
          Hitung 1
        </Button>

        <Button
          style={{
            color: "blue",
          }}
        >
          Hitung 2
        </Button>
        <Button
          style={{
            color: "green",
          }}
        >
          Hitung 3
        </Button>
      </div>

      <div>
        <Link to="/profile">link ke halaman Profile</Link>
      </div>

      {Array(3)
        .fill(null)
        .map((_, key) => (
          <Photo index={key + count} key={key + count} />
        ))}

      <Button
        style={{
          color: "green",
        }}
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}
      >
        PREVIOUS
      </Button>
      <Button
        style={{
          color: "green",
        }}
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        NEXT
      </Button>
    </>
  );
};

export default Dashboard;
