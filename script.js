
function convertWages() {
  console.log('Convert Wages');
  let check1 = document.getElementById('convert');
  let check2 = document.getElementById('clear');
  let btn1 = document.getElementById('convertBtn');
  let btn2 = document.getElementById('clearBtn');

    if (!btn1.active) {
      check1.classList.remove('d-none');
      check2.classList.add('d-none');
    } 
    else if (!btn2.active) {
        check1.classList.add('d-none');
        check2.classList.remove('d-none');
    }

    let time= document.getElementById('time').value;
    clear();
    if (time == 'year') {
      yearly();
    }
    else if (time == 'Hourly') {
      hourly();
    }
    else if (time == 'Daily') {
      daily();
    }
    else if (time == 'Weekly') {
      weekly();
    }
    else if (time == 'BiWeekly') {
      biWeekly();
    }
    else if (time == 'semiMonthly') {
      semiMonthly();
    }
    else if (time == 'Monthly') {
      monthly();
    }
    else if (time == 'biMonthly') {
      biMonthly();
    }
    else if (time == 'Quarterly') {
      quarterly();
    }
    else if (time == 'semiAnnually') {
      semiAnnually();
    }

}


function yearly() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);


let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
console.log(totalHoursInYear + ' hours in a year');
console.log(totalHoursInWeek + ' hours in a week');

// Simpleformula
let hourlyRate = wagesToConvert / totalHoursInYear;
let dailySalary = hourlyRate * hoursWorkedPerDay;
let weeklySalary = dailySalary * daysWorkedPerWeek;
let biWeeklySalary = weeklySalary * 2;
let semiMonthlySalary = (hourlyRate * 84)-20;
let monthlySalary = (weeklySalary * 4)+200;
let biMonthlySalary = monthlySalary * 2;
let quarterlySalary = monthlySalary * 3;
let semiAnnualSalary = monthlySalary * 6;
let annualSalary = monthlySalary * 12;

// Taxedformula
let taxedHourlyRate = hourlyRate-((wagesToConvert / totalHoursInYear)/100)*effectiveTaxInput;
let taxeddailySalary =dailySalary-((hourlyRate * hoursWorkedPerDay)/100)*effectiveTaxInput;
let taxedWeeklySalary = weeklySalary-((dailySalary * daysWorkedPerWeek)/100)*effectiveTaxInput;
let taxedBiWeeklySalary = biWeeklySalary-((weeklySalary * 2)/100)*effectiveTaxInput;
let taxedSemiMonthlySalary = semiMonthlySalary-(((hourlyRate * 84)-20)/100)*effectiveTaxInput;
let taxedMonthlySalary = monthlySalary-(((weeklySalary * 4)+200)/100)*effectiveTaxInput;
let taxedBiMonthlySalary = biMonthlySalary-((monthlySalary * 2)/100)*effectiveTaxInput;
let taxedQuarterlySalary = quarterlySalary-((monthlySalary * 3)/100)*effectiveTaxInput;
let taxedSemiAnnualSalary = semiAnnualSalary-((monthlySalary * 6)/100)*effectiveTaxInput;
let taxedAnnualSalary = annualSalary-((monthlySalary * 12)/100)*effectiveTaxInput;



let tax= document.getElementById('tax').value;

if (tax == 'unTaxed') {
                  
  // untaxedcolums
  document.getElementById('untaxedAnnually').value=toComma(annualSalary);
  document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
  document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
  document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
  document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
  document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
  document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
  document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
  document.getElementById('untaxedDaily').value=toComma(dailySalary);
  document.getElementById('untaxedHourly').value=toComma(hourlyRate);
  
  // taxed columns
  document.getElementById('taxedAnnually').value=toComma(annualSalary);
  document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
  document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
  document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
  document.getElementById('taxedMonthly').value=toComma(monthlySalary);
  document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
  document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
  document.getElementById('taxedWeekly').value=toComma(weeklySalary);
  document.getElementById('taxedDaily').value=toComma(dailySalary);
  document.getElementById('taxedHourly').value=toComma(hourlyRate);
  }
  
  else if (tax == 'beforeTaxes') {
  // untaxedcolums
  document.getElementById('untaxedAnnually').value=toComma(annualSalary);
  document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
  document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
  document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
  document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
  document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
  document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
  document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
  document.getElementById('untaxedDaily').value=toComma(dailySalary);
  document.getElementById('untaxedHourly').value=toComma(hourlyRate);
  
  // taxed columns
  document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
  document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
  document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
  document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
  document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
  document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
  document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
  document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
  document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
  document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
  
  
    
  }
  else if (tax == 'afterTaxes') {
    // untaxedcolums
  document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
  document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
  document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
  document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
  document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
  document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
  document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
  document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
  document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
  document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
  
  // taxed columns
  document.getElementById('taxedAnnually').value= toComma(annualSalary);
  document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
  document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
  document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
  document.getElementById('taxedMonthly').value=toComma(monthlySalary);
  document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
  document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
  document.getElementById('taxedWeekly').value=toComma(weeklySalary);
  document.getElementById('taxedDaily').value= toComma(dailySalary);
  document.getElementById('taxedHourly').value=toComma(hourlyRate);
  }



document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;



}

