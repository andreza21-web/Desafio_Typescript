

// converter a hora de (AM -> PM) e (PM -> AM) 07:05:45PM  / 19:05:45

export function timeConversion(hours: any): string {

    //Remove o ":" com split ["07", "05", "45"]
    let fullTimes = hours.substring(0, 8);
    let times = fullTimes.split(":");

    // identifica o formato na string PM
    let formatPM = hours.substring(8);

    // se ele vim como PM converter para formato 12h

    
    if(formatPM === "PM"){
       
       if(Number (times[0]) !== 12){
       times[0] = parseInt(times[0]) + 12;
       }
    }else{
       if(times[0] === "12"){
            times[0] = "00"
        }
    }

    return times.join(":");;
}

