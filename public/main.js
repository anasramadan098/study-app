const subjects = [
    `arabic`,
    `computer`,
    `english`,
    `french`,
    `Islam_religion`,
    `National_Education`,
    `retal`
]


// Create A Boxes And Links For Subjects
subjects.forEach(function (item) {
    const a = document.createElement('a');
    a.href = '/subjects/' + item ;
    a.className = 'box'
    a.innerHTML = '<i class="fa-solid fa-book"></i>';
    
    const h3 = document.createElement('h3');
    h3.innerHTML = item;
    a.appendChild(h3)


    document.querySelector('.boxes').appendChild(a);
});


// Check if the browser supports the Permissions API
if ('permissions' in navigator) {
    // Request permission to access geolocation
    navigator.permissions.query({ name: 'geolocation' })
    .then(permissionStatus => {
        if (permissionStatus.state === 'granted') {
        console.log('Geolocation permission granted');
        // Proceed with geolocation functionality
        } else if (permissionStatus.state === 'prompt') {
        console.log('Geolocation permission prompt');
        // Show a prompt to request permission
        } else if (permissionStatus.state === 'denied') {
        console.log('Geolocation permission denied');
        // Handle denied permission
        }
    })
    .catch(error => {
        console.error('Error checking geolocation permission:', error);
    });
} else {
    console.log('Permissions API not supported in this browser');
}

// طلب إذن الوصول إلى الميكروفون
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    console.log('تم السماح بالوصول إلى الميكروفون');
    // استخدم stream لمعالجة الصوت بعد الحصول على الإذن
  })
  .catch(function(error) {
    console.error('تم رفض إذن الوصول إلى الميكروفون:', error);
  });


// استهدف العنصر input
const fileInput = document.getElementById('fileInput');

// استدعاء الدالة عند تغيير الملف المحدد
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    console.log('تم السماح بالوصول إلى الملف:', file);
    // استخدم الملف بعد الحصول على الإذن
  } else {
    console.log('تم رفض إذن الوصول إلى الملف');
  }
});