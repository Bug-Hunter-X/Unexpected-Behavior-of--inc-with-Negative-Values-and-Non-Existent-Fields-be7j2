```javascript
//Correct usage of $inc operator with $setOnInsert to handle non-existent fields
db.collection('counters').updateOne( { _id: 'myCounter' }, {
  $setOnInsert: { sequence: 0 },
  $inc: { sequence: -1 }
});
```