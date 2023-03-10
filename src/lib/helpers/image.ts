export const rawFileToBuffer = async (file: any) => {
    const buffer = await Buffer.from(await file.arrayBuffer());
    return buffer;
}