function hourly() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
  
  
  let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
  let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
  console.log(totalHoursInYear + ' hours in a year');
  console.log(totalHoursInWeek + ' hours in a week');
  
  // Simpleformula
  let hourlyRate = wagesToConvert;
  let dailySalary = hourlyRate * hoursWorkedPerDay;
  let weeklySalary = dailySalary * daysWorkedPerWeek;
  let biWeeklySalary = weeklySalary * 2;
  let semiMonthlySalary = (hourlyRate * 84)-40000;
  let monthlySalary = (weeklySalary * 4)+400000;
  let biMonthlySalary = monthlySalary * 2;
  let quarterlySalary = monthlySalary * 3;
  let semiAnnualSalary = monthlySalary * 6;
  let annualSalary = monthlySalary * 12;
  
  // Taxedformula
  let taxedHourlyRate = hourlyRate-((wagesToConvert / totalHoursInYear)/100)*effectiveTaxInput;
  let taxeddailySalary =dailySalary-((hourlyRate * hoursWorkedPerDay)/100)*effectiveTaxInput;
  let taxedWeeklySalary = weeklySalary-((dailySalary * daysWorkedPerWeek)/100)*effectiveTaxInput;
  let taxedBiWeeklySalary = biWeeklySalary-((weeklySalary * 2)/100)*effectiveTaxInput;
  let taxedSemiMonthlySalary = semiMonthlySalary-(((hourlyRate * 84)-20)/100)*effectiveTaxInput;
  let taxedMonthlySalary = monthlySalary-(((weeklySalary * 4)+200)/100)*effectiveTaxInput;
  let taxedBiMonthlySalary = biMonthlySalary-((monthlySalary * 2)/100)*effectiveTaxInput;
  let taxedQuarterlySalary = quarterlySalary-((monthlySalary * 3)/100)*effectiveTaxInput;
  let taxedSemiAnnualSalary = semiAnnualSalary-((monthlySalary * 6)/100)*effectiveTaxInput;
  let taxedAnnualSalary = annualSalary-((monthlySalary * 12)/100)*effectiveTaxInput;
  
  
  
  let tax= document.getElementById('tax').value;
  
  if (tax == 'unTaxed') {
                  
    // untaxedcolums
    document.getElementById('untaxedAnnually').value=toComma(annualSalary);
    document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
    document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
    document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
    document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
    document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
    document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
    document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
    document.getElementById('untaxedDaily').value=toComma(dailySalary);
    document.getElementById('untaxedHourly').value=toComma(hourlyRate);
    
    // taxed columns
    document.getElementById('taxedAnnually').value=toComma(annualSalary);
    document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
    document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
    document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
    document.getElementById('taxedMonthly').value=toComma(monthlySalary);
    document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
    document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
    document.getElementById('taxedWeekly').value=toComma(weeklySalary);
    document.getElementById('taxedDaily').value=toComma(dailySalary);
    document.getElementById('taxedHourly').value=toComma(hourlyRate);
    }
    
    else if (tax == 'beforeTaxes') {
    // untaxedcolums
    document.getElementById('untaxedAnnually').value=toComma(annualSalary);
    document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
    document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
    document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
    document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
    document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
    document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
    document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
    document.getElementById('untaxedDaily').value=toComma(dailySalary);
    document.getElementById('untaxedHourly').value=toComma(hourlyRate);
    
    // taxed columns
    document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
    document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
    document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
    document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
    document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
    document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
    document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
    document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
    document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
    document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
    
    
      
    }
    else if (tax == 'afterTaxes') {
      // untaxedcolums
    document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
    document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
    document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
    document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
    document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
    document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
    document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
    document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
    document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
    document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
    
    // taxed columns
    document.getElementById('taxedAnnually').value= toComma(annualSalary);
    document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
    document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
    document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
    document.getElementById('taxedMonthly').value=toComma(monthlySalary);
    document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
    document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
    document.getElementById('taxedWeekly').value=toComma(weeklySalary);
    document.getElementById('taxedDaily').value= toComma(dailySalary);
    document.getElementById('taxedHourly').value=toComma(hourlyRate);
    }
  
  
  
  document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
  document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
  document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
  
  
  
  }

function daily() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
    

    
    let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
    let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
    console.log(totalHoursInYear + ' hours in a year');
    console.log(totalHoursInWeek + ' hours in a week');
    
    // Simpleformula
    let hourlyRate =  wagesToConvert/hoursWorkedPerDay;
    let dailySalary = wagesToConvert;
    let weeklySalary = dailySalary * daysWorkedPerWeek;
    let biWeeklySalary = weeklySalary * 2;
    let semiMonthlySalary = (hourlyRate * 84)-5000;
    let monthlySalary = (weeklySalary * 4)+50000;
    let biMonthlySalary = monthlySalary * 2;
    let quarterlySalary = monthlySalary * 3;
    let semiAnnualSalary = monthlySalary * 6;
    let annualSalary = monthlySalary * 12;
    
    // Taxedformula
    let taxedHourlyRate = hourlyRate-((wagesToConvert / totalHoursInYear)/100)*effectiveTaxInput;
    let taxeddailySalary =dailySalary-((hourlyRate * hoursWorkedPerDay)/100)*effectiveTaxInput;
    let taxedWeeklySalary = weeklySalary-((dailySalary * daysWorkedPerWeek)/100)*effectiveTaxInput;
    let taxedBiWeeklySalary = biWeeklySalary-((weeklySalary * 2)/100)*effectiveTaxInput;
    let taxedSemiMonthlySalary = semiMonthlySalary-(((hourlyRate * 84)-20)/100)*effectiveTaxInput;
    let taxedMonthlySalary = monthlySalary-(((weeklySalary * 4)+200)/100)*effectiveTaxInput;
    let taxedBiMonthlySalary = biMonthlySalary-((monthlySalary * 2)/100)*effectiveTaxInput;
    let taxedQuarterlySalary = quarterlySalary-((monthlySalary * 3)/100)*effectiveTaxInput;
    let taxedSemiAnnualSalary = semiAnnualSalary-((monthlySalary * 6)/100)*effectiveTaxInput;
    let taxedAnnualSalary = annualSalary-((monthlySalary * 12)/100)*effectiveTaxInput;
    
    
    
    let tax= document.getElementById('tax').value;
    
    if (tax == 'unTaxed') {
                  
      // untaxedcolums
      document.getElementById('untaxedAnnually').value=toComma(annualSalary);
      document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
      document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
      document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
      document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
      document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
      document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
      document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
      document.getElementById('untaxedDaily').value=toComma(dailySalary);
      document.getElementById('untaxedHourly').value=toComma(hourlyRate);
      
      // taxed columns
      document.getElementById('taxedAnnually').value=toComma(annualSalary);
      document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
      document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
      document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
      document.getElementById('taxedMonthly').value=toComma(monthlySalary);
      document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
      document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
      document.getElementById('taxedWeekly').value=toComma(weeklySalary);
      document.getElementById('taxedDaily').value=toComma(dailySalary);
      document.getElementById('taxedHourly').value=toComma(hourlyRate);
      }
      
      else if (tax == 'beforeTaxes') {
      // untaxedcolums
      document.getElementById('untaxedAnnually').value=toComma(annualSalary);
      document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
      document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
      document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
      document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
      document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
      document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
      document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
      document.getElementById('untaxedDaily').value=toComma(dailySalary);
      document.getElementById('untaxedHourly').value=toComma(hourlyRate);
      
      // taxed columns
      document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
      document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
      document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
      document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
      document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
      document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
      document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
      document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
      document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
      document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
      
      
        
      }
      else if (tax == 'afterTaxes') {
        // untaxedcolums
      document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
      document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
      document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
      document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
      document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
      document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
      document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
      document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
      document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
      document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
      
      // taxed columns
      document.getElementById('taxedAnnually').value= toComma(annualSalary);
      document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
      document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
      document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
      document.getElementById('taxedMonthly').value=toComma(monthlySalary);
      document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
      document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
      document.getElementById('taxedWeekly').value=toComma(weeklySalary);
      document.getElementById('taxedDaily').value= toComma(dailySalary);
      document.getElementById('taxedHourly').value=toComma(hourlyRate);
      }
    
    
    
    document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
    document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
    document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
    
    
    
  }
