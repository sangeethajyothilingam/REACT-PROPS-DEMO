import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

var priceCards = [
  {
    plan: "Free",
    price: "0",
    buttonOutline: true,
    features: [
      {
        title: "10 users included",
      },
      {
        title: "2 GB of storage",
      },
      {
        title: "Email support",
      },
      {
        title: "Help center access",
      },
    ],
  },
  {
    plan: "Pro",
    price: "10",
    buttonOutline: false,
    features: [
      {
        title: "20 users included",
      },
      {
        title: "10 GB of storage",
      },
      {
        title: "Priority email support",
      },
      {
        title: "Help center access",
      },
    ],
  },
  {
    plan: "Enterprise",
    price: "20",
    buttonOutline: false,
    highlight: true,
    features: [
      {
        title: "30 users included",
      },
      {
        title: "15 GB of storage",
      },
      {
        title: "Phone and email support",
      },
      {
        title: "Help center access",
      },
    ],
  },
  {
    plan: "Enterprise",
    price: "20",
    buttonOutline: false,
    features: [
      {
        title: "40 users included",
      },
      {
        title: "15 GB of storage",
      },
      {
        title: "Phone and email support",
      },
      {
        title: "Help center access",
      },
    ],
  },
];

function App() {
  return (
    <div className="container">
      <div className="row mt-3">
        {priceCards.map((card) => {
          return <Card card={card}></Card>;
        })}
      </div>
    </div>
  );
}
export default App;
