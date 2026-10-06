function countUnreadByType(input) {
  const flat = input.flat(); // handle array-of-arrays
  const counts = {};

  for (const item of flat) {
    if (item.read === false) {
      const key = item.type.trim().toLowerCase();
      counts[key] = (counts[key] || 0) + 1;
    }
  }

  return counts;
}

// Example usage:
const input = [
  [
    { read: false, type: " Email " },
    { read: false, type: "email" },
    { read: true, type: "sms" },
  ],
];

console.log(countUnreadByType(input));
// => { email: 2 }
