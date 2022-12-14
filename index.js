const __= (elf)=>{
    return document.querySelector(elf)
}
const bh = __('#bh')
const bm = __('#bm')
const bs = __('#bs')



const initTimeDegre= (time,hour=false)=>{
    time  = hour ? ((time >= 12) ? time-12 :time):time
    if(hour){
        return 30*time
    }
    return 6*time 
}

const currentTimer = (specifie = false,start=true)=>{
    style_bs = bs.getAttribute('style')
    old_style_bs = style_bs.split(';transform:rotate(')
    style_bm = bm.getAttribute('style')
    old_style_bm = style_bm.split(';transform:rotate(')
    style_bh = bh.getAttribute('style')
    old_style_bh = style_bh.split('transform:rotate(')
    if(!specifie){
        const date_current = new Date()
        bh.setAttribute("style","transform:rotate("+initTimeDegre(date_current.getHours(),true)+"deg)")
        bm.setAttribute("style","transform:rotate("+initTimeDegre(date_current.getMinutes())+"deg)")
        bs.setAttribute("style","transform:rotate("+initTimeDegre(date_current.getSeconds())+"deg)")
        
    }
    else{
        bh.setAttribute("style","transform:rotate("+initTimeDegre(date_current.getHours(),true)+"deg)")
        bm.setAttribute("style","transform:rotate("+initTimeDegre(date_current.getMinutes())+"deg)")
        bs.setAttribute("style","transform:rotate("+initTimeDegre(date_current.getSeconds())+"deg)")
    }
    if(start){
        startTimer()
    }

}
var timer=""
const startTimer = ()=>{ timer = setInterval(() => {
    console.log("Timer en cour");
    style_bs = bs.getAttribute('style')
    old_style_bs = style_bs.split('transform:rotate(')
    
    style_bm = bm.getAttribute('style')
    old_style_bm = style_bm.split('transform:rotate(')
    
    style_bh = bh.getAttribute('style')
    old_style_bh = style_bh.split('transform:rotate(')
    
    rotate_bs = 6
    rotate_bm = 0.1
    rotate_bh = 1/120
    if(old_style_bs[1]){
        old_deg_bs = parseFloat(old_style_bs[1].split('deg')[0]) 
        rotate_bs = (old_deg_bs === 354 )? 0 : old_deg_bs + 6
        
        rotate_bm = 0.1
        if(old_style_bm[1]){
            old_deg_bm = parseFloat(old_style_bm[1].split('deg')[0]) 
            rotate_bm = (old_deg_bm === 354 )? 0 : old_deg_bm + 0.1

            rotate_bh = 1/120
            if(old_style_bh[1]){
                old_deg_bh = parseFloat(old_style_bh[1].split('deg')[0])
                rotate_bh = (old_deg_bh === 354)? 0 :old_deg_bh + (1/120)
            }
        }    
    }
    bs.setAttribute("style","transform:rotate("+rotate_bs+"deg)")
    bm.setAttribute("style","transform:rotate("+rotate_bm+"deg)")
    bh.setAttribute("style","transform:rotate("+rotate_bh+"deg)")
   

    }, 1000);}
const stopTimer = ()=>{

    clearInterval(timer)
}
