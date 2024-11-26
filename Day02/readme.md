Day -02

### Primitive datatypes

1. Number
2. String
3. BigInt
4. Boolean
5. Null
6. Undefined

### How and what maximum number stored in 64 bit integer in JavaScript?

javascript follows different way to hold the value in 64 bit integer. it uses 53 bit to hold the value and 11 bit to hold
the sign. so the maximum value that can be stored in 64 bit integer in javascript is 2^53 -1.
1 bit is for sign bit
11 bit is for exponent
53 bit is for mantissa

1023 is added to the exponent to get the actual exponent value. the actual exponent value is then used to calculate the value of the number. the mantissa is used to calculate the fractional part of the number. the sign bit is used to determine the sign of the number.
1023 comes because we dont want to use the sign bit, if i am using sign bit
then i have to use 0 as the exponent value. so i am using 1023 this is largest number in 11 bit as 1 bit is for 0 as sign
Smallest number is -1023
so we simply added 1023 in the exponent. We dont want the sign bit , it makes the calculation easy.
