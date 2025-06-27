import { Action } from "../index";

const MAX_STACK_SIZE = 100;

export function pushToStack(stack: Record<string, Action[]>, roomId: string, action: Action) {
    if (!stack[roomId]) stack[roomId] = [];
    stack[roomId].push(action);

    if(stack[roomId].length > MAX_STACK_SIZE) {
        stack[roomId].shift();
    }
}

export function reverseActionType(action: Action): Action {
    return {
        ...action,
        type: action.type === "draw" ? "delete" : "draw"
    };
}


export function popFromStack(stack: Record<string, Action[]>, roomId: string) {
    if (!stack[roomId] || stack[roomId].length === 0) return undefined;
    return stack[roomId].pop()
}