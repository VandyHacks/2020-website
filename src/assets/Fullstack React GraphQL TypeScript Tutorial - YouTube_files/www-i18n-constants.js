(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function f(m,e){var c=m.split("."),a=d;c[0]in a||"undefined"==typeof a.execScript||a.execScript("var "+c[0]);for(var b;c.length&&(b=c.shift());)c.length||void 0===e?a[b]&&a[b]!==Object.prototype[b]?a=a[b]:a=a[b]={}:a[b]=e}
;var g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"MMM d",MONTH_DAY_FULL:"MMMM dd",MONTH_DAY_SHORT:"M/d",MONTH_DAY_MEDIUM:"MMMM d",MONTH_DAY_YEAR_MEDIUM:"MMM d, y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, MMM d",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, MMM d, y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"MMM d, h:mm a zzzz"},h=g;h=g;var k={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5},l=k;l=k;f("YT_I18N_FORMATTING_GOOG_LOCALE","en");f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS",h);f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS",l);}).call(this);
