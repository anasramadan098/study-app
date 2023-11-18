const form = document.querySelector('form .content');
const selectSubject = document.querySelector('select.fileSelect');
const unitSelection = document.querySelector('select.unitSelection');


// Function Fetch Data 

selectSubject.addEventListener('change',function() {
    fetch(`../files/${this.value}.json`).then(res => res.json()).then(data => {
        unitSelection.innerHTML = '';
        data.forEach(data => {
            const unitName = data.unitName;

            const option =  document.createElement('option');
            option.value = unitName;
            option.innerHTML = unitName;

            unitSelection.appendChild(option)
        })
    });
})