const tags = [];
let currentNumber = 0;

const getTags = (req, res) => {
  tags.push(currentNumber);   
  currentNumber++;            

  res.json({ tags });

};

// Implement other controllers related to tags

module.exports = {
  getTags,
  // Export other tag controllers
};