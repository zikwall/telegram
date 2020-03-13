import {random} from "./Array";

export const MESSAGE_TYPE_TEXT = 10;
export const MESSAGE_TYPE_STICKER = 20;
export const MESSAGE_TYPE_MEDIA = 30;
export const MESSAGE_TYPE_LINK = 40;


export const USERS = [
    {
        name: "Rodney Diaz",
        username: "@rodiaz",
        avatar: require("../assets/avatar/user1.jpg"),
    },
    {
        name: "Rustam Abashirov",
        username: "@rus_team",
    },
    {
        name: "Terry Davidson",
        username: "@davidson",
        avatar: require("../assets/avatar/user6.jpg"),
    },
    {
        name: "Stepanov Alexander",
        username: "@stepa",
        is_official: 1
    },
    {
        name: "Craig Griffin",
        username: "@cgriffin",
        avatar: require("../assets/avatar/user4.jpg"),
    },
    {
        name: "Sergey Tichonov",
        username: "@tihon",
        avatar: require("../assets/avatar/user5.jpg"),
        is_official: 1
    },
    {
        name: "Wyatt Fleming",
        username: "@attFleming",
        avatar: require("../assets/avatar/user3.jpg"),
    },
    {
        name: "Andrey Nikolayev",
        username: "@nickolay",
        avatar: require("../assets/avatar/user2.jpg"),
    },
    {
        name: "Nikita Timurbulatov",
        username: "@dawshak",
    }
];

export const MESSAGE_TYPES = {
    MESSAGE_TYPE_TEXT: 'Текст',
    MESSAGE_TYPE_STICKER: 'Стикер',
    MESSAGE_TYPE_MEDIA: 'Видео или Аудио',
    MESSAGE_TYPE_LINK: 'Ссылка',
};

const UserStruct = (user) => {
    return {
        id: 0,
        name: '',
        username: '',
        ...user
    }
};

const MessageStruct = (user, message) => {
    return {
        // default
        id: 0,
        user: UserStruct(user),
        isOwn: false,
        type: MESSAGE_TYPE_TEXT,
        message: '',
        timestamp: 0,
        sticker: null,
        attachments: [
            {
                type: 0,
                url: '',
            }
        ],
        // replace
        ...message
    };
};

const User1 = {
    name: 'Andrey Kapitonov',
    username: 'zikwall'
};

const User2 = USERS[0];

export const MESSAGES = [
    MessageStruct(User2, {
        message: 'Hi! How are you?'
    }),
    MessageStruct(User1, {
        type: MESSAGE_TYPE_STICKER,
        sticker: {
            pack: 'pigeon',
            id: 'Just'
        }
    }),
    MessageStruct(User1,{
        message: 'Hello! Goood! I am very glad you asked!',
        isOwn: true
    }),
    MessageStruct(User1, {
        type: MESSAGE_TYPE_STICKER,
        sticker: {
            pack: 'diggy',
            id: 'Sticker 13'
        }
    }),
    MessageStruct(User2, {
        type: MESSAGE_TYPE_STICKER,
        isOwn: true,
        sticker: {
            pack: 'cat',
            id: 'Fiction Cat',
        }
    }),
    MessageStruct(User1, {
        type: MESSAGE_TYPE_STICKER,
        sticker: {
            pack: 'diggy',
            id: 'Sticker 19'
        }
    }),
    MessageStruct(User1,{
        message: ')))',
        isOwn: true
    }),
];

export const DIALOGS = [
    {
        user: random(USERS),
        last_message: 'Sometimes I see english words that make me smile - because they are clear "transpositions" of their latin/italian counterparts',
        last_time: '11:11',
    },
    {
        user: random(USERS),
        last_message: 'Aqui les dejo el link a mi charla de ayer del #ReactWeekMedelin : "Some Video" youtube.com/watch?v=WC0Wkx #react #redux #RxJS',
        last_time: '11:07',
    },
    {
        user: random(USERS),
        last_message: 'I don\'t have words for this! pic.twitter.com/tw1tt3rcl0n31s4w3s0m3',
        last_time: '11:07',
        muted: true
    },
    {
        user: random(USERS),
        last_message: 'See how will be \'Wizards Unite\' new phone game inspired on Harry Potter',
        last_time: '11:03',
    },
    {
        user: random(USERS),
        last_message: 'I need 7 more followers to get to 1000. If I get 1000 by end of day I will Venmo @Dandremonteiro $7.',
        last_time: '11:02',
    },
    {
        user: random(USERS),
        last_message: 'I\'m jumping on this AMA. Come keep me company.',
        last_time: '11:01',
        muted: true
    },
    {
        user: random(USERS),
        last_message: 'How do you learn sales?',
        last_time: '10:54',
    },
    {
        user: random(USERS),
        last_message: 'Hard work is all you need if you\'re a hunter gatherer, but you\'re not.\\n\\nYouneed to convince people around you that whatever thing it is that you want to happen is something that they want to happen too.',
        last_time: '10:51',
    },
    {
        user: random(USERS),
        last_message: 'Aqui les dejo el link a mi charla de ayer del #ReactWeekMedelin : "Some Video" youtube.com/watch?v=WC0Wkx #react #redux #RxJS',
        last_time: 'Thu',
    },
    {
        user: random(USERS),
        last_message: 'Aqui les dejo el link a mi charla de ayer del #ReactWeekMedelin : "Some Video" youtube.com/watch?v=WC0Wkx #react #redux #RxJS',
        last_time: 'Wed',
    },
    {
        user: random(USERS),
        last_message: 'Sometimes I see english words that make me smile - because they are clear "transpositions" of their latin/italian counterparts',
        last_time: 'Mar 02',
    },
    {
        user: random(USERS),
        last_message: 'Sometimes I see english words that make me smile - because they are clear "transpositions" of their latin/italian counterparts',
        last_time: 'Sep 06',
    }
];
