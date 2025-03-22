
let icon = {
    success:
    '<span class="material-symbols-outlined">task_alt</span>',
    danger:
    '<span class="material-symbols-outlined">error</span>',
    warning:
    '<span class="material-symbols-outlined">warning</span>',
    info:
    '<span class="material-symbols-outlined">info</span>',
};

let submit = document.querySelector('.custom-toast.success-toast');
let faild = document.querySelector('.custom-toast.danger-toast');
let information = document.querySelector('.custom-toast.info-toast');
let warning = document.querySelector('.custom-toast.warning-toast');

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    showToast("Artical Submit Successfuly","success",5000);
})
faild.addEventListener('click',(e)=>{
    e.preventDefault()
    showToast("Faild unexpected error ","Danger",5000);
})
information.addEventListener('click',(e)=>{
    e.preventDefault()
    showToast("Do PODT and Earn money","info",5000);
})
warning.addEventListener('click',(e)=>{
    e.preventDefault()
    showToast('!warnnig Server error',"warning",5000);
})
let showToast =(
    message="Successful submit",
    toastType="info",
    duration=5000
)=>{

    if(!Object.keys(icon).includes(toastType))toastType="info"

    let box = document.createElement('div');
    box.classList.add("toast",`toast-${toastType}`)
    box.innerHTML = `<div class="toast-content-wrapper">
                      <div class='toast-icon'> 
                      ${icon[toastType]}
                      </div>
                      <div class='toast-message'>${message}</div>
                      <div class='toast-progress'></div>
                     </div>`

                     duration = duration || 5000;
                     box.querySelector('.toast-progress').style.animationDuration=`
                     ${duration/1000}s`

                     let toastAlready = document.querySelector('.toast')
                     if(toastAlready){
                        toastAlready.remove();
                     }
                     document.body.appendChild(box)

}