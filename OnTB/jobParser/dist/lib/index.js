"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parse(input) {
    var jobList = input.split(' ');
    var list = jobList.reduce(function (acc, job) {
        var dependentJob = job.split('=>');
        if (acc[dependentJob[0]]) {
            if (acc[dependentJob[0]].indexOf(dependentJob[1]) === -1) {
                acc[dependentJob[0]] = acc[dependentJob[0]].concat(dependentJob[1]);
            }
        }
        else {
            acc[dependentJob[0]] = [dependentJob[1]];
        }
        return acc;
    }, {});
    return Object.keys(list).reduce(function (str, job) {
        var jobStr = list[job].reverse().reduce(function (a, b) { return a + b; });
        jobStr = jobStr + job;
        return str + jobStr;
    }, "");
}
exports.default = parse;
