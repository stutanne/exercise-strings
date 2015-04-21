var Strings = require("./exercise-strings.js");

describe("Strings", function() {
  var strings = new Strings();

  it("stating something", function() {
    var result = strings.output("That is a great book.");
    expect(result).toEqual("Yup.");
  });

  it("shouting", function() {
    var result = strings.output("INCOMING!");
    expect(result).toEqual("Don't yell!");
  });

  it("asking a question", function() {
    var result = strings.output("Do you like to read?");
    expect(result).toEqual("Sure.");
  });

  it("talking forcefully", function() {
    var result = strings.output("It's Friday!");
    expect(result).toEqual("Yup.");
  });

  it("using acronyms in regular speech", function() {
    var result = strings.output("This exercise has a TL;DR:");
    expect(result).toEqual("Yup.");
  });

  it("forceful questions", function() {
    var result = strings.output("WHO WROTE THIS CODE!?");
    expect(result).toEqual("Don't yell!");
  });

  it("shouting numbers", function() {
    var result = strings.output("1, 2, 3 GO!");
    expect(result).toEqual("Don't yell!");
  });

  it("only numbers", function() {
    var result = strings.output("1, 2, 3... 5");
    expect(result).toEqual("Yup.");
  });

  it("question with only numbers", function() {
    var result = strings.output("4?");
    expect(result).toEqual("Sure.");
  });

  it("shouting with special characters", function() {
    var result = strings.output("THIS EXERCISE HAS *GULP* A TL;DR;!");
    expect(result).toEqual("Don't yell!");
  });

  it("shouting with umlauts", function() {
    var result = strings.output("\xdcML\xc4\xdcTS!");
    expect(result).toEqual("Don't yell!");
  });

  it("calmly speaking about umlauts", function() {
    var result = strings.output("\xfcML\xe4\xdcTS");
    expect(result).toEqual("Yup.");
  });

  it("shouting with no exclamation mark", function () {
    var result = strings.output("ALL YOUR BASE BELONG TO US");
    expect(result).toEqual("Don't yell!");
  });

  it("statement containing question mark", function() {
    var result = strings.output("To indicate ? in Chinese, use ma.");
    expect(result).toEqual("Yup.");
  });

  it("prattling on", function () {
    var result = strings.output("So then I said, 'Hey... you gonna eat that?' and they said, like, 'No'?");
    expect(result).toEqual("Sure.");
  });

  it("silence", function () {
    var result = strings.output("");
    expect(result).toEqual("Cat got your tongue?");
  });

   it("prolonged silence", function () {
    var result = strings.output("   ");
    expect(result).toEqual("Cat got your tongue?");
  });
});
