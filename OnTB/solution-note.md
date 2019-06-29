Here are the description of my approach for the exercise: 

1/For reusability, I create a module to parse the jobs separately so that it can be run with different environments (e.g nodejs or browser).

2/The module is put inside jobParser, `dist` folder is the compiled source code, and `lib` folder contains the source code of the module. I separate them because when publish to npm, it needs to publish only `dist` folder so we can reduce the size of the npm package.

3/The implementation has some assumptions: 
- the module assumes that the input is always in correct format to simplify the problem, i.e. the list of jobs need to use space as separator, e.g `a=>b b=>c`, and between the job name and the `=>` does not have any space.
- if one job depends on two or more jobs, each dependency is expressed separately. For example if (a depend on b, and b depend on c), the input should be `a=>b b=>c`, the module does not support `a=>b=>c` at the moment

To overcome these assumptions, the module can be extended to use some complex Regex strings to support more input format.

4/The output is mainly concerned about the job dependency, not the concurrence of jobs. e.g if input `a=>b b=>c d=> e=>`, the output guarantees that `b` before `a`, `c` before `b`. The fact that `c,d,e` are independent and can be executed in concurrence is not expressed in the output. 

5/To run the module, for simplicity, I just implement `main.js` file that can be run with Nodejs and the file refers to the module directly. To run with web browser, I could publish the module to npm, then setup a simple react project to run it in a webpage.

6/Algorithm description:

Purpose: compute the array with each item is a job in order

- Firstly, convert the input to array of jobs
- For each item in the array, consider it has `jobA` depend on `jobB`, then find suitable positions to insert 
`jobB` and `jobA`

7/Complexity analysis:

Consider `n` is the length of the array (each item contains job: `jobA => jobB`). So the complexity is
- Loop through `n` ---> `O(n)`
    - For each item: find suitable position of `jobA` and `jobB` ---> `O(m)` with `m` is the current length of the array
- Thus the total complexity of the algorithm is `O(m*n)` ~ `O(n^2)`. For large data, we may need to store the job in hash table so finding position of jobs could be improve.