I was curious about having two separate libraries, one which had been transpiled for pre-es6 compatibility (essentially just IE and Opera Mobile), and one for all major browsers which have near full es6 support inbuilt.

This was inspired by looking at the compatibility charts:
http://kangax.github.io/compat-table/es6/

And then a comparison of transpiled code performance vs original es6 code:
http://incaseofstairs.com/six-speed/

(to view babel only this script removes the other tr's from the table on this page when run in the console:
```
rowspans = document.querySelectorAll('td[rowspan],th[rowspan]');
keeps = [...rowspans].map(x=> x.parentElement);
rows = document.querySelectorAll('tr');
trash = [...rows].filter(x=> !keeps.includes(x));

[...rowspans].map(x=> x.rowSpan=1);
trash.map(x=> x.remove());
```
