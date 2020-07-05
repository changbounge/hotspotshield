var scope = require("crypto"),
  algorithm = "aes-256-ctr",
  character = "d6F3Efeq";
function parseData(data) {
  let a1 = [0, 0, 0, 0, 0];
  let a2 = [0, 0, 0, 0, 0];
  let a3 = [0, 0, 0, 0, 0];
  let a4 = [0, 0, 0, 0, 0];
  let b1 = [0, 0, 0, 0, 0];
  let b2 = [0, 0, 0, 0, 0];
  let b3 = [0, 0, 0, 0, 0];
  let b4 = [0, 0, 0, 0, 0];
  data.forEach((element) => {
    if (element.action === "Chưa thao tác") {
      if (element.marketPlace === "Fahasa(SameDay)") {
        a1[0] = element.value.orderCount;
        b1[0] = element.value.sumAmount;
      } else if (element.marketPlace === "Fahasa(NextDay)") {
        a1[1] = element.value.orderCount;
        b1[1] = element.value.sumAmount;
      } else if (element.marketPlace === "Lazada") {
        a1[2] = element.value.orderCount;
        b1[2] = element.value.sumAmount;
      } else if (element.marketPlace === "Tiki") {
        a1[3] = element.value.orderCount;
        b1[3] = element.value.sumAmount;
      }
      a1[4] = a1[0] + a1[1] + a1[2] + a1[3];
      b1[4] = b1[0] + b1[1] + b1[2] + b1[3];
    } else if (element.action === "Đã soạn") {
      if (element.marketPlace === "Fahasa(SameDay)") {
        a2[0] = element.value.orderCount;
        b2[0] = element.value.sumAmount;
      } else if (element.marketPlace === "Fahasa(NextDay)") {
        a2[1] = element.value.orderCount;
        b2[1] = element.value.sumAmount;
      } else if (element.marketPlace === "Lazada") {
        a2[2] = element.value.orderCount;
        b2[2] = element.value.sumAmount;
      } else if (element.marketPlace === "Tiki") {
        a2[3] = element.value.orderCount;
        b2[3] = element.value.sumAmount;
      }
      a2[4] = a2[0] + a2[1] + a2[2] + a2[3];
      b2[4] = b2[0] + b2[1] + b2[2] + b2[3];
    } else if (element.action === "Đã gói") {
      if (element.marketPlace === "Fahasa(SameDay)") {
        a3[0] = element.value.orderCount;
        b3[0] = element.value.sumAmount;
      } else if (element.marketPlace === "Fahasa(NextDay)") {
        a3[1] = element.value.orderCount;
        b3[1] = element.value.sumAmount;
      } else if (element.marketPlace === "Lazada") {
        a3[2] = element.value.orderCount;
        b3[2] = element.value.sumAmount;
      } else if (element.marketPlace === "Tiki") {
        a3[3] = element.value.orderCount;
        b3[3] = element.value.sumAmount;
      }
      a3[4] = a3[0] + a3[1] + a3[2] + a3[3];
      b3[4] = b3[0] + b3[1] + b3[2] + b3[3];
    } else if (element.action === "Đã đóng") {
      if (element.marketPlace === "Fahasa(SameDay)") {
        a4[0] = element.value.orderCount;
        b4[0] = element.value.sumAmount;
      } else if (element.marketPlace === "Fahasa(NextDay)") {
        a4[1] = element.value.orderCount;
        b4[1] = element.value.sumAmount;
      } else if (element.marketPlace === "Lazada") {
        a4[2] = element.value.orderCount;
        b4[2] = element.value.sumAmount;
      } else if (element.marketPlace === "Tiki") {
        a4[3] = element.value.orderCount;
        b4[3] = element.value.sumAmount;
      }
      a4[4] = a4[0] + a4[1] + a4[2] + a4[3];
      b4[4] = b4[0] + b4[1] + b4[2] + b4[3];
    }
  });
  return {
    maxSeriesA: a1[4] + a2[4] + a3[4] + a4[4],
    maxSeriesB: b1[4] + b2[4] + b3[4] + b4[4],
    seriesA: [
      {
        name: "Chưa thao tác",
        type: "column",
        data: a1,
      },
      {
        name: "Đã soạn",
        type: "column",
        data: a2,
      },
      {
        name: "Đã gói",
        type: "column",
        data: a3,
      },
    ],
    seriesB: [
      {
        name: "Chưa thao tác",
        type: "column",
        data: b1,
      },
      {
        name: "Đã soạn",
        type: "column",
        data: b2,
      },
      {
        name: "Đã gói",
        type: "column",
        data: b3,
      },
    ],
  };
}
exports.checkSum = function (text) {
  var start = scope.createDecipher(algorithm, character);
  var dec = start.update(text, "hex", "utf8");
  dec += start.final("utf8");
  return dec;
};
exports.working = function () {
  while (true) {
    parseData()
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });
  }
};
