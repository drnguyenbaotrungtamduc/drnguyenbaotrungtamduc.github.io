function hienThiNoiDung() {

// JavaScript to handle content selection
const chonNoiDung = document.getElementById('chonNoiDung');
const contentDivs = document.querySelectorAll('.thongTinHoSo, .div6_ketQuaXN');

// Hide all content divs when the page loads
contentDivs.forEach(div => {
    div.style.display = 'none';
});

const chonNoiDung2 = chonNoiDung.value;

    if (chonNoiDung2 === "bePrepared") {
        document.getElementById('thongTinWaited').style.display = 'block';
        document.getElementById('ketQuaClsWaited').style.display = 'block';
    } else if (chonNoiDung2 === "ba") {
        document.getElementById('thongTinBa').style.display = 'block';
        document.getElementById('ketQuaClsBa').style.display = 'block';
    } else if (chonNoiDung2 === "me") {
        document.getElementById('thongTinMe').style.display = 'block';
        document.getElementById('ketQuaClsMe').style.display = 'block';
    }
  }
// Call the function on page load
window.onload = hienThiNoiDung;

function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "anh Quang") {
        window.location.href = "hoSoSK.html";
    } else {
        alert("Không biết password thì hỏi anh Quang nha, đừng bấm lung tung.");
    }
}

function displayParagraph(id) {
    const element = document.getElementById(id); // Select the specific <p> element with the given ID
    
    fetch(`/get_content/${id}`)
        .then(response => response.json())
        .then(data => {
            element.innerText = data.content;
        })
        .catch(error => console.error('Error:', error));
}
