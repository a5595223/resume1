var APP_ID = 't5SXd57tbmE2h6VXYVm44hDU-gzGzoHsz';
var APP_KEY = 'sHg8wcctQnP9ta7F2Ui8imHJ';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


// let myMessage = document.querySelector("#postMessage");
// myMessage.addEventListener('submit', function (e) {
//     console.log(1)
//     e.preventDefault()

//     var content = myMessage.querySelector('input[name = content]').value

//     var Message = AV.Object.extend('message');

//     var message = new Message();

//     message.save({
//         'content': content
//     }).then(function (object) {
//         alert('存入成功');
//     })
// })

document.querySelector('#postMessage').addEventListener('submit', function (e) {
    e.preventDefault()
    var content = document.querySelector('#postMessage').querySelector('input[name = content]').value
    var Message = AV.Object.extend('message');

    var message = new Message();

    message.save({
        'content': content
    }).then(function (object) {
        alert('存入成功');
    })
})

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     xxxx: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })