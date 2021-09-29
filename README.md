the algorithm works in a simple way:
if number is single digit it gives hard coded value from array
if number is double digits and between 10 and 20 , it also gives value from array
if number is two digits and above 19 , it splits the number into two sections one that shows the number as multiple of 10 , the other shows a single digit value 
==> 30 -> 3 'thirthy'
       -> 0 'empty string'
       -> 'dont show the dash'

if number is of leng 4 , and fallse between 11xx and 19xx, split number into two sections NNxx and xxNN (instead of moving three digits to the right)
we do this to show the first part in multiple of 10 form instead of doing (X thousand).
example : 1900 -> 19 (keyword = hundread)
               -> 00
if number is 10XX or 20XX take the traditional 3 digits to the right
 example : 2001 -> 2
                -> thousand
                -> 001
for numbers above 4 digits , take closest unit a use it to split the number accordingly, while inserting the correct keyword every time.
note : the code only works for numbers equal or less than 12 (highest unit i know of is trillion !), if you need to implement higher numbers just add its keyword in the script switch case, and its array.
