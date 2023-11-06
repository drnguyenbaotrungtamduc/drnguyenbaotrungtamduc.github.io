function hienThiNoiDung() {

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

// function to leMot
function checkLeMot() {
    var leMot = document.getElementById("leMot").value;
    if (leMot === "DrTrung2023") {
        window.location.href = "hoSoSK.html";
    } else {
        alert("Quên mật khẩu thì hỏi Dr Quang");
    }
}

// function to control the Test lists EXPAND COLLAPSE
document.addEventListener('DOMContentLoaded', function() {
    const toggleIcons = document.querySelectorAll('.collapse-toggle');

    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const category = this.parentElement;
            const nestedList = category.querySelector('.nested');
            if (nestedList.style.display === 'block') {
                nestedList.style.display = 'none';
                this.textContent = '[+]';
            } else {
                nestedList.style.display = 'block';
                this.textContent = '[-]';
            }
        });
    });
});

function initializeAdobeDCView() {
    document.addEventListener("adobe_dc_view_sdk.ready", function () {
      const pdfContainers = document.querySelectorAll(".div6_ketQuaXN");
  
      pdfContainers.forEach(function (container) {
        const iframe = container.querySelector(".pdf-iframe");
        const clientId = "ab688cc6f974420a9c98078418b16ee3";
  
        const adobeDCView = new AdobeDC.View({ clientId, divId: container });
        const pdfUrl = iframe.src;
  
        adobeDCView.previewFile(
          {
            content: { location: { url: pdfUrl } },
            metaData: { fileName: pdfUrl }
          },
          { embedMode: "SIZED_CONTAINER", showFullScreen: true }
        );
      });
    });
  }

// function to select the Test to display in the right column [iframe]
// function changeContent(contentURL) {
    //const iframe = document.getElementById('iframe');
    //const image = document.getElementById('image');

    // // Check the file extension to determine the content type
    //const fileExtension = contentURL.split('.').pop().toLowerCase();
    //if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif') {
      //  // For image files, display the image and hide the iframe
      //  iframe.style.display = 'none';
        //image.style.display = 'block';
     //   image.src = contentURL;
   // } else {
       // // For other content types (e.g., PDF), load in the iframe and hide the image
      //  iframe.style.display = 'block';
     //   image.style.display = 'none';
      //  iframe.src = contentURL;
  //  }
//}

//function displayParagraph(id) {
   // const element = document.getElementById(id); // Select the specific <p> element with the given ID
    
 //   fetch(`/get_content/${id}`)
   //     .then(response => response.json())
    //    .then(data => {
 //           element.innerText = data.content;
     //   })
      //  .catch(error => console.error('Error:', error));
//}
