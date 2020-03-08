export const MESSAGE_TYPE_TEXT = 10;
export const MESSAGE_TYPE_STICKER = 20;
export const MESSAGE_TYPE_MEDIA = 30;
export const MESSAGE_TYPE_LINK = 40;

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

const User2 = {
    name: 'Evgeniy Jeltov',
    username: 'zheltov'
};

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

