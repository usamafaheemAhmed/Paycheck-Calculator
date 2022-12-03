function convertWages() {
  console.log('Convert Wages');
  let check1 = document.getElementById('convert');
  let check2 = document.getElementById('clear');
  let btn1 = document.getElementById('convertbtn');
  let btn2 = document.getElementById('clearbtn');

    if (!btn1.active) {
      check1.classList.remove('d-none');
      check2.classList.add('d-none');
    } 
    else if (!btn2.active) {
        check1.classList.add('d-none');
        check2.classList.remove('d-none');
    }

let wagesToConvert= document.getElementById('wagesToConvert').value;
let time= document.getElementById('time').value;

let weeksWorkedPerYear= document.getElementById('weeksWorkedPerYear').value;
let hoursWorkedPerDay= document.getElementById('hoursWorkedPerDay').value;

let daysWorkedPerWeek= document.getElementById('daysWorkedPerWeek').value;
let tax= document.getElementById('tax').value;
let effectiveTax= document.getElementById('effectiveTax').value;




let totalhoursinweek = hoursWorkedPerDay * daysWorkedPerWeek;

console.log(totalhoursinweek + ' hours in a week');
let totalhoursinyear = totalhoursinweek * weeksWorkedPerYear;
console.log(totalhoursinyear + ' hours in a year');

let hourlyrate = wagesToConvert / totalhoursinyear;
// console.log(hourlyrate + ' hourly rate');
let daylySalary = hourlyrate * hoursWorkedPerDay;
// console.log(daylySalary + ' dayly Salary');
let weeklySalary = daylySalary * daysWorkedPerWeek;
// console.log(weeklySalary + ' weekly Salary');
let bi_weeklySalary = weeklySalary * 2;
// console.log(bi_weeklySalary     + ' bi-weekly Salary');
let semi_monthlySalary = (hourlyrate * 84)-20;
// console.log(semi_monthlySalary + ' semi-monthly Salary');
let monthlySalary = (weeklySalary * 4)+200;
// console.log(monthlySalary + ' monthly Salary');
let bi_monthlySalary = monthlySalary * 2;
// console.log(bi_monthlySalary + ' bi-monthly Salary');
let quarterlySalary = monthlySalary * 3;
// console.log(quarterlySalary + ' quarterly Salary');
let semi_AnnualSalary = monthlySalary * 6;
// console.log(semi_AnnualSalary + ' semi-annual Salary');
let annualSalary = monthlySalary * 12;



document.getElementById('untaxedAnnually').value=annualSalary;
document.getElementById('untaxedSemi_Annually').value=semi_AnnualSalary;
document.getElementById('untaxedQuarterly').value=quarterlySalary;
document.getElementById('untaxedBi-Monthly').value=bi_monthlySalary;
document.getElementById('untaxedMonthly').value=monthlySalary;
document.getElementById('untaxedSemi-Monthly').value=semi_monthlySalary;
document.getElementById('untaxedBi_Weekly').value=bi_weeklySalary;
document.getElementById('untaxedWeekly').value=weeklySalary;
document.getElementById('untaxedDaily').value=daylySalary;
document.getElementById('untaxedHourly').value=hourlyrate;

// console.log(annualSalary + ' annual Salary');





let taxedHourlyrate = hourlyrate-((wagesToConvert / totalhoursinyear)/100)*effectiveTax;
// console.log(taxedHourlyrate + ' hourly rate');
let taxedDaylySalary =daylySalary-((hourlyrate * hoursWorkedPerDay)/100)*effectiveTax;
// console.log(taxedDaylySalary + ' dayly Salary');

let taxedWeeklySalary = weeklySalary-((daylySalary * daysWorkedPerWeek)/100)*effectiveTax;
// console.log(taxedWeeklySalary + ' weekly Salary');

let taxedBi_weeklySalary = bi_weeklySalary-((weeklySalary * 2)/100)*effectiveTax;
// console.log(taxedBi_weeklySalary     + ' bi-weekly Salary');

let taxedSemi_monthlySalary = semi_monthlySalary-(((hourlyrate * 84)-20)/100)*effectiveTax;
// console.log(taxedSemi_monthlySalary + ' semi-monthly Salary');

let taxedMonthlySalary = monthlySalary-(((weeklySalary * 4)+200)/100)*effectiveTax;
// console.log(taxedMonthlySalary + ' monthly Salary');

let taxedBi_monthlySalary = bi_monthlySalary-((monthlySalary * 2)/100)*effectiveTax;
// console.log(taxedBi_monthlySalary + ' bi-monthly Salary');
let taxedQuarterlySalary = quarterlySalary-((monthlySalary * 3)/100)*effectiveTax;
// console.log(taxedQuarterlySalary + ' quarterly Salary');

let taxedSemi_AnnualSalary = semi_AnnualSalary-((monthlySalary * 6)/100)*effectiveTax;
// console.log(taxedSemi_AnnualSalary + ' semi-annual Salary');

let taxedAnnualSalary = annualSalary-((monthlySalary * 12)/100)*effectiveTax;
// console.log(taxedAnnualSalary + ' annual Salary');

document.getElementById('taxedAnnually').value=taxedAnnualSalary;
document.getElementById('taxedSemi_Annually').value=taxedSemi_AnnualSalary;
document.getElementById('taxedQuarterly').value=taxedQuarterlySalary;
document.getElementById('taxedBi-Monthly').value=taxedBi_monthlySalary;
document.getElementById('taxedMonthly').value=taxedMonthlySalary;
document.getElementById('taxedSemi-Monthly').value=taxedSemi_monthlySalary;
document.getElementById('taxedBi_Weekly').value=taxedBi_weeklySalary;
document.getElementById('taxedWeekly').value=taxedWeeklySalary;
document.getElementById('taxedDaily').value=taxedDaylySalary;
document.getElementById('taxedHourly').value=taxedHourlyrate;


document.getElementById('hoursWorkedPerWeek1').value = totalhoursinweek;
document.getElementById('hoursWorkedPerMonth').value=totalhoursinweek*4;
document.getElementById('hoursWorkedPerYear').value=(totalhoursinweek*4)*12;



}

function clearall() {
    console.log('hello');
    let check1 = document.getElementById('convert');
    let check2 = document.getElementById('clear');
    let btn1 = document.getElementById('convertbtn');
    let btn2 = document.getElementById('clearbtn');
  
      if (!btn2.active) {
        check2.classList.remove('d-none');
        check1.classList.add('d-none');
      } 
  }