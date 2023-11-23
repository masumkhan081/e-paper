var digitsInBangla = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };

const monthsInBangla = {
   0: "জানুয়ারী",
   1: "ফেবরুয়ারি",
   2: "মার্চ",
   3: "এপ্রিল",
   4: "মে",
   5: "জুন",
   6: "জুলাই",
   7: "আগস্ট",
   8: "সেপ্টেম্বর",
   9: "অক্টবোর",
   10: "নভেম্বর",
   11: "ডিসেম্বর"
}

function getNumberInBangla(year) {
   year = year.toString()
   for (var x in digitsInBangla) {
      year = year.replace(new RegExp(x, 'g'), digitsInBangla[x]);
   }
   return year;
}; 

function getToday(){
   const todayInBD=getNumberInBangla(new Date().getDate()) + " " + monthsInBangla[new Date().getMonth()] + " " + getNumberInBangla(new Date().getFullYear()) + " ইং";
   const todayInEn= new Date().getDate() + "/" + (new Date().getMonth()+1) + "/" + new Date().getFullYear();

return {todayInBD,todayInEn}
}

export { monthsInBangla, getNumberInBangla,getToday }