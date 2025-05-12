import Accordion from "./components/Accordion.js";
function App() {
  const items = [
    {
      id: "12",
      label: "can I use react on a project ?",
      content: "yes of course,yes of course,yes of course",
    },
    {
      id: "13",
      label: "can I use javascript on a project ?",
      content: "yes of courseyes of course,yes of course,yes of course",
    },

    {
      id: "14",
      label: "can I use tailwind on a project ?",
      content: "yes of courseyes of course,yes of course,yes of course",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
