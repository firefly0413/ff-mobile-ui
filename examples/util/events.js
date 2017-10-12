
const events = {
    on:(el,type,callback) => {
        if(el.addEventListener){
            el.addEventListener(type,callback)
        }else{
            el.attachEvent('on'+type,function(){
                callback.call(el)
            });
        }
    },
    off:(el,type,callback) => {
        if(el.removeEventListener){
            el.removeEventListener(type,callback)
        }else{
            el.detachEvent('off'+type,callback)
        }
    }
}

export default events;