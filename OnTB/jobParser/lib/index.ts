
interface Job {
    [name: string]: string[]
}
export default function parse(input: string): string {
    const jobList = input.split(' ');
    const list = jobList.reduce<Job>((acc, job) => {
        const dependentJob = job.split('=>');
        if(acc[dependentJob[0]]) {
            if(acc[dependentJob[0]].indexOf(dependentJob[1]) === -1){
                acc[dependentJob[0]] = acc[dependentJob[0]].concat(dependentJob[1]);
            }
        }
        else {
            acc[dependentJob[0]] = acc[dependentJob[0]].concat(dependentJob[1]);
        }
        return acc;
    }, {} as Job)
    return Object.keys(list).reduce((str, job) => {
        let jobStr = list[job].reverse().reduce((a,b) => a + b);
        jobStr = jobStr + job;
        return str + jobStr;
    }, "");
}