const { forEach } = require("advarr");

const merge = require("./merge-counts");

const count = (options) => {

  let {
    data,
    debug,
    count_numbers=true,
    count_strings=true,
    split_strings_on=" "
  } = options;

  if (!('data' in options)) throw new Error("[deep-counter] you called count without a data property set")

  const results = {
    strings: {},
    numbers: {}
  };

  if (Array.isArray(data)) {
    forEach(data, ({ value }) => {
      merge({
        from: count({ ...options, data: value }),
        into: results
      });
    });
  } else if (typeof data === "object") {
    merge({
      from: count({ ...options, data: Object.keys(data) }),
      into: results
    });
    merge({
      from: count({ ...options, data: Object.values(data) }),
      into: results
    });
  } else if (typeof data === "string") {
    if (count_strings) {
      const tokens = data.split(split_strings_on);
      forEach(tokens, ({ value: token, last, first }) => {    
        if (token in results.strings) {
          results.strings[token].count++;
        } else {
          results.strings[token] = {
            value: token,
            count: 1,
            first: 0,
            last: 0
          };
        }
        if (first) results.strings[token].first++
        if (last) results.strings[token].last++
      });
    }
  } else if (typeof data === "number") {
    if (count_numbers) {
      if (data in results.numbers) {
        results.numbers[data].count++;
      } else {
        results.numbers[data] = { count: 1, value: data };
      }
    }
  }
  return results;
};

module.exports = count;

