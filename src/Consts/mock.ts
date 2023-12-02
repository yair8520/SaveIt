import { TExpenses } from "@/types/Expenses";

const fakeExpenses: TExpenses = {
  "2021": {
    January: {
      data: [
        {
          amount: 120.5,
          creditNum: 1234567890123456,
          date: "2021-01-05",
          category: ["Groceries"],
        },
        {
          amount: 45.75,
          creditNum: 9876543210987654,
          date: "2021-01-15",
          category: ["Entertainment"],
        },
      ],
    },
    February: {
      data: [
        {
          amount: 200.0,
          creditNum: 1111222233334444,
          date: "2021-02-10",
          category: ["Utilities"],
        },
        {
          amount: 75.2,
          creditNum: 4444333322221111,
          date: "2021-02-20",
          category: ["Dining"],
        },
      ],
    },
  },
  "2022": {
    March: {
      data: [
        {
          amount: 150.8,
          creditNum: 5555666677778888,
          date: "2022-03-08",
          category: ["Shopping"],
        },
        {
          amount: 90.45,
          creditNum: 9999888877776666,
          date: "2022-03-18",
          category: ["Health"],
        },
      ],
    },
    April: {
      data: [
        {
          amount: 180.6,
          creditNum: 1234432156789876,
          date: "2022-04-12",
          category: ["Travel"],
        },
        {
          amount: 60.3,
          creditNum: 9876123456784321,
          date: "2022-04-22",
          category: ["Technology"],
        },
      ],
    },
  },
};

console.log(fakeExpenses);
