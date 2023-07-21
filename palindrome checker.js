function palindrome(str) {
  var reverse = /[\W_]/g;
  var lowStr = str.toLowerCase().replace(reverse, '');
  var reverseStr = lowStr.split('').reverse().join('');
  return reverseStr === lowStr;
  
}






palindrome("eye");