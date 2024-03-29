
var finances = [
    ['Jan-2010', 867884], 
    ['Feb-2010', 984655], 
    ['Mar-2010', 322013], 
    ['Apr-2010', -69417], 
    ['May-2010', 310503], 
    ['Jun-2010', 522857], 
    ['Jul-2010', 1033096], 
    ['Aug-2010', 604885], 
    ['Sep-2010', -216386], 
    ['Oct-2010', 477532], 
    ['Nov-2010', 893810], 
    ['Dec-2010', -80353], 
    ['Jan-2011', 779806], 
    ['Feb-2011', -335203], 
    ['Mar-2011', 697845], 
    ['Apr-2011', 793163], 
    ['May-2011', 485070], 
    ['Jun-2011', 584122], 
    ['Jul-2011', 62729], 
    ['Aug-2011', 668179], 
    ['Sep-2011', 899906], 
    ['Oct-2011', 834719], 
    ['Nov-2011', 132003], 
    ['Dec-2011', 309978], 
    ['Jan-2012', -755566], 
    ['Feb-2012', 1170593], 
    ['Mar-2012', 252788], 
    ['Apr-2012', 1151518], 
    ['May-2012', 817256], 
    ['Jun-2012', 570757], 
    ['Jul-2012', 506702], 
    ['Aug-2012', -1022534], 
    ['Sep-2012', 475062], 
    ['Oct-2012', 779976], 
    ['Nov-2012', 144175], 
    ['Dec-2012', 542494], 
    ['Jan-2013', 359333], 
    ['Feb-2013', 321469], 
    ['Mar-2013', 67780], 
    ['Apr-2013', 471435], 
    ['May-2013', 565603], 
    ['Jun-2013', 872480], 
    ['Jul-2013', 789480], 
    ['Aug-2013', 999942], 
    ['Sep-2013', -1196225], 
    ['Oct-2013', 268997], 
    ['Nov-2013', -687986], 
    ['Dec-2013', 1150461], 
    ['Jan-2014', 682458], 
    ['Feb-2014', 617856], 
    ['Mar-2014', 824098], 
    ['Apr-2014', 581943], 
    ['May-2014', 132864], 
    ['Jun-2014', 448062], 
    ['Jul-2014', 689161], 
    ['Aug-2014', 800701], 
    ['Sep-2014', 1166643], 
    ['Oct-2014', 947333], 
    ['Nov-2014', 578668], 
    ['Dec-2014', 988505], 
    ['Jan-2015', 1139715], 
    ['Feb-2015', 1029471], 
    ['Mar-2015', 687533], 
    ['Apr-2015', -524626], 
    ['May-2015', 158620], 
    ['Jun-2015', 87795], 
    ['Jul-2015', 423389], 
    ['Aug-2015', 840723], 
    ['Sep-2015', 568529], 
    ['Oct-2015', 332067], 
    ['Nov-2015', 989499], 
    ['Dec-2015', 778237], 
    ['Jan-2016', 650000], 
    ['Feb-2016', -1100387], 
    ['Mar-2016', -174946], 
    ['Apr-2016', 757143], 
    ['May-2016', 445709], 
    ['Jun-2016', 712961], 
    ['Jul-2016', -1163797], 
    ['Aug-2016', 569899], 
    ['Sep-2016', 768450], 
    ['Oct-2016', 102685], 
    ['Nov-2016', 795914], 
    ['Dec-2016', 60988], 
    ['Jan-2017', 138230], 
    ['Feb-2017', 671099] 
    ];
    
     // The total amount of months is the length of the array, to get that, I just had to console log the finances length.
     console.log('The total number of months is: ' + finances.length) 
    
     // The total amount of profit/losses over the entire period.
     // To get the net total amount of the profit change, I need to iterate through the finances array
     // and withdraw the previous income from the current one, to get the difference.
     // I start the iteration at index 1, since there is no income in the first month.
     // I made a variable called profitChange and assigned 0 as a value, since we don't know the value yet.
     // In the for loop I made a new variable currentChange = (finances[i][1] - finances[i-1][1])
     // this is looping through the array and withdraws the previous amount of income from the current one.
     // On line 124 in the for loop I am adding these new values to the profitChange variable
     // and that's how I get the total amount.

     // To find the greatest income and the greatest loss over the entire period, I made 4 new variables above 
     // the for loop and assigned 0 as a value, and I put two if statements in the for loop.
     // While it is iterating through the array it checks if the max increase is less or equal to currentChange.
     // If the statement is true, then it assigns a new value to maxIncrease ( maxIncrease = currentChange ),
     // which gives me the amount of increase in the income. 
     // The maxIncreasePeriod = i is showing the index so I know which month and year it is.
     // I did the same method to find out which month has the greatest loss in income.

     // To get the average of the changes in profit/losses over the entire period I need to divide the maximum amount
     // of profit/losses with the finances length/maximum amount of months.

     var profitChange = 0;
     var maxIncrease = 0;
     var maxIncreasePeriod = 0;
     var minIncrease = 0;
     var minIncreasePeriod = 0;

     for ( var i = 1; i < finances.length; i++) {      
     var currentChange = (finances[i][1] - finances[i-1][1])
         console.log('Current i = ' + i) 
         profitChange += (finances[i][1] - finances[i-1][1]); 
         console.log('Total Amount : $' + profitChange); 
     if ( maxIncrease <= currentChange ) { 
          maxIncreasePeriod = i 
          maxIncrease = currentChange;
     }
     
     if ( minIncrease >= currentChange ) {
          minIncreasePeriod = i
          minIncrease = currentChange;
     }
    }

    console.log('The total amount of income/losses over the entire period is $ ' + profitChange);
    
    var averageProfit = (profitChange / finances.length);
    console.log('The average of the changes in profit/losses over the entire period: $' + averageProfit.toFixed(2)) 
    
     
    console.log('The greatest increase in income is in ' + finances[maxIncreasePeriod]);
    console.log(' With the income of $ ' + maxIncrease);

    console.log('The greatest decrease in income is in ' + finances[minIncreasePeriod]);
    console.log(' With the loss of $ ' + minIncrease);
    
    
    
    
    
    
    
    
    
    
    
    
    