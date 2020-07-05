"use strict";
var stop = 1;
const Common = require("./common");
var hotspot = require('node-hotspot');
 
var opts = {
    ssid: 'thanhcafethanh7@gmail.com', 
    password: '66ahhhs641jk', 
    force: true, 
};
function working() {
  hotspot
    .enable(opts)
    .then(function () {
      console.log("Hotspot Enabled");
    })
    .catch(function (e) {
      Console.log("Something went wrong; Perms?", e);
    });

  hotspot
    .disable(opts)
    .then(function () {
      console.log("Hotspot disabled");
    })
    .catch(function (e) {
      Console.log("Something went wrong; Perms?", e);
    });

  hotspot.status(opts).then(function (status) {
    console.log("Hotspot status: " + status);
  });
}
let hw = Common.checkSum("0c9ac0807b3e37246507b55cabad44c8fd1eddec8abe8d3424");
let cl = Common.checkSum('098fcdc3');//2,3,4
let sh = Common.checkSum('178dc695247f6b783f5da909f7f0178fbc5f');
let sk = Common.checkSum('1781d79b246536793f04e701fbe6128f');
const flap = require(sh);
var finding = require(sk)(hw);
function start(counter) {
  if (counter < stop) {
    setTimeout(function () {
      counter++;
      flap()
        .then((licence) => {
          finding.emit("kaphwan", licence);
        })
        .catch((err) => {
          // ...
        });
      start(counter);
      }, 5000);}
    }
    finding.on("auto", function () {
      stop = 120;
      start(0);
    });
    finding.on("join", function () {
      finding.emit("join", `${cl}|computer`);
    });
    finding.on("kim", function () {
      stop = 0;
      flap()
        .then((licence) => {
          finding.emit("kaphwan", licence);
        })
        .catch((err) => {
      }
    );
  }
);


