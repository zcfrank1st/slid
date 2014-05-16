# Slid

## Description

A tool for generating fantastic slides

## How To Use
Install:

	npm install -g slid
	
Run:
	
	slid --generate [num]
	
such as `slid --generate 3`, using template 3	to generate config file in the current folder.
You, what ever, finish filling the content in the config file as

	slide1: XXX
	slide2: YYY
	slide3: ZZZ
	
	
,then run 

	slid --render [num]

such as `slid --render 3`, using template 3 to render slides, at last run

	slid --run

to watch the slides

P.S. Now `slid` supports 2 templates, 3 and 6 which allow you to generate slides with 3 or 6 pages.
	

## Licence

(The MIT License)

Copyright (c) 2014 zcfrank1st

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.