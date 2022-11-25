document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementsByClassName('form-control'); 
    let elementCreate = (optionlist)=> {
        console.log(optionlist)
        let oldList = document.querySelector('datalist')
        oldList.innerHTML = ''
        if(!optionlist) {
        } else {
            optionlist.map((data)=> {
                let option = document.createElement('option'); 
                option.setAttribute('value', data); 
                option.innerHTML = data
                oldList.appendChild(option)
            })
        }
        return
    }

    const storageDataLoad = localStorage.getItem('recomendation');
    let dataListLoad = JSON.parse(storageDataLoad);
    elementCreate(dataListLoad)

    Array.from(form).forEach(f => {
        f.addEventListener('blur', function(){   
            const storageData = localStorage.getItem('recomendation');
            let dataList = JSON.parse(storageData);
            if(!dataList) {
                dataList = []
            }
            let temp = dataList.find((data)=> data === f.value )
            if(!temp) {
                if(f.value !== '') {
                    // Buat data baru
                    let NewData = [...dataList, f.value]
                    // Push ke localstorage
                    localStorage.setItem('recomendation', JSON.stringify(NewData))
                    // Hapus child sebelumnya
                    elementCreate(NewData)
                }
            }

        })
    })



}, false);