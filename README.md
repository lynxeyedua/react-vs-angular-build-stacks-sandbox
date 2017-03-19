# react-vs-angular-build-stacks-sandbox
React vs Angular(2+) simple comparison


# Hello world
~~~
Angular2
- ng-cli v1.0.0-rc.2 + angular2 v.2.4.10: aot + prod = 324.5kb
- angular-rollup-starter v^0.41.4 + angular2 v.2.4.7: prod build = 254.7kb
~~~
~~~
React
- react + react-dow with webpack = 147kb
~~~

# Initial load and render page time, 10k date-cell elements + 10 location groups + 100 locations + 1000 job locations
- react(components as functions): 505 - 672 ms
- angular: 1.20 - 1.11s
~~~
React is faster appx 2x in this scenario.
~~~