function weekly() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
      
  
      
      let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
      let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
      console.log(totalHoursInYear + ' hours in a year');
      console.log(totalHoursInWeek + ' hours in a week');
      
      // Simpleformula
      let dailySalary = wagesToConvert/daysWorkedPerWeek;
      let hourlyRate =  dailySalary/hoursWorkedPerDay;
      let weeklySalary = wagesToConvert;
      let biWeeklySalary = weeklySalary * 2;
      let semiMonthlySalary = (weeklySalary * 2)+5000;
      let monthlySalary = (weeklySalary * 4)+10000;
      let biMonthlySalary = monthlySalary * 2;
      let quarterlySalary = monthlySalary * 3;
      let semiAnnualSalary = monthlySalary * 6;
      let annualSalary = monthlySalary * 12;
      
      // Taxedformula
      let taxedHourlyRate = hourlyRate-(hourlyRate/100)*effectiveTaxInput;
      let taxeddailySalary = dailySalary-(dailySalary/100)*effectiveTaxInput;
      // let taxeddailySalary =dailySalary-((hourlyRate * hoursWorkedPerDay)/100)*effectiveTaxInput;

      let taxedWeeklySalary = weeklySalary-(weeklySalary/100)*effectiveTaxInput;
      let taxedBiWeeklySalary = biWeeklySalary-(biWeeklySalary/100)*effectiveTaxInput;
      let taxedSemiMonthlySalary = semiMonthlySalary-((semiMonthlySalary)/100)*effectiveTaxInput;
      let taxedMonthlySalary = monthlySalary-((monthlySalary/100)*effectiveTaxInput);
      let taxedBiMonthlySalary = biMonthlySalary-(biMonthlySalary/100)*effectiveTaxInput;
      let taxedQuarterlySalary = quarterlySalary-(quarterlySalary/100)*effectiveTaxInput;
      let taxedSemiAnnualSalary = semiAnnualSalary-(semiAnnualSalary/100)*effectiveTaxInput;
      let taxedAnnualSalary = annualSalary-(annualSalary/100)*effectiveTaxInput;
      
      
      
      let tax= document.getElementById('tax').value;
      
      if (tax == 'unTaxed') {
                  
        // untaxedcolums
        document.getElementById('untaxedAnnually').value=toComma(annualSalary);
        document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
        document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
        document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
        document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
        document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
        document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
        document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
        document.getElementById('untaxedDaily').value=toComma(dailySalary);
        document.getElementById('untaxedHourly').value=toComma(hourlyRate);
        
        // taxed columns
        document.getElementById('taxedAnnually').value=toComma(annualSalary);
        document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
        document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
        document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
        document.getElementById('taxedMonthly').value=toComma(monthlySalary);
        document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
        document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
        document.getElementById('taxedWeekly').value=toComma(weeklySalary);
        document.getElementById('taxedDaily').value=toComma(dailySalary);
        document.getElementById('taxedHourly').value=toComma(hourlyRate);
        }
        
        else if (tax == 'beforeTaxes') {
        // untaxedcolums
        document.getElementById('untaxedAnnually').value=toComma(annualSalary);
        document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
        document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
        document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
        document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
        document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
        document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
        document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
        document.getElementById('untaxedDaily').value=toComma(dailySalary);
        document.getElementById('untaxedHourly').value=toComma(hourlyRate);
        
        // taxed columns
        document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
        document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
        document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
        document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
        document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
        document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
        document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
        document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
        document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
        document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
        
        
          
        }
        else if (tax == 'afterTaxes') {
          // untaxedcolums
        document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
        document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
        document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
        document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
        document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
        document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
        document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
        document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
        document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
        document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
        
        // taxed columns
        document.getElementById('taxedAnnually').value= toComma(annualSalary);
        document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
        document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
        document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
        document.getElementById('taxedMonthly').value=toComma(monthlySalary);
        document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
        document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
        document.getElementById('taxedWeekly').value=toComma(weeklySalary);
        document.getElementById('taxedDaily').value= toComma(dailySalary);
        document.getElementById('taxedHourly').value=toComma(hourlyRate);
        }
      
      
      
      
      document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
      document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
      document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
      
      
      
      }
