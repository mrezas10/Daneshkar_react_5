const data = [
    {
      id: 1,
      name: "buy list",
      isDone: "notDone",
      showItems: "closed",
      items: [
        {
          id: 1,
          title: "milk",
          status: "notDone",
        },
        {
          id: 2,
          title: "cheese",
          status: "notDone",
        },
      ],
    },
    {
      id: 2,
      name: "buy list",
      isDone: "notDone",
      showItems: "closed",
      items: [
        {
          id: 1,
          title: "milk",
          status: "notDone",
        },
        {
          id: 2,
          title: "cheese",
          status: "notDone",
        },
      ],
    },
  ];
  
  export const makeRandomID = () => {
    return parseInt(Math.random() * 10000);
  };
  
  export default data;
  