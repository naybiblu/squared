export const rawFileToBuffer = async (file: any) => {
    const buffer = await Buffer.from(await file.arrayBuffer());
    return buffer;
}

export const defaultAv = (name: string) => {
    return `https://ui-avatars.com/api/?name=${name.split(" ").join("+")}&bold=true&format=svg&background=b45309&color=ffffff`;
};