function biWeekly() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
        
    
        
        let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
        let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
        console.log(totalHoursInYear + ' hours in a year');
        console.log(totalHoursInWeek + ' hours in a week');
        
        // Simpleformula
        let biWeeklySalary = wagesToConvert;
        let weeklySalary = wagesToConvert/2;
        let dailySalary = weeklySalary/5;
        let hourlyRate =  dailySalary/8;
        let semiMonthlySalary = (hourlyRate * 84)-500;
        let monthlySalary = (weeklySalary * 4)+5000;
        let biMonthlySalary = monthlySalary * 2;
        let quarterlySalary = monthlySalary * 3;
        let semiAnnualSalary = monthlySalary * 6;
        let annualSalary = monthlySalary * 12;
        
        // Taxedformula
        let taxedHourlyRate = hourlyRate-(((hourlyRate)/100)*effectiveTaxInput);
        let taxeddailySalary = dailySalary-(((dailySalary )/100)*effectiveTaxInput);
        let taxedWeeklySalary = weeklySalary-(((weeklySalary)/100)*effectiveTaxInput);
        let taxedBiWeeklySalary = biWeeklySalary-(biWeeklySalary/100)*effectiveTaxInput;
        let taxedSemiMonthlySalary = semiMonthlySalary-(semiMonthlySalary/100)*effectiveTaxInput;
        let taxedMonthlySalary = monthlySalary-(monthlySalary/100)*effectiveTaxInput;
        let taxedBiMonthlySalary = biMonthlySalary-(biMonthlySalary/100)*effectiveTaxInput;
        let taxedQuarterlySalary = quarterlySalary-(quarterlySalary/100)*effectiveTaxInput;
        let taxedSemiAnnualSalary = semiAnnualSalary-(semiAnnualSalary/100)*effectiveTaxInput;
        let taxedAnnualSalary = annualSalary-(annualSalary/100)*effectiveTaxInput;
        
        
        
        let tax= document.getElementById('tax').value;
        
        if (tax == 'unTaxed') {
                  
          // untaxedcolums
          document.getElementById('untaxedAnnually').value=toComma(annualSalary);
          document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
          document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
          document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
          document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
          document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
          document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
          document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
          document.getElementById('untaxedDaily').value=toComma(dailySalary);
          document.getElementById('untaxedHourly').value=toComma(hourlyRate);
          
          // taxed columns
          document.getElementById('taxedAnnually').value=toComma(annualSalary);
          document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
          document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
          document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
          document.getElementById('taxedMonthly').value=toComma(monthlySalary);
          document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
          document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
          document.getElementById('taxedWeekly').value=toComma(weeklySalary);
          document.getElementById('taxedDaily').value=toComma(dailySalary);
          document.getElementById('taxedHourly').value=toComma(hourlyRate);
          }
          
          else if (tax == 'beforeTaxes') {
          // untaxedcolums
          document.getElementById('untaxedAnnually').value=toComma(annualSalary);
          document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
          document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
          document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
          document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
          document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
          document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
          document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
          document.getElementById('untaxedDaily').value=toComma(dailySalary);
          document.getElementById('untaxedHourly').value=toComma(hourlyRate);
          
          // taxed columns
          document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
          document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
          document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
          document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
          document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
          document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
          document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
          document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
          document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
          document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
          
          
            
          }
          else if (tax == 'afterTaxes') {
            // untaxedcolums
          document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
          document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
          document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
          document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
          document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
          document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
          document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
          document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
          document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
          document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
          
          // taxed columns
          document.getElementById('taxedAnnually').value= toComma(annualSalary);
          document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
          document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
          document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
          document.getElementById('taxedMonthly').value=toComma(monthlySalary);
          document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
          document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
          document.getElementById('taxedWeekly').value=toComma(weeklySalary);
          document.getElementById('taxedDaily').value= toComma(dailySalary);
          document.getElementById('taxedHourly').value=toComma(hourlyRate);
          }
        
        
        
        
        document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
        document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
        document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
        
        
        
        }
