function jourtravaille (date) {
    if (date.getDay() == 0 || date.getDay() == 6) {
        console.log('Le',date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),'est un week-end');
    } else if ((date.getMonth()==4&&(date.getDate()==1||date.getDate()==8||date.getDate()==21))||(date.getDate()==1&&(date.getMonth()==0||date.getMonth()==5||date.getMonth()==10))||(date.getDate()==13&&date.getMonth()==3)||(date.getDate()==25&&date.getMonth()==11)||(date.getDate()==11&&date.getMonth()==10)||(date.getDate()==15&&date.getMonth()==7)||(date.getDate()==14&&date.getMonth()==6)) {
        console.log('Le',date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),'est un jour férié');
    } else {
        console.log('Le',date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),'est un jour travaillé');
    }
};

jourtravaille(new Date(Date.now()))
