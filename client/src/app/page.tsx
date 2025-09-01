import Image from "next/image"; 
import "./style.css"; 
 import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />

        <div className="landing">
          <Image src="/landing8.jpeg" alt="" width={500} height={400} />
          <div className="info">
            <h3>
              Manage your finances effortlessly <br /> Take control of your money today
            </h3>
            <button>Start today!</button>
          </div>
        </div>

        <div className="moreinfo">
          <ul>
            <li>
              <h2>🔒 Secure & Safe</h2>
              <p>Advanced protection for your data and transactions</p>
            </li>
            <li>
              <h2>📤 Easy Transfers</h2>
              <p>Send and receive money in seconds</p>
            </li>
            <li>
              <h2>🧐 Track Spending</h2>
              <p>Monitor your expenses and stay in control</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
