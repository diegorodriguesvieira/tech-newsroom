module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss|svg)$": "babel-jest",
  },
};
