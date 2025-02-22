//tao bien luu tru 1 account co dinh
const defaultAccount = {
    username: 'abc123',
    password: 'abc123',
}

// luu tru bien co dinh vao local storage
if (!localStorage.getItem('defautAccount')) {
    //neu chua co du lieu trong storage => tao
    //JSON (chuoi - string): kieu du lieu de luu vao trong storage => js khong doc dc
    // => chuyen kieu du lieu tu js ->
    localStorage.setItem('defaultAccount', JSON.stringify(defaultAccount));
}

if (!localStorage.getItem('currentUser')){
    location.href="./index.html"
}else{
    location.href="./html/menu.html"
}