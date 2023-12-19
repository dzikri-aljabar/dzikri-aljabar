const menuIcon = document.getElementById('icon-bar')
const menuList = document.getElementById('menu-list')

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle('hiden')
})

// kirim email

const form = document.querySelector('form')
const nama = document.getElementById('nama')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const subject= document.getElementById('subject')
const pesan = document.getElementById('pesan')

function sendEmail() {
    const bodyMessage = `Nama Lengkap: ${nama.value}<br> Email: ${email.value}<br> Nommor Telepone: ${phone.value}<br> Pesan: ${pesan.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dzikrialjabar06@gmail.com",
        Password : "0576922BF08C4B12288D2F61DD8CCCDDFFFA",
        To : 'dzikrialjabar06@gmail.com',
        From : "dzikrialjabar06@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});