"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parse(input) {
    var jobList = input.split(' ');
    var list = jobList.reduce(function (acc, job) {
        var _a = job.split('=>'), jobA = _a[0], jobB = _a[1];
        if (jobA) {
            var index = acc.indexOf(jobA);
            if (index === -1) {
                acc.unshift(jobA);
                if (jobB) {
                    acc.unshift(jobB);
                }
            }
            else {
                var firstArr = acc.slice(0, index);
                var secondArr = acc.slice(index + 1);
                secondArr.unshift(jobA);
                if (jobB) {
                    secondArr.unshift(jobB);
                }
                acc = firstArr.concat(secondArr);
            }
        }
        return acc;
    }, []);
    return list.reduce(function (a, b) { return a + b; }, "");
}
exports.default = parse;
