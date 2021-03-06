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

const Book = new Vue({
    el: '#book',
    data: {
        title: 'The Sirens of Titan',
        author: 'Kurt Vonnegut',
        summary: 'This is a summary of the Book',
        showDetail: false,
    },
    methods: {
        sayHello: function() {
            alert(`Hello ${this.title}`);
        },
        toggleDetails: function() {
            this.showDetail = !this.showDetail;
        }
    }
});

const colorsOfTheRainbow = [
    "red", "orange", "green", "blue", "indigo", "violet"
];

new Vue({
    el: "#colors",
    data: {
        rainbow: colorsOfTheRainbow
    }
})
