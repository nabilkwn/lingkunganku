
const btn = document.querySelector(".search");
const plc = document.querySelector(".place");
btn.addEventListener("submit",(e)=>{
    e.preventDefault();
    const dataInput = document.querySelector(".dataa");
    const filteredData = dataResapan.filter((datas)=>{
       return datas.provinsi.toUpperCase().includes(dataInput.value.toUpperCase());
     });
    let tmp = ""
    if(filteredData.length == 0){
        alert(`${dataInput.value} tidak Ditemukan!`);
    }else{
       filteredData.forEach((data)=>{
        tmp += render(data);
        plc.innerHTML = tmp;
    });
    }
    
    

});

function render(data){
   return temp = `
    <div class="dat">
        <h3>${data.provinsi}</h3>
            <div class="det-dat">
                <p>Sumur Resapan : ${data.resapan}%</p>
                <p> Biopori: ${data.biopori}%</p>
                <p>Taman: ${data.taman}%</p>
            </div>
    </div>`;
}