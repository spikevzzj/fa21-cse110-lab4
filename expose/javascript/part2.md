1. Output: 3. This is because the index of last element in array is 2 but function does a "i++" which makes i = 3 and since we use "var"to assign i, so we can print out 3.
2. Output: 150. This is because at last loop of for loop, prices[i] = 300, according to equation "discountedPrice" is 150 and since we use var, outside for loop we can still access "discountedPrice" which prints 150.
3. Output: 150. This is because at last loop of for loop, discountedPrice = 150. And according to the equations, finalPrice will have same value as discountedPrice and since we use var to declare "finalPrice" we can access it outside of for loop and print 150.
4. Output: [50,100,150]. This is because function basically just half all the element of input array and we return an int array which means we will get an array with each value half of the corresponding value in input array.
5. Output: error. This is because we use "let" to assign i which means outside for loop i is not defined.
6. Output: error. The reason is same as above, discountedPrice is only defined in for looop.
7. Output: 150. This is because finalPrice is initialized at the beginning, outside of for loop. Hence, it is defined in the whole function.
8. Output: [50,100,150]. This is because function although i and discounted price only defined in for loop, we only use them in for loop so nothing will cause error.
9. Output: error. same reason as Q5. i is only defined in for loop.
10. Output: 3. Since we use "const" to initialize length with the value: length of prices, since input array has length 3, length = 3.
11. Output: [50,100,150]. There is no error, since const only means that we can not change the reference to a value but we can stil change the value in a constant array. Hence, the function works perfectly fine. And similarly, it just half all the value of each element in input array and store them.
12. - student.name
    - student["Grad Year"]
    - student.greeting();
    - student['Favorite Teacher'].name
    - student.courseLoad[0]
13. - Output: '32'. Since 2 maps to string representation '2'.
    - Output: 1. Since string does not support subtraction, it will map '3' to int value 3.
    - Output: 3. Since null convert to int value 0
    - Output: '3null'. Since null convert to exact string representation
    - Output: 4. Since true convert to int value 1
    - Output: Since both null and false convert to int value 0
    - Output: '3undefined'. undefined convert to exact string representation
    - Output: NaN. Since '3' convert to int 3 and undefined convert to int NaN. Doing subtraction we get NaN.
14. - true. Since '2' will convert to int 2 and 2 > 1.
    - false. Since first character is '2' for '2' and '1' for '12' and '2' > '1'.
    - true. Since == only checks value and ignores data type.
    - false. Since === checks both value and data type.
    - false. Since true has int value 1.
    - true. Boolean(2) is a boolean object and it is true since constant int 2.
15. == only compares value while === compares both value and data type
17. The result will be [2,4,6]. At line 2 we create a in array "newArr" to store our result. Then from line 3 to 5 there is a for loop that visits each element of input array "array" and in each loop we call function "doSomething" which doubles the input value on each element and we add the doubled value into "newArr". In this way, for loop doubles every value in input array and store them in newArr. And we finally return newArr.
19. Output: 1432.
