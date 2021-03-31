const test = require("flug");

const count = require("./deep-counter");

test("count numbers in an array", ({ eq }) => {
  const data = [1, 2, 2, 3, 3, 3];
  const results = count({ data });
  eq(results, {
    numbers: {
      1: { count: 1, value: 1 },
      2: { count: 2, value: 2 },
      3: { count: 3, value: 3 }
    },
    strings: {}
  })
});

test("count words in a string", ({ eq }) => {
  const data = "the cow jumped over the moon";
  const results = count({ data });
  eq(results, {
    strings: {
      "the": { count: 2, first: 1, last: 0, value: "the" },
      "cow": { count: 1, first: 0, last: 0, value: "cow" },
      "jumped": { count: 1, first: 0, last: 0, value: "jumped" },
      "over": { count: 1, first: 0, last: 0, value: "over" },
      "moon": { count: 1, first: 0, last: 1, value: "moon" }
    },
    numbers: {}
  })
});

test("count mixed data", ({ eq }) => {
  const data = [123, "The person is tall", "The apple fell from the tree", 234, 234];
  const results = count({ data });
  eq(results, {
    strings: {
      The: { value: 'The', count: 2, first: 2, last: 0 },
      person: { value: 'person', count: 1, first: 0, last: 0 },
      is: { value: 'is', count: 1, first: 0, last: 0 },
      tall: { value: 'tall', count: 1, first: 0, last: 1 },
      apple: { value: 'apple', count: 1, first: 0, last: 0 },
      fell: { value: 'fell', count: 1, first: 0, last: 0 },
      from: { value: 'from', count: 1, first: 0, last: 0 },
      the: { value: 'the', count: 1, first: 0, last: 0 },
      tree: { value: 'tree', count: 1, first: 0, last: 1 }
    },
    numbers: { '123': { count: 1, value: 123 }, '234': { count: 2, value: 234 } }
  })
});

test("count nested data", ({ eq }) => {
  const presidents = [
    { number: 1, name: "George Washington" },
    { number: 2, name: "John Adams" },
    { number: 3, name: "Thomas Jefferson" },
    { number: 4, name: "James Madison" },
    { number: 5, name: "James Monroe" },
    { number: 6, name: "John Quincy Adams" }
  ];
  const results = count({ data: presidents });
  eq(results, {
    strings: {
      number: { value: 'number', count: 6, first: 6, last: 6 },
      name: { value: 'name', count: 6, first: 6, last: 6 },
      George: { value: 'George', count: 1, first: 1, last: 0 },
      Washington: { value: 'Washington', count: 1, first: 0, last: 1 },
      John: { value: 'John', count: 2, first: 2, last: 0 },
      Adams: { value: 'Adams', count: 2, first: 0, last: 2 },
      Thomas: { value: 'Thomas', count: 1, first: 1, last: 0 },
      Jefferson: { value: 'Jefferson', count: 1, first: 0, last: 1 },
      James: { value: 'James', count: 2, first: 2, last: 0 },
      Madison: { value: 'Madison', count: 1, first: 0, last: 1 },
      Monroe: { value: 'Monroe', count: 1, first: 0, last: 1 },
      Quincy: { value: 'Quincy', count: 1, first: 0, last: 0 }
    },
    numbers: {
      '1': { count: 1, value: 1 },
      '2': { count: 1, value: 2 },
      '3': { count: 1, value: 3 },
      '4': { count: 1, value: 4 },
      '5': { count: 1, value: 5 },
      '6': { count: 1, value: 6 }
    }    
  });
});
