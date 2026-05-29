module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: ["steps/**/*.js"],
    format: ["progress"],
    timeout: 60000,
  },
};