function semiMonthly() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
          
      
          
          let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
          let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
          console.log(totalHoursInYear + ' hours in a year');
          console.log(totalHoursInWeek + ' hours in a week');
          
          // Simpleformula
          let semiMonthlySalary = wagesToConvert;
          let biWeeklySalary = semiMonthlySalary-2400;
          let weeklySalary = biWeeklySalary/2;
          let dailySalary = weeklySalary/5;
          let hourlyRate =  dailySalary/8;
          let monthlySalary = (semiMonthlySalary*2);
          let biMonthlySalary = monthlySalary * 2;
          let quarterlySalary = monthlySalary * 3;
          let semiAnnualSalary = monthlySalary * 6;
          let annualSalary = monthlySalary * 12;
          
          // Taxedformula
          let taxedHourlyRate = hourlyRate-(((hourlyRate)/100)*effectiveTaxInput);
          let taxeddailySalary = dailySalary-(((dailySalary )/100)*effectiveTaxInput);
          let taxedWeeklySalary = weeklySalary-(((weeklySalary)/100)*effectiveTaxInput);
          let taxedBiWeeklySalary = biWeeklySalary-(biWeeklySalary/100)*effectiveTaxInput;
          let taxedSemiMonthlySalary = semiMonthlySalary-(semiMonthlySalary/100)*effectiveTaxInput;
          let taxedMonthlySalary = monthlySalary-(monthlySalary/100)*effectiveTaxInput;
          let taxedBiMonthlySalary = biMonthlySalary-(biMonthlySalary/100)*effectiveTaxInput;
          let taxedQuarterlySalary = quarterlySalary-(quarterlySalary/100)*effectiveTaxInput;
          let taxedSemiAnnualSalary = semiAnnualSalary-(semiAnnualSalary/100)*effectiveTaxInput;
          let taxedAnnualSalary = annualSalary-(annualSalary/100)*effectiveTaxInput;
          
          
          
          let tax= document.getElementById('tax').value;
          
          if (tax == 'unTaxed') {
                  
            // untaxedcolums
            document.getElementById('untaxedAnnually').value=toComma(annualSalary);
            document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
            document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
            document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
            document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
            document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
            document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
            document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
            document.getElementById('untaxedDaily').value=toComma(dailySalary);
            document.getElementById('untaxedHourly').value=toComma(hourlyRate);
            
            // taxed columns
            document.getElementById('taxedAnnually').value=toComma(annualSalary);
            document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
            document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
            document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
            document.getElementById('taxedMonthly').value=toComma(monthlySalary);
            document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
            document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
            document.getElementById('taxedWeekly').value=toComma(weeklySalary);
            document.getElementById('taxedDaily').value=toComma(dailySalary);
            document.getElementById('taxedHourly').value=toComma(hourlyRate);
            }
            
            else if (tax == 'beforeTaxes') {
            // untaxedcolums
            document.getElementById('untaxedAnnually').value=toComma(annualSalary);
            document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
            document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
            document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
            document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
            document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
            document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
            document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
            document.getElementById('untaxedDaily').value=toComma(dailySalary);
            document.getElementById('untaxedHourly').value=toComma(hourlyRate);
            
            // taxed columns
            document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
            document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
            document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
            document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
            document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
            document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
            document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
            document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
            document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
            document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
            
            
              
            }
            else if (tax == 'afterTaxes') {
              // untaxedcolums
            document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
            document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
            document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
            document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
            document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
            document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
            document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
            document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
            document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
            document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
            
            // taxed columns
            document.getElementById('taxedAnnually').value= toComma(annualSalary);
            document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
            document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
            document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
            document.getElementById('taxedMonthly').value=toComma(monthlySalary);
            document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
            document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
            document.getElementById('taxedWeekly').value=toComma(weeklySalary);
            document.getElementById('taxedDaily').value= toComma(dailySalary);
            document.getElementById('taxedHourly').value=toComma(hourlyRate);
            }
          
          
          
          
          document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
          document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
          document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
          
          
          
          }
function monthly() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
            
        
            
            let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
            let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
            console.log(totalHoursInYear + ' hours in a year');
            console.log(totalHoursInWeek + ' hours in a week');
            
            // Simpleformula
            let monthlySalary = wagesToConvert;
            let semiMonthlySalary = monthlySalary/2;
            let biWeeklySalary = semiMonthlySalary-1200;
            let weeklySalary = biWeeklySalary/2;
            let dailySalary = weeklySalary/5;
            let hourlyRate =  dailySalary/8;
            let biMonthlySalary = monthlySalary * 2;
            let quarterlySalary = monthlySalary * 3;
            let semiAnnualSalary = monthlySalary * 6;
            let annualSalary = monthlySalary * 12;
            
            // Taxedformula
            let taxedHourlyRate = hourlyRate-(((hourlyRate)/100)*effectiveTaxInput);
            let taxeddailySalary = dailySalary-(((dailySalary )/100)*effectiveTaxInput);
            let taxedWeeklySalary = weeklySalary-(((weeklySalary)/100)*effectiveTaxInput);
            let taxedBiWeeklySalary = biWeeklySalary-(biWeeklySalary/100)*effectiveTaxInput;
            let taxedSemiMonthlySalary = semiMonthlySalary-(semiMonthlySalary/100)*effectiveTaxInput;
            let taxedMonthlySalary = monthlySalary-(monthlySalary/100)*effectiveTaxInput;
            let taxedBiMonthlySalary = biMonthlySalary-(biMonthlySalary/100)*effectiveTaxInput;
            let taxedQuarterlySalary = quarterlySalary-(quarterlySalary/100)*effectiveTaxInput;
            let taxedSemiAnnualSalary = semiAnnualSalary-(semiAnnualSalary/100)*effectiveTaxInput;
            let taxedAnnualSalary = annualSalary-(annualSalary/100)*effectiveTaxInput;
            
            
            
            let tax= document.getElementById('tax').value;
            
            if (tax == 'unTaxed') {
                  
              // untaxedcolums
              document.getElementById('untaxedAnnually').value=toComma(annualSalary);
              document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
              document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
              document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
              document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
              document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
              document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
              document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
              document.getElementById('untaxedDaily').value=toComma(dailySalary);
              document.getElementById('untaxedHourly').value=toComma(hourlyRate);
              
              // taxed columns
              document.getElementById('taxedAnnually').value=toComma(annualSalary);
              document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
              document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
              document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
              document.getElementById('taxedMonthly').value=toComma(monthlySalary);
              document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
              document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
              document.getElementById('taxedWeekly').value=toComma(weeklySalary);
              document.getElementById('taxedDaily').value=toComma(dailySalary);
              document.getElementById('taxedHourly').value=toComma(hourlyRate);
              }
              
              else if (tax == 'beforeTaxes') {
              // untaxedcolums
              document.getElementById('untaxedAnnually').value=toComma(annualSalary);
              document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
              document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
              document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
              document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
              document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
              document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
              document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
              document.getElementById('untaxedDaily').value=toComma(dailySalary);
              document.getElementById('untaxedHourly').value=toComma(hourlyRate);
              
              // taxed columns
              document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
              document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
              document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
              document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
              document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
              document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
              document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
              document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
              document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
              document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
              
              
                
              }
              else if (tax == 'afterTaxes') {
                // untaxedcolums
              document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
              document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
              document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
              document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
              document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
              document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
              document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
              document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
              document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
              document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
              
              // taxed columns
              document.getElementById('taxedAnnually').value= toComma(annualSalary);
              document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
              document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
              document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
              document.getElementById('taxedMonthly').value=toComma(monthlySalary);
              document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
              document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
              document.getElementById('taxedWeekly').value=toComma(weeklySalary);
              document.getElementById('taxedDaily').value= toComma(dailySalary);
              document.getElementById('taxedHourly').value=toComma(hourlyRate);
              }
            
            
            
            
            document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
            document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
            document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
            
            
            
            }
