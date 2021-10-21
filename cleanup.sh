#!/bin/bash

sed \
    -i \
    -r \
    's#(re-resizable)@([0-9]+\.){2}[0-9]+(-[a-z.0-9]+)?/#\1/#g' \
    re-resizable*.js

find \
    ./mdast* \
    -name '*.js' \
    -print0 \
| xargs -0 -I{} \
    sed \
        -i \
        -r \
        's#(container-phrasing|inline-code|list-item).js"#\1"#g' \
        {}

find \
    ./micromark* ./unist* \
    -name '*.js' \
    -print0 \
| xargs -0 -I{} \
    sed \
        -i \
        -r \
        's#"\./((micromark|unist)[^"@]*)@[0-9]+\.[0-9]+\.[0-9]+("|/)#"\1\3#g' \
        {}


find \
    './@material-ui/' \
    -name '*.js' \
    -print0 \
| xargs -0 -I{} \
    sed \
        -i \
        -r \
        's#(core|types|utils|styles|system|lab|icons|pickers)@([0-9]+\.){2}[0-9]+(-[a-z.0-9]+)?(/[^".]+")#\1\4#g; s#("@material-ui/)es/(utils")#\1\2#; s#(/(Picker-[0-9a-f]+|inherits|extends|objectWithoutProperties(Loose|)))-[0-9a-f]{8}"#\1"#g' \
        {}

find \
    './@material-ui/' \
    -maxdepth 1 \
    '(' \
        -name 'Picker-*@*.js*' \
    -o \
        -name 'objectWithoutProperties*@*.js*' \
    -o \
        -name 'inherits@*.js*' \
    -o \
        -name 'extends@*.js*' \
    ')' \
    -print0 \
| xargs -0 -I{} \
    rm {}

mv \
    ./@material-ui/objectWithoutPropertiesLoose-*.js \
    `ls ./@material-ui/objectWithoutPropertiesLoose-*.js | sed -r 's#-([^/-]*$)#@\1#'`
mv \
    ./@material-ui/objectWithoutProperties-*.js \
    `ls ./@material-ui/objectWithoutProperties-*.js | sed -r 's#-([^/-]*$)#@\1#'`
mv \
    ./@material-ui/Picker-*-*.js \
    `ls ./@material-ui/Picker-*-*.js | sed -r 's#-([^/-]*$)#@\1#'`
mv \
    ./@material-ui/inherits-*.js \
    `ls ./@material-ui/inherits-*.js | sed -r 's#-([^/-]*$)#@\1#'`
mv \
    ./@material-ui/extends-*.js \
    `ls ./@material-ui/extends-*.js | sed -r 's#-([^/-]*$)#@\1#'`

