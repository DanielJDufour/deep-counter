# deep-counter
Count Numbers and Words in JSON Data

# install
```bash
npm install deep-counter
```

# usage
```javascript
const count = require("deep-counter");

const presidents = [
  { number: 1, name: "George Washington" },
  { number: 2, name: "John Adams" },
  { number: 3, name: "Thomas Jefferson" },
  { number: 4, name: "James Madison" },
  { number: 5, name: "James Monroe" },
  { number: 6, name: "John Quincy Adams" }
];

const results = count({ data: presidents });
```
results is the following
```json
{
  "strings": {
    "number": { "value": "number", "count": 6, "first": 6, "last": 6 },
    "name": { "value": "name", "count": 6, "first": 6, "last": 6 },
    "George": { "value": "George", "count": 1, "first": 1, "last": 0 },
    "Washington": { "value": "Washington", "count": 1, "first": 0, "last": 1 },
    "John": { "value": "John", "count": 2, "first": 2, "last": 0 },
    "Adams": { "value": "Adams", "count": 2, "first": 0, "last": 2 },
    "Thomas": { "value": "Thomas", "count": 1, "first": 1, "last": 0 },
    "Jefferson": { "value": "Jefferson", "count": 1, "first": 0, "last": 1 },
    "James": { "value": "James", "count": 2, "first": 2, "last": 0 },
    "Madison": { "value": "Madison", "count": 1, "first": 0, "last": 1 },
    "Monroe": { "value": "Monroe", "count": 1, "first": 0, "last": 1 },
    "Quincy": { "value": "Quincy", "count": 1, "first": 0, "last": 0 }
  },
  "numbers": {
    "1": { "count": 1, "value": 1 },
    "2": { "count": 1, "value": 2 },
    "3": { "count": 1, "value": 3 },
    "4": { "count": 1, "value": 4 },
    "5": { "count": 1, "value": 5 },
    "6": { "count": 1, "value": 6 }
  }    
}
```