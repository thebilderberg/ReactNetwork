import {rerenderThree} from "../rerender";


let states = {
    staff: {
        userInfoObjectGod: [
            {name:'John', firstName:'Lenon', id:1},
            {name:'Adam', firstName:'Smasher', id:2},
            {name:'Barry', firstName:'While', id:3},
            {name:'Alex', firstName:'Dasin', id:3},
            {name:'Vadim', firstName:'Orlow', id:4}
        ]
    },
    mainMenu: {
        NewsData: [
            {name:'John', post:'Music is my life!', likes:20},
            {name:'Adam', post:'I love iron!', likes:5},
            {name:'Dmitriy', post:'Who wants a drink?', likes:15}
        ]
    },
    chats: {
        UserObject: [
            {id: 1, nameUser: 'John Lenon'},
            {id: 2, nameUser: 'Adam Smasher'},
            {id: 3, nameUser: 'Barry While'},
            {id: 4, nameUser: 'Alex Dasin'},
            {id: 5, nameUser: 'Vadim Orlow'},
        ],
        UserMessageData: [
            {id: 1, message: 'Hi, are you free?'},
            {id: 2, message: 'I have a question'},
            {id: 3, message: 'Why does the inexorable running of time never stop, and what do the smallest stars hide in the darkened sky?'},
        ]
    }
}

export default states;

export let addPost = (newMassage) => {
    let newPost = {name: 'Admin', post: newMassage, likes: 0};
    states.mainMenu.NewsData.push(newPost);
    rerenderThree(states);
};


export let addMessage = (newMessage) => {
  let writeNewMessage = {id:4, message: newMessage};
  states.chats.UserMessageData.push(writeNewMessage);
  rerenderThree(states);
};

