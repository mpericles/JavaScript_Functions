console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n== Print Odds/ Minimum Number======\n");

function printtodds(count)
{

    // This works without the bonues
    //for ( let i = 1; i <= count ; i++)
    //{
    //if (i %2 != 0)
    //{
    //    console.log(i);
    //}
    
    if (count < 0)
    {
        // Bonus to account for negative count
        for (let i = -1; i >= count; i--)
        {
            if (i % 2 !=0)
            {
                console.log(i);
            }
        }
    }
    else
    {
        // account for positive number
        for (let i = 1; i <= count; i++)
            {
                if (i % 2 != 0)
                {
                    console.log(i);
                }
            }  
    }

}
printtodds(-10);
printtodds(10);

// Exercise 2 Section
console.log("\n==========\n");
console.log("EXERCISE 2:\n==Legal?=======\n");
let _name;
let age;
function checkAge(_name, age)
{
  let oldEnoughMsg = `Congrats ${_name}! You are ${age} can drive!`;
  let tooYoungMsg = `Sorry ${_name}, but you are ${age} and you need to wait until you're 16.`;
  if (age < 16)
  {
  console.log(tooYoungMsg);
  } 
  else 
  {
    console.log(oldEnoughMsg);
  }
}
checkAge("Myriam",18);
checkAge("Nancy",12);
checkAge("Ben",21);

// Exercise 3: Which Quadrant?Section
console.log("\n==========\n");
console.log("Exercise 3: :\n==Which Quadrant?=======\n");
function checkQuandrant(x,y)
{
    let quandrant;
    if         (x >0 && y >0)
    { 
        //return "Quadrant1";
        console.log("Quadrant1");
        console.log(`X is ${x} and Y is ${y}\n`);
        console.log("------------");
       
    } else if (x < 0 && y >0)
    {
        console.log("Quadrant2");
        console.log(`X is ${x} and Y is ${y}\n`);
        console.log("------------");
    } else if (x < 0 && y < 0 )
    {
        console.log("Quadrant3");
        console.log(`X is ${x} and Y is ${y}\n`);
        console.log("------------");
    } else if  ( x >0 && y < 0)
    {
        console.log( "Quadrant4");
        console.log(`X is ${x} and Y is ${y}\n`);
        console.log("------------");
    }  else if ( x==0 && y !=0)
    {
        console.log("X Axis");
        console.log(`X is ${x} and Y is ${y}\n`);
        console.log("------------");
    }else if (x != 0 && y ==0)
    {
        console.log("Y Axis");
        console.log(`X is ${x} and Y is ${y}\n`);
        console.log("------------");
    } else 
    {
        console.log( "both x and y are zero");
        console.log(`X is ${x} and Y is ${y}\n`);
        console.log("------------");
    }
}
checkQuandrant(5,5);
checkQuandrant(-5,5);
checkQuandrant(-5,-5);
checkQuandrant(5,-5);
checkQuandrant(0,5);
checkQuandrant(5,0);
checkQuandrant(0,0);




// Exercise 4 Section
console.log("\n==========\n");
console.log("EXERCISE 4:\n==What type of triangle?=======\n");
//First Need to check if the shape is a Triangle

function isValidTriangle(a,b,c)
    {
    return a + b > c && a + c >b && b +c > a;
    }

function checkTriangle(a ,b, c)
    {
    let Valid = isValidTriangle(a, b, c);
    if (Valid)
    {
                if (a == b && b == c)
                {
                    return "The Triamgle is Equilateral";
                } 
                else if (a == b || b == c || a == c)
                {
                    return "The Triamgle is Isoceles";
                }
                else ( a == b )
                { 
                 return "The Triamgle is Scalene";
                }
             
    } 
    else 
    {
    return "Not a valid triangle";
    }
    }

    console.log(checkTriangle(2,2,2)); // Equilateral
    console.log(checkTriangle(1,2,2)); // Isoceles
    console.log(checkTriangle(2,3,4)); // Scalene
    console.log(checkTriangle(1,1,2)); // not Valid

// Exercise 5 Section
console.log("\n==========\n");
console.log("EXERCISE 5:\n==Data Plan Status?=======\n");
/* planlimit , day, usage
```txt
`planLimit = 100`, `day = 15`, and `usage = 56`, 
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
```*/
function dataUsage(planLimit, day, usage) 
    { 
    let periodLength = 30;
    let currentAvg = usage/day;
    let projectedAvg = planLimit/periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg)
    { 
        statusMsg = "EXCEEDING";
    }
    else if (currentAvg < projectedAvg)
    {
        statusMsg = "UNDER";
    }
    else
    {
        statusMsg = "AT";
    }

    console.log(`The Plan limit is:  ${planLimit}. The Days used: ${day} day(s) used. The usage is: ${usage}`);
    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);
    console.log(`You are ${statusMsg} your average daily use (${currentAvg}GB/day),`);
    console.log(`continuing this high usage, you'll end up using ${(usage + projectedUsage)- planLimit} GB from your data limit.`);
    console.log(`To stay below your data plan, use no more than ${remainingData/remainingDays} GB/day.`);
    console.log(`=============================================================`);
    }
    dataUsage(100, 15, 56);
    dataUsage(50, 12, 25);
    dataUsage(50, 15, 25);
    dataUsage(50, 10, 25);