function biMonthly() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
              
          
              
              let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
              let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
              console.log(totalHoursInYear + ' hours in a year');
              console.log(totalHoursInWeek + ' hours in a week');
              
              // Simpleformula
              let biMonthlySalary = wagesToConvert;
              let monthlySalary = biMonthlySalary/2;
              let semiMonthlySalary = monthlySalary/2;
              let biWeeklySalary = semiMonthlySalary-600;
              let weeklySalary = biWeeklySalary/2;
              let dailySalary = weeklySalary/5;
              let hourlyRate =  dailySalary/8;
              let quarterlySalary = monthlySalary * 3;
              let semiAnnualSalary = monthlySalary * 6;
              let annualSalary = monthlySalary * 12;
              
              // Taxedformula
              let taxedHourlyRate = hourlyRate-(((hourlyRate)/100)*effectiveTaxInput);
              let taxeddailySalary = dailySalary-(((dailySalary )/100)*effectiveTaxInput);
              let taxedWeeklySalary = weeklySalary-(((weeklySalary)/100)*effectiveTaxInput);
              let taxedBiWeeklySalary = biWeeklySalary-(biWeeklySalary/100)*effectiveTaxInput;
              let taxedSemiMonthlySalary = semiMonthlySalary-(semiMonthlySalary/100)*effectiveTaxInput;
              let taxedMonthlySalary = monthlySalary-(monthlySalary/100)*effectiveTaxInput;
              let taxedBiMonthlySalary = biMonthlySalary-(biMonthlySalary/100)*effectiveTaxInput;
              let taxedQuarterlySalary = quarterlySalary-(quarterlySalary/100)*effectiveTaxInput;
              let taxedSemiAnnualSalary = semiAnnualSalary-(semiAnnualSalary/100)*effectiveTaxInput;
              let taxedAnnualSalary = annualSalary-(annualSalary/100)*effectiveTaxInput;
              
              
              
              let tax= document.getElementById('tax').value;
              
              if (tax == 'unTaxed') {
                  
                // untaxedcolums
                document.getElementById('untaxedAnnually').value=toComma(annualSalary);
                document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
                document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
                document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
                document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
                document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
                document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
                document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
                document.getElementById('untaxedDaily').value=toComma(dailySalary);
                document.getElementById('untaxedHourly').value=toComma(hourlyRate);
                
                // taxed columns
                document.getElementById('taxedAnnually').value=toComma(annualSalary);
                document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
                document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
                document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
                document.getElementById('taxedMonthly').value=toComma(monthlySalary);
                document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
                document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
                document.getElementById('taxedWeekly').value=toComma(weeklySalary);
                document.getElementById('taxedDaily').value=toComma(dailySalary);
                document.getElementById('taxedHourly').value=toComma(hourlyRate);
                }
                
                else if (tax == 'beforeTaxes') {
                // untaxedcolums
                document.getElementById('untaxedAnnually').value=toComma(annualSalary);
                document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
                document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
                document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
                document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
                document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
                document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
                document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
                document.getElementById('untaxedDaily').value=toComma(dailySalary);
                document.getElementById('untaxedHourly').value=toComma(hourlyRate);
                
                // taxed columns
                document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
                document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
                document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
                document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
                document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
                document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
                document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
                document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
                document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
                document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
                
                
                  
                }
                else if (tax == 'afterTaxes') {
                  // untaxedcolums
                document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
                document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
                document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
                document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
                document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
                document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
                document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
                document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
                document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
                document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
                
                // taxed columns
                document.getElementById('taxedAnnually').value= toComma(annualSalary);
                document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
                document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
                document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
                document.getElementById('taxedMonthly').value=toComma(monthlySalary);
                document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
                document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
                document.getElementById('taxedWeekly').value=toComma(weeklySalary);
                document.getElementById('taxedDaily').value= toComma(dailySalary);
                document.getElementById('taxedHourly').value=toComma(hourlyRate);
                }
              
              
              
              
              document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
              document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
              document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
              
              
              
              }
