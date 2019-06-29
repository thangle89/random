
type Job = string[];
export default function parse(input: string): string {
    const jobList = input.split(' ');
    const list = jobList.reduce<Job>((acc, job) => {
        const [jobA, jobB] = job.split('=>');
        if(jobA === jobB) {
            throw new Error("job cannot depend on itself: " + jobA);
        }
        if (jobA) {
            const index = acc.indexOf(jobA);
            if (index === -1) {
                acc = acc.concat(jobA);
                if (jobB) {
                    if (acc.indexOf(jobB) === -1) {
                        acc = acc.slice(0, acc.length - 1).concat([jobB, jobA])
                    }
                }
            } else {
                const firstArr = acc.slice(0,index);
                const secondArr = acc.slice(index);
                if(secondArr.indexOf(jobB) > -1) {
                    throw new Error('Circular dependency of job: ' + jobB);
                }
                acc = jobB && firstArr.indexOf(jobB) === -1 ? firstArr.concat([jobB,...secondArr]) : acc;
            }
        }

        return acc;
    }, [] as Job)
    return list.join('');
}