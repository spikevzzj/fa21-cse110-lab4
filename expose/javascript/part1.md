1. 20
2. 20
3. 20
4. it shows an error that "result is not defined". This is because "let" is block scoped. Therefore, if we define "result" in if function, outside that "result" wiibe undefined.
5. prints nothing since there is an error at line 7. This is because we assign "result" using const which means we cannot reassign any value to it. However, at line 7 we do "result = num1 + num2", therefore we have error.
6. prints nothing and reason is the same as above.