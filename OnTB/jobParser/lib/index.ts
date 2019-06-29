
type Job = string[];
export default function parse(input: string): string {
    const jobList = input.split(' ');
    const list = jobList.reduce<Job>((acc, job) => {
        const [jobA, jobB] = job.split('=>');
        if (jobA) {
            const index = acc.indexOf(jobA);
            if (index === -1) {
                acc.unshift(jobA);
                if(jobB) {
                    acc.unshift(jobB);
                }
            } else {
                const firstArr = acc.slice(0,index);
                const secondArr = acc.slice(index+1);
                secondArr.unshift(jobA);
                if(jobB) {
                    secondArr.unshift(jobB);
                }
                acc = firstArr.concat(secondArr);
            }
        }

        return acc;
    }, [] as Job)
    return list.reduce((a,b) => a + b, "");
}