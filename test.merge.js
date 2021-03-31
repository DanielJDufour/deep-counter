const test = require("flug");

const merge = require("./merge-counts");

test("merging results", ({ eq }) => {
  const from = {
    numbers: {
      1: { count: 123, value: 1 },
      2: { count: 345, value: 2 },
      4: { count: 856, value: 4 }
    },
    strings: {
      "a": { count: 452, at_start_of_string: 0, at_end_of_string: 0 },
      "The": { count: 723, at_start_of_string: 49, at_end_of_string: 0 }
    }
  };
  const into = {
    numbers: {
      1: { count: 400, value: 1 }
    },
    strings: {
      "The": { count: 100, at_start_of_string: 0, at_end_of_string: 4 }
    }
  };
  merge({ from, into });
  eq(into, {
    numbers: {
      1: { count: 523, value: 1 },
      2: { count: 345, value: 2 },
      4: { count: 856, value: 4 }      
    },
    strings: {
      "a": { count: 452, at_start_of_string: 0, at_end_of_string: 0 },
      "The": { count: 823, at_start_of_string: 49, at_end_of_string: 4 }      
    }
  });
});
