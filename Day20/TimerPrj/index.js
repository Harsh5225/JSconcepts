function SummerOlympicsTiminf(){
  const date=new Date();
  const olympicsDate=new Date('2028-07-14T00:00:00');
  const diff=olympicsDate-date;
  const days=Math.floor(diff/(1000*60*60*24));
  const hours=Math.floor(diff/(1000*60*60)%24);
  const minutes=Math.floor(diff/(1000*60)%60);
  const second=Math.floor(diff/(1000)%60);

  // console.log(hours.toString());
  const days1=document.getElementById('days');
  const hour1=document.getElementById('hour')
  const minute1=document.getElementById('minute')
  const second1=document.getElementById('seconds')
  days1.innerHTML=days.toString();
  hour1.innerHTML=hours.toString();
  minute1.innerHTML=minutes.toString();
  second1.innerHTML=second.toString();

}
// setInterval(
//   SummerOlympicsTiminf,1000)



console.log(second.toLocaleString());

