

export const debounce = (func: Function, delay: number)  => {
    let timeoutId: NodeJS.Timeout | null;

    return function (...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
