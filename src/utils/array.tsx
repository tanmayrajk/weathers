export const populateArray = (arr: Array<any>, data: any, amount: number) => {
    const a = arr;
    try {
        for (let i = 0; i < amount; i++) {
            a.push(data);
        }
        return a;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const equallySplit = (arr: Array<any>, len: number) => {
    if (arr.length % len != 0) return new Error("Cannot be equally split.");
    const out = [];
    for (let i = 0; i < arr.length / len; i++) {
        const a = arr.slice(i * len, (i + 1) * len);
        out.push(a);
        // 0, len,
        // len, 2len
        // 2len, 3len
        // 3len, 4len,
        // 4len, 5len,
        // 5len, 6len,
        // 6len, 7len,
    }
    return out;
};
