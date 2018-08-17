const helloWorld = new Vue({
    el: '#helloVue',
    data: {
        title: "Hello World!",
        message: "This is my first Vue Template"
    }
});

const example = new Vue({
    el: '#example',
    data: {
        title: "Hello!",
        message: "This is a message for you",
        name: "User",
        img: {
            src: 'https://placeimg.com/200/200/animals',
            alt: 'A placeholder image'
        }
    }
});
