module.exports =`

type ChatMessage {
    message: String!
    user: String!
    time: String!
    
}

type Chat {
    _id: ID!
    user: String
    chats: [ChatMessage!]!
    time: String
}

`;