var should = require("should"),
    trim = require("../index");

describe("trim long filename", function() {
  it("should be trimmed", function() {
    var fn = "longfilename1234.jpg";
    trim(fn, 5).should.equal("l.jpg");
    trim(fn, 10).should.equal("longfi.jpg");
  });

  it("should be trimmed(without extension)", function() {
    var fn = "longfilename1234";
    trim(fn, 5).should.equal("longf");
    trim(fn, 10).should.equal("longfilena");
  });

  it("should be only extension", function() {
    var fn = "longfilename1234.jpg";
    trim(fn, 1).should.equal(".jpg");
  });
});

describe("trim short filename", function() {
  it("should not be trimmed", function() {
    var fn = "short.jpg";
    trim(fn, 20).should.equal("short.jpg");
    trim(fn, 9).should.equal("short.jpg");
  });
});