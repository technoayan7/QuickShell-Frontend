// Ticket interface
export const Ticket = {
    id: String,
    title: String,
    tag: Array,
    userId: String,
    status: String,
    priority: Number,
};

// User interface
export const User = {
    id: String,
    name: String,
    available: Boolean,
};

// Col interface
export const Col = {
    col: Array,
};

// UserIdToData interface
export const UserIdToData = {
    userData: Object,
};