function quarterly() {
 
  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
                
            
                
                let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
                let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
                console.log(totalHoursInYear + ' hours in a year');
                console.log(totalHoursInWeek + ' hours in a week');
                
                // Simpleformula
                let quarterlySalary = wagesToConvert;
                let monthlySalary = quarterlySalary/3;
                let biMonthlySalary = monthlySalary * 2;
                let semiMonthlySalary = monthlySalary/2;
                let biWeeklySalary = semiMonthlySalary-400;
                let weeklySalary = biWeeklySalary/2;
                let dailySalary = weeklySalary/5;
                let hourlyRate =  dailySalary/8;
                let semiAnnualSalary = monthlySalary * 6;
                let annualSalary = monthlySalary * 12;
                
                // Taxedformula
                let taxedHourlyRate = hourlyRate-(((hourlyRate)/100)*effectiveTaxInput);
                let taxeddailySalary = dailySalary-(((dailySalary )/100)*effectiveTaxInput);
                let taxedWeeklySalary = weeklySalary-(((weeklySalary)/100)*effectiveTaxInput);
                let taxedBiWeeklySalary = biWeeklySalary-(biWeeklySalary/100)*effectiveTaxInput;
                let taxedSemiMonthlySalary = semiMonthlySalary-(semiMonthlySalary/100)*effectiveTaxInput;
                let taxedMonthlySalary = monthlySalary-(monthlySalary/100)*effectiveTaxInput;
                let taxedBiMonthlySalary = biMonthlySalary-(biMonthlySalary/100)*effectiveTaxInput;
                let taxedQuarterlySalary = quarterlySalary-(quarterlySalary/100)*effectiveTaxInput;
                let taxedSemiAnnualSalary = semiAnnualSalary-(semiAnnualSalary/100)*effectiveTaxInput;
                let taxedAnnualSalary = annualSalary-(annualSalary/100)*effectiveTaxInput;
                
                
                
                let tax= document.getElementById('tax').value;
                
                if (tax == 'unTaxed') {
                  
                  // untaxedcolums
                  document.getElementById('untaxedAnnually').value=toComma(annualSalary);
                  document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
                  document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
                  document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
                  document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
                  document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
                  document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
                  document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
                  document.getElementById('untaxedDaily').value=toComma(dailySalary);
                  document.getElementById('untaxedHourly').value=toComma(hourlyRate);
                  
                  // taxed columns
                  document.getElementById('taxedAnnually').value=toComma(annualSalary);
                  document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
                  document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
                  document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
                  document.getElementById('taxedMonthly').value=toComma(monthlySalary);
                  document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
                  document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
                  document.getElementById('taxedWeekly').value=toComma(weeklySalary);
                  document.getElementById('taxedDaily').value=toComma(dailySalary);
                  document.getElementById('taxedHourly').value=toComma(hourlyRate);
                  }
                  
                  else if (tax == 'beforeTaxes') {
                  // untaxedcolums
                  document.getElementById('untaxedAnnually').value=toComma(annualSalary);
                  document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
                  document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
                  document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
                  document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
                  document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
                  document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
                  document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
                  document.getElementById('untaxedDaily').value=toComma(dailySalary);
                  document.getElementById('untaxedHourly').value=toComma(hourlyRate);
                  
                  // taxed columns
                  document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
                  document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
                  document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
                  document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
                  document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
                  document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
                  document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
                  document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
                  document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
                  document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
                  
                  
                    
                  }
                  else if (tax == 'afterTaxes') {
                    // untaxedcolums
                  document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
                  document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
                  document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
                  document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
                  document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
                  document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
                  document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
                  document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
                  document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
                  document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
                  
                  // taxed columns
                  document.getElementById('taxedAnnually').value= toComma(annualSalary);
                  document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
                  document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
                  document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
                  document.getElementById('taxedMonthly').value=toComma(monthlySalary);
                  document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
                  document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
                  document.getElementById('taxedWeekly').value=toComma(weeklySalary);
                  document.getElementById('taxedDaily').value= toComma(dailySalary);
                  document.getElementById('taxedHourly').value=toComma(hourlyRate);
                  }
                
                
                
                
                document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
                document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
                document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
                
                
                
                }
function semiAnnually() {
 
                  let wagesToConvert= parseFloat(document.getElementById('wagesToConvert').value);
                  let weeksWorkedPerYear= parseFloat(document.getElementById('weeksWorkedPerYear').value);
                  let hoursWorkedPerDay= parseFloat(document.getElementById('hoursWorkedPerDay').value);
                  let daysWorkedPerWeek= parseFloat(document.getElementById('daysWorkedPerWeek').value);
                  let effectiveTaxInput= parseFloat(document.getElementById('effectiveTaxInput').value);
                  
              
                  
                  let totalHoursInWeek = hoursWorkedPerDay * daysWorkedPerWeek;
                  let totalHoursInYear = totalHoursInWeek * weeksWorkedPerYear;
                  console.log(totalHoursInYear + ' hours in a year');
                  console.log(totalHoursInWeek + ' hours in a week');
                  
                  // Simpleformula
                  let semiAnnualSalary = wagesToConvert;
                  let quarterlySalary = semiAnnualSalary/2;
                  let monthlySalary = quarterlySalary/3;
                  let biMonthlySalary = monthlySalary * 2;
                  let semiMonthlySalary = monthlySalary/2;
                  let biWeeklySalary = semiMonthlySalary-200;
                  let weeklySalary = biWeeklySalary/2;
                  let dailySalary = weeklySalary/5;
                  let hourlyRate =  dailySalary/8;
                  let annualSalary = monthlySalary * 12;
                  
                  // Taxedformula
                  let taxedHourlyRate = hourlyRate-(((hourlyRate)/100)*effectiveTaxInput);
                  let taxeddailySalary = dailySalary-(((dailySalary )/100)*effectiveTaxInput);
                  let taxedWeeklySalary = weeklySalary-(((weeklySalary)/100)*effectiveTaxInput);
                  let taxedBiWeeklySalary = biWeeklySalary-(biWeeklySalary/100)*effectiveTaxInput;
                  let taxedSemiMonthlySalary = semiMonthlySalary-(semiMonthlySalary/100)*effectiveTaxInput;
                  let taxedMonthlySalary = monthlySalary-(monthlySalary/100)*effectiveTaxInput;
                  let taxedBiMonthlySalary = biMonthlySalary-(biMonthlySalary/100)*effectiveTaxInput;
                  let taxedQuarterlySalary = quarterlySalary-(quarterlySalary/100)*effectiveTaxInput;
                  let taxedSemiAnnualSalary = semiAnnualSalary-(semiAnnualSalary/100)*effectiveTaxInput;
                  let taxedAnnualSalary = annualSalary-(annualSalary/100)*effectiveTaxInput;
                  
                  
                  
                  let tax= document.getElementById('tax').value;
                  
                  if (tax == 'unTaxed') {
                  
                  // untaxedcolums
                  document.getElementById('untaxedAnnually').value=toComma(annualSalary);
                  document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
                  document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
                  document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
                  document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
                  document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
                  document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
                  document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
                  document.getElementById('untaxedDaily').value=toComma(dailySalary);
                  document.getElementById('untaxedHourly').value=toComma(hourlyRate);
                  
                  // taxed columns
                  document.getElementById('taxedAnnually').value=toComma(annualSalary);
                  document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
                  document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
                  document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
                  document.getElementById('taxedMonthly').value=toComma(monthlySalary);
                  document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
                  document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
                  document.getElementById('taxedWeekly').value=toComma(weeklySalary);
                  document.getElementById('taxedDaily').value=toComma(dailySalary);
                  document.getElementById('taxedHourly').value=toComma(hourlyRate);
                  }
                  
                  else if (tax == 'beforeTaxes') {
                  // untaxedcolums
                  document.getElementById('untaxedAnnually').value=toComma(annualSalary);
                  document.getElementById('untaxedSemiAnnually').value=toComma(semiAnnualSalary);
                  document.getElementById('untaxedQuarterly').value=toComma(quarterlySalary);
                  document.getElementById('untaxedBiMonthly').value=toComma(biMonthlySalary);
                  document.getElementById('untaxedMonthly').value=toComma(monthlySalary);
                  document.getElementById('untaxedSemiMonthly').value=toComma(semiMonthlySalary);
                  document.getElementById('untaxedBiWeekly').value=toComma(biWeeklySalary);
                  document.getElementById('untaxedWeekly').value=toComma(weeklySalary);
                  document.getElementById('untaxedDaily').value=toComma(dailySalary);
                  document.getElementById('untaxedHourly').value=toComma(hourlyRate);
                  
                  // taxed columns
                  document.getElementById('taxedAnnually').value=toComma(taxedAnnualSalary);
                  document.getElementById('taxedSemiAnnually').value=toComma(taxedSemiAnnualSalary);
                  document.getElementById('taxedQuarterly').value=toComma(taxedQuarterlySalary);
                  document.getElementById('taxedBiMonthly').value=toComma(taxedBiMonthlySalary);
                  document.getElementById('taxedMonthly').value=toComma(taxedMonthlySalary);
                  document.getElementById('taxedSemiMonthly').value=toComma(taxedSemiMonthlySalary);
                  document.getElementById('taxedBiWeekly').value=toComma(taxedBiWeeklySalary);
                  document.getElementById('taxedWeekly').value=toComma(taxedWeeklySalary);
                  document.getElementById('taxedDaily').value=toComma(taxeddailySalary);
                  document.getElementById('taxedHourly').value=toComma(taxedHourlyRate);
                  
                  
                    
                  }
                  else if (tax == 'afterTaxes') {
                    // untaxedcolums
                  document.getElementById('untaxedAnnually').value=toComma(taxedAnnualSalary);
                  document.getElementById('untaxedSemiAnnually').value= toComma(taxedSemiAnnualSalary);
                  document.getElementById('untaxedQuarterly').value=toComma(taxedQuarterlySalary);
                  document.getElementById('untaxedBiMonthly').value=toComma(taxedBiMonthlySalary);
                  document.getElementById('untaxedMonthly').value= toComma(taxedMonthlySalary);
                  document.getElementById('untaxedSemiMonthly').value= toComma(taxedSemiMonthlySalary);
                  document.getElementById('untaxedBiWeekly').value=toComma(taxedBiWeeklySalary);
                  document.getElementById('untaxedWeekly').value= toComma(taxedWeeklySalary);
                  document.getElementById('untaxedDaily').value= toComma(taxeddailySalary);
                  document.getElementById('untaxedHourly').value= toComma(taxedHourlyRate);
                  
                  // taxed columns
                  document.getElementById('taxedAnnually').value= toComma(annualSalary);
                  document.getElementById('taxedSemiAnnually').value=toComma(semiAnnualSalary);
                  document.getElementById('taxedQuarterly').value=toComma(quarterlySalary);
                  document.getElementById('taxedBiMonthly').value=toComma(biMonthlySalary);
                  document.getElementById('taxedMonthly').value=toComma(monthlySalary);
                  document.getElementById('taxedSemiMonthly').value=toComma(semiMonthlySalary);
                  document.getElementById('taxedBiWeekly').value=toComma(biWeeklySalary);
                  document.getElementById('taxedWeekly').value=toComma(weeklySalary);
                  document.getElementById('taxedDaily').value= toComma(dailySalary);
                  document.getElementById('taxedHourly').value=toComma(hourlyRate);
                  }
                  
                  
                  
                  
                  document.getElementById('hoursWorkedPerWeek1').value = totalHoursInWeek;
                  document.getElementById('hoursWorkedPerMonth').value=totalHoursInWeek*4;
                  document.getElementById('hoursWorkedPerYear').value=(totalHoursInWeek*4)*12;
                  
                  
                  
                  }


function clearall() {
    console.log('hello');
    let check1 = document.getElementById('convert');
    let check2 = document.getElementById('clear');
    let btn1 = document.getElementById('convertBtn');
    let btn2 = document.getElementById('clearBtn');
  
      if (!btn2.active) {
        check2.classList.remove('d-none');
        check1.classList.add('d-none');
      }

      clear();
      
      }
function clear(){
  // untaxedcolums
  document.getElementById('untaxedAnnually').value="";
  document.getElementById('untaxedSemiAnnually').value="";
  document.getElementById('untaxedQuarterly').value="";
  document.getElementById('untaxedBiMonthly').value="";
  document.getElementById('untaxedMonthly').value="";
  document.getElementById('untaxedSemiMonthly').value="";
  document.getElementById('untaxedBiWeekly').value="";
  document.getElementById('untaxedWeekly').value="";
  document.getElementById('untaxedDaily').value="";
  document.getElementById('untaxedHourly').value="";
  
  // taxed columns
  document.getElementById('taxedAnnually').value="";
  document.getElementById('taxedSemiAnnually').value="";
  document.getElementById('taxedQuarterly').value="";
  document.getElementById('taxedBiMonthly').value="";
  document.getElementById('taxedMonthly').value="";
  document.getElementById('taxedSemiMonthly').value="";
  document.getElementById('taxedBiWeekly').value="";
  document.getElementById('taxedWeekly').value="";
  document.getElementById('taxedDaily').value="";
  document.getElementById('taxedHourly').value="";

  document.getElementById('hoursWorkedPerWeek1').value = "";
  document.getElementById('hoursWorkedPerMonth').value="";
  document.getElementById('hoursWorkedPerYear').value="";
}



let toComma = (x) => "$ " + x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");