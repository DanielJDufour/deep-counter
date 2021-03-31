module.exports = ({ from, into }) => {
  Object.entries(from).forEach(([type, counts]) => {
    if (type in into) {
      Object.entries(counts).forEach(([token, info]) => {
        // console.log("into:", into);
        // console.log("type:", type);
        if (token in into[type]) {
          // iterate over values if it's a number add it
          Object.entries(info).forEach(([key, count]) => {
            if (key !== "value") {
              // console.log({key, count});
              if (key in into[type][token]) {
                into[type][token][key] += count;
              } else {
                into[type][token][key] = count;
              }
            }
          });
        } else {
          into[type][token] = info;
        }
      });
    } else {
      into[type] = counts;
    }
  });
};
