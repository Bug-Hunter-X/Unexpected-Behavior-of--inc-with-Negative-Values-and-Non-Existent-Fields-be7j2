# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon error related to the MongoDB `$inc` operator when used with negative values and fields that don't yet exist.  The `$inc` operator, when used to decrement a counter, behaves unexpectedly if the field is not already present in the document. 

**Problem:** The provided code snippet demonstrates an incorrect usage of the `$inc` operator. When used with `-1`, it's intended to decrement the `sequence` field. However, if `sequence` doesn't exist, instead of creating it and setting its value to -1,  the operation might fail or produce unpredictable results depending on the MongoDB version and settings.

**Solution:** To address this, it's crucial to ensure the field exists before attempting to decrement it. One approach is to use the `$setOnInsert` operator in conjunction with `$inc` within a single atomic operation.

This example highlights a subtle but potentially problematic edge case when working with counters in MongoDB.