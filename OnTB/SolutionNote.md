1/ Create a module to parse the jobs separately, so that it can be run with different environment 
(e.g nodejs or browser)

2/The module is put inside jobParser, `dist` folder is the source code that can be publish in npm.
`lib` folder contains the source code of the module. 

3/Assumptions: 
    - the module assume that the input is always in correct format to simplify the problem, i.e. the list of job need to use space as a separator, e.g `a=>b b=>c`, so between the job name and the `=>` will not have any space.
    - if one job depends on two or more jobs, each dependency is expressed separately. For example if (a depend on b, and b depend on c), the input should be `a=>b b=>c`, the module does not support `a=>b=>c`

To overcome these assumptions, the module can be extended to use complex Regex string to support more input format.

4/The output will mainly concern about the job dependency, not the concurrence of jobs. e.g if input `a=>b b=>c d=> e=>`, the output should be `cbade`, the fact that `c,d,e` are independent and can be executed in concurrence is not expressed in the output. 