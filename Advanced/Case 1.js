// Deep Clone Function
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  const clone = {};

  for (const key of Object.keys(value)) {
    clone[key] = deepClone(value[key]);
  }

  return clone;
}

const original = {
  name: "Alex",
  scores: [80, 90],
  address: {
    city: "Sukabumi"
  }
};

const copy = deepClone(original);

// Modify the cloned object
copy.name = "Sarah";
copy.scores[0] = 100;
copy.address.city = "Bandung";

console.log("Original:", original);
console.log("Clone:", copy);

console.log(
  "Original city unchanged:",
  original.address.city === "Sukabumi"
);

console.log(
  "Original scores unchanged:",
  original.scores[0] === 80
);