import "./App.css";
import CustomizedTables from "./CustomizedTables";
import { useEffect, useState } from "react";

// const data = [
//   {
//     _id: "61ae6fb13383a993e4a324a1",
//     products: "Fastrack Watch",
//     user: "Shubham",
//     email: "kr.shubham025@gmail.com",
//     address: "Patna Bihar",
//     order_date: "2021-12-06T20:16:49.103Z",
//     price: 4999,
//     payment_mode: "COD",
//   },
//   {
//     _id: "61ae70303383a993e4a324a2",
//     products: "Dell Laptop",
//     user: "Rakesh",
//     email: "rakesh@gmail.com",
//     address: "Delhi",
//     order_date: "2021-12-06T20:18:56.397Z",
//     price: 79999,
//     payment_mode: "Prepaid",
//   },
//   {
//     _id: "61ae70bf3383a993e4a324a3",
//     products: "Redmi Note 9 Pro",
//     user: "raj",
//     email: "raj@gmail.com",
//     address: "Mumbai",
//     order_date: "2021-12-06T20:21:19.181Z",
//     price: 13999,
//     payment_mode: "Prepaid",
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://localhost:8000/order`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log("res is", res);
      })
      .catch(() => {
        console.log("Error in fetching data");
      });
  };

  return (
    <div
      className="app"
      style={{ padding: "20px", width: "70%", margin: " auto" }}
    >
      <CustomizedTables data={data} />
    </div>
  );
}

export default App;
