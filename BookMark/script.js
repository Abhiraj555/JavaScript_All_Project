
// dom element
const urlInput = document.getElementById('urlInput')
const addBookmarkButton = document.getElementById('addBookmark')
const deleteAllButton = document.getElementById('deleteAll')
const bookmarkList = document.getElementById('bookmarkList')

function isValidURL(url){
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return pattern.test(url);
}

addBookmarkButton.addEventListener('click',()=>{
    let url = urlInput.value.trim();
    if (isValidURL(url)) {
        const bookmarkItem =document.createElement('li')
        bookmarkItem.classList.add("bookmark-item");
        bookmarkItem.innerHTML=`
        <a href="${url}" target="_blank" >${url}</a>
        <div class="buttons">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
        </div>
        `
        bookmarkList.appendChild(bookmarkItem);
        urlInput.value= ""
        addEditBookmarkListener(bookmarkItem);
        addDeleteBookmarkListener(bookmarkItem);
    }
})

function addEditBookmarkListener(bookmarkItem){
    const editButton = bookmarkItem.querySelector(".edit")
    const bookmarkLink = bookmarkItem.querySelector("a");

    editButton.addEventListener('click',()=>{
        const newUrl = prompt("Edit the URl",bookmarkLink.getAttribute('href'));
        if (newUrl && isValidURL(newUrl)) {
             bookmarkLink.setAttribute('href', newUrl)
             bookmarkLink.innerHTML= newUrl
        }
        else if(newUrl){
      alert('Please Enter a Valide URL (http:// or https://)')
        }
    })
};

function addDeleteBookmarkListener(bookmarkItem){
   const deleteButton = bookmarkItem.querySelector('.delete')
   deleteButton.addEventListener('click',()=>{bookmarkItem.remove(); });
};

deleteAllButton.addEventListener('click',()=>{
    while (bookmarkList.firstChild) {
        bookmarkList.removeChild(bookmarkList.firstChild)
    }
});
