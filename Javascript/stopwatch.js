function Stopwatch() {
  let startTime;
  let stopTime;
  let duration = 0;
  let running = false;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
    set: function (value) {
      return (running = value);
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (value) {
      return (startTime = value);
    },
  });

  Object.defineProperty(this, "stopTime", {
    get: function () {
      return stopTime;
    },
    set: function (value) {
      return (stopTime = value);
    },
  });
}

Stopwatch.prototype.StartTime = function () {
  console.log("Timer Started");
  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.StopTime = function () {
  if (this.running !== true) throw new Error("Timer wasn't started");
  this.stopTime = new Date();
  this.running = false;
  const seconds = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
  console.log("Timer Stoped");
};

Stopwatch.prototype.GetEllapsedTime = function () {
  return this.duration;
};

const sw1 = new Stopwatch();
sw1.StartTime();

setTimeout(() => {
  sw1.StopTime();
  console.log(sw1.GetEllapsedTime() + " seconds ellapsed");
}, 3000);
