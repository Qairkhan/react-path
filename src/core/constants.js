const ROUTES = {
    PROFILE: "/profile",
    MESSAGES: "/dialogs",
    NEWS: "/news",
    MUSIC: "/music",
    USERS: "/users",
    SETTINGS: "/settings",
    LOGIN: "/login",
};

const I18N = {
    EN: {
        PROFILE: "Profile",
        MESSAGES: "Messages",
        NEWS: "News",
        MUSIC: "Music",
        USERS: "Find users",
        SETTINGS: "Settings",
        ADDPOST: "Add post",
        TEXT_LIKE: "Like",
        USER_POST: "My post",
        LOGIN: "Login",
        LOGOUT: "LogOut",
        PASS: "Password",
        REMEMBER: "Remember Me",
    },
    RU: {
        PROFILE: "Профиль",
        MESSAGES: "Сообщения",
        NEWS: "Новости",
        MUSIC: "Музыка",
        USERS: "Поиск пользователей",
        SETTINGS: "Настройки",
        ADDPOST: "Добавить сообщение",
        TEXT_LIKE: "Нравится",
        USER_POST: "Мое сообщение",
        LOGIN: "Авторизация",
        LOGOUT: "Выход",
        PASS: "Пароль",
        REMEMBER: "Запомнить Меня",

    }
}

const ENDPOINTS = {
    FOLLOW: "follow/",
    PROFILE: "profile/",
    AUTH_ME: "auth/me",
    PROFILE_STATUS: "profile/status/",
    AUTH_LOGIN: "auth/login",
    AUTH_LOGOUT: "auth/logout",
    PROFILE_PHOTO: "profile/photo",
    SAVE_PROFILE: "profile",
    
}

export {
    ROUTES,
    I18N,
    ENDPOINTS
};