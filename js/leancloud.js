

var APP_ID = 't5SXd57tbmE2h6VXYVm44hDU-gzGzoHsz';
var APP_KEY = 'sHg8wcctQnP9ta7F2Ui8imHJ';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (messages) {
    console.log(messages)
    console.log(messages[0].attributes)
    console.log(messages[1].attributes)
    let array = messages.map((item) => item.attributes)
    console.log(array)
    array.forEach(element => {
        let li = document.createElement('li')
        li.innerText = `${element.name}:${element.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
    });
});


let myMessage = document.querySelector("#postMessage");
myMessage.addEventListener('submit', function (e) {
    console.log(1)
    e.preventDefault()

    var content = myMessage.querySelector('input[name = content]').value
    var name = myMessage.querySelector('input[name = name]').value
    var Message = AV.Object.extend('Message');

    var message = new Message();

    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = object.attributes.name + ':' + object.attributes.content
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        myMessage.querySelector('input[name = content]').value = ''
        myMessage.querySelector('input[name = name]').value = ''
    })

})

// document.querySelector('#postMessage').addEventListener('submit', function (e) {
//     e.preventDefault()
//     var content = document.querySelector('#postMessage').querySelector('input[name = content]').value
//     var Message = AV.Object.extend('message');

//     var message = new Message();

//     message.save({
//         'content': content
//     }).then(function (object) {
//         alert('存入成功');
//     })
// })

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     xxxx: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })