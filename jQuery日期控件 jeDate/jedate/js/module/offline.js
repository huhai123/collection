/**
 * Created by Administrator on 2016/2/29 0029.
 */

window.onload=function(){
        jeDate({
            dateCell:"#indate",//isinitVal:true,
            format:"YYYY-MM-DD",
            isTime:false, //isClear:false,
            minDate:"2015-10-19 00:00:00",
            maxDate:"2016-11-8 00:00:00"
        })
    jeDate({
        dateCell:"#dateinfo",
        format:"YYYY年MM月DD日 hh:mm:ss",
        isinitVal:true,
        isTime:true, //isClear:false,
        minDate:"2014-09-19 00:00:00",
        okfun:function(val){alert(val)}
    })
}
