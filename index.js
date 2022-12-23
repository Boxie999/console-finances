
var finances = [
    ['Jan-2010', 867884], //1 867884 - 0, or changes = 0 
    ['Feb-2010', 984655], //2 changes 984655 - 867884 = 116771
    ['Mar-2010', 322013], //3 changes 322013 - 984655 = -662642
    ['Apr-2010', -69417], //4 changes -69417 -322013 = -391430
    ['May-2010', 310503], //5 changes 310503 
    ['Jun-2010', 522857], //6
    ['Jul-2010', 1033096], //7
    ['Aug-2010', 604885], //8
    ['Sep-2010', -216386], //9
    ['Oct-2010', 477532], //10
    ['Nov-2010', 893810], //11
    ['Dec-2010', -80353], //12
    ['Jan-2011', 779806], //13
    ['Feb-2011', -335203], //14
    ['Mar-2011', 697845], //15
    ['Apr-2011', 793163], //16
    ['May-2011', 485070], //17
    ['Jun-2011', 584122], //18
    ['Jul-2011', 62729], //19
    ['Aug-2011', 668179], //20
    ['Sep-2011', 899906], //21
    ['Oct-2011', 834719], //22
    ['Nov-2011', 132003], //23
    ['Dec-2011', 309978], //24
    ['Jan-2012', -755566], //25
    ['Feb-2012', 1170593], //26
    ['Mar-2012', 252788], //27
    ['Apr-2012', 1151518], //28
    ['May-2012', 817256], //29
    ['Jun-2012', 570757], //30
    ['Jul-2012', 506702], //31
    ['Aug-2012', -1022534], //32
    ['Sep-2012', 475062], //33
    ['Oct-2012', 779976], //34
    ['Nov-2012', 144175], //35
    ['Dec-2012', 542494], //36
    ['Jan-2013', 359333], //37
    ['Feb-2013', 321469], //38
    ['Mar-2013', 67780], //39
    ['Apr-2013', 471435], //40
    ['May-2013', 565603], //41
    ['Jun-2013', 872480], //42
    ['Jul-2013', 789480], //43
    ['Aug-2013', 999942], //44
    ['Sep-2013', -1196225], //45
    ['Oct-2013', 268997], //46
    ['Nov-2013', -687986], //47
    ['Dec-2013', 1150461], //48
    ['Jan-2014', 682458], //49
    ['Feb-2014', 617856], //50
    ['Mar-2014', 824098], //51
    ['Apr-2014', 581943], //52
    ['May-2014', 132864], //53
    ['Jun-2014', 448062], //54
    ['Jul-2014', 689161], //55
    ['Aug-2014', 800701], //56
    ['Sep-2014', 1166643], //57
    ['Oct-2014', 947333], //58
    ['Nov-2014', 578668], //59
    ['Dec-2014', 988505], //60
    ['Jan-2015', 1139715], //61
    ['Feb-2015', 1029471], //62
    ['Mar-2015', 687533], //63
    ['Apr-2015', -524626], //64
    ['May-2015', 158620], //65
    ['Jun-2015', 87795], //66
    ['Jul-2015', 423389], //67
    ['Aug-2015', 840723], //68
    ['Sep-2015', 568529], //69
    ['Oct-2015', 332067], //70
    ['Nov-2015', 989499], //71
    ['Dec-2015', 778237], //72
    ['Jan-2016', 650000], //73
    ['Feb-2016', -1100387], //74
    ['Mar-2016', -174946], //75
    ['Apr-2016', 757143], //76
    ['May-2016', 445709], //77
    ['Jun-2016', 712961], //78
    ['Jul-2016', -1163797], //79
    ['Aug-2016', 569899], 
    ['Sep-2016', 768450], 
    ['Oct-2016', 102685], 
    ['Nov-2016', 795914], 
    ['Dec-2016', 60988], 
    ['Jan-2017', 138230], 
    ['Feb-2017', 671099] // changes 671099 - 138230 
    ];
    
    // The total number of months included in the dataset equals the lenght of the array.
    console.log('The total number of months is: ' + finances.length) // 86
    
    // The net total amount of Profit/Losses over the entire period.
    // To get the increase/decrease in profit we need to withdraw the income of the previous month from the
    // current month. Eg. (Aug-2016= 569899 Sep-2016= 7684500)  768450- 569899 = profit of september

    var profitChange = 0;
    for ( var i = 1; i < finances.length; i++) {      
       
         console.log('Current i = ' + i) 
         profitChange += (finances[i][1] - finances[i-1][1]); 
         console.log('Total Amount : $' + profitChange.toFixed(2)); 
    
    }
         
    // The average of the changes in Profit/Losses over the entire period.
    // Average changes in profit = Total amount of profit/ months

    var averageProfit = (profitChange / finances.length);
    console.log('The average of the changes in profit/losses over the entire period: $' + averageProfit.toFixed(2)) 
        
    // The greatest increase in profits (date and amount) over the entire period.
    
    var maxIncrease = Math.max(...finances);
    var index = finances.indexOf(maxIncrease);
    console.log(index); 

    
    
    // The greatest decrease in losses (date and amount) over the entire period.
    // Google "how to find minimum value of an array in javascript"

    var minIncrease = Math.min(...finances);
    var index = finances.indexOf(minIncrease);
    console.log(index);
    
    
    
    
    
    
    
    
    
    
    
    
    