"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parse(input) {
    var jobList = input.split(' ');
    var list = jobList.reduce(function (acc, job) {
        var _a = job.split('=>'), jobA = _a[0], jobB = _a[1];
        if (jobA === jobB) {
            throw new Error("job cannot depend on itself: " + jobA);
        }
        if (jobA) {
            var index = acc.indexOf(jobA);
            if (index === -1) {
                acc = acc.concat(jobA);
                if (jobB) {
                    if (acc.indexOf(jobB) === -1) {
                        acc = acc.slice(0, acc.length - 1).concat([jobB, jobA]);
                    }
                }
            }
            else {
                var firstArr = acc.slice(0, index);
                var secondArr = acc.slice(index);
                if (secondArr.indexOf(jobB) > -1) {
                    throw new Error('Circular dependency of job: ' + jobB);
                }
                acc = jobB && firstArr.indexOf(jobB) === -1 ? firstArr.concat([jobB].concat(secondArr)) : acc;
            }
        }
        return acc;
    }, []);
    return list.join('');
}
exports.default = parse;
