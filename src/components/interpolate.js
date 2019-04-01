const Interpolate = () =>{
    var interpolateObj = {};
    let upIndex,downIndex,leftIndex,rightIndex;
    let top = 22, left = 22, ptop,pleft,ntop, nleft;
    for(var i = 0;i<16;i++){
        upIndex = i - 4;
        downIndex = i+4;
        leftIndex = i -1;
        rightIndex = i +1 ;
        ptop = top +(130*Math.floor(i/4));
        pleft = left +(92*(i%4));
        if(upIndex >=0){
            ntop = top +(130*Math.floor(upIndex/4));
            nleft = left +(92*(upIndex%4));
            interpolateObj['move-up-'+i] = {from:{top:ptop,left:pleft},to:{top:ntop, left:nleft}};
        }
        if(rightIndex % 4 > 0){
            ntop = top +(130*Math.floor(rightIndex/4));
            nleft = left +(92*(rightIndex%4));
            interpolateObj['move-right-'+i] = {from:{top:ptop,left:pleft},to:{top:ntop, left:nleft}};
        }
        if(downIndex <16){
            ntop = top +(130*Math.floor(downIndex/4));
            nleft = left +(92*(downIndex%4));
            interpolateObj['move-down-'+i] = {from:{top:ptop,left:pleft},to:{top:ntop, left:nleft}};
        }
        if(i % 4 !== 0){
            ntop = top +(130*Math.floor(leftIndex/4));
            nleft = left +(92*(leftIndex%4));
            interpolateObj['move-left-'+i] = {from:{top:ptop,left:pleft},to:{top:ntop, left:nleft}};
        }

        // normal style
        ntop = top +(130*Math.floor(i/4));
        nleft = left +(92*(i%4));
        interpolateObj['index-'+i] = {top:ntop,left:nleft};
    };
    // bonus up
    interpolateObj['bonus-up-12'] = {from:{top:542,left:22},to:{top:410, left:22}};
    interpolateObj['bonus-up-13'] = {from:{top:542,left:114},to:{top:410, left:114}};
    interpolateObj['bonus-up-14'] = {from:{top:542,left:206},to:{top:410, left:206}};
    interpolateObj['bonus-up-15'] = {from:{top:542,left:298},to:{top:410, left:298}};
    // bonus down
    interpolateObj['bonus-down-0'] = {from:{top:-110,left:22},to:{top:22, left:22}};
    interpolateObj['bonus-down-1'] = {from:{top:-110,left:114},to:{top:22, left:114}};
    interpolateObj['bonus-down-2'] = {from:{top:-110,left:206},to:{top:22, left:206}};
    interpolateObj['bonus-down-3'] = {from:{top:-110,left:298},to:{top:22, left:298}};
    // bonus right
    interpolateObj['bonus-right-0'] = {from:{top:22,left:-80},to:{top:22, left:22}};
    interpolateObj['bonus-right-4'] = {from:{top:152,left:-80},to:{top:152, left:22}};
    interpolateObj['bonus-right-8'] = {from:{top:282,left:-80},to:{top:282, left:22}};
    interpolateObj['bonus-right-12'] = {from:{top:412,left:-80},to:{top:412, left:22}};
    // bonus left
    interpolateObj['bonus-left-3'] = {from:{top:22,left:400},to:{top:22, left:298}};
    interpolateObj['bonus-left-7'] = {from:{top:152,left:400},to:{top:152, left:298}};
    interpolateObj['bonus-left-11'] = {from:{top:282,left:400},to:{top:282, left:298}};
    interpolateObj['bonus-left-15'] = {from:{top:412,left:400},to:{top:412, left:298}};

    //
    return interpolateObj;
};
export { Interpolate };