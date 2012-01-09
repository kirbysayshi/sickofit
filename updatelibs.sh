#!/bin/bash

# add whatever you need to this array
FILES[0]=https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
FILES[1]=http://dat-gui.googlecode.com/git/build/dat.gui.js
FILES[2]=https://raw.github.com/toji/gl-matrix/master/gl-matrix.js
FILES[3]=https://raw.github.com/mrdoob/stats.js/master/src/Stats.js
FILES[4]=https://raw.github.com/gist/1579671/rAF.js

pushd ./lib

for i in ${FILES[@]}; do
	filename=$(basename ${i})
	rm -f ${filename}
	wget ${i}
done

popd 

exit 0
