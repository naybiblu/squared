import hd from 'humanize-duration';

const shortTime = hd.humanizer({
    language: "shortEn",
    languages: {
      shortEn: {
        y: () => "y",
        mo: () => "mo",
        w: () => "w",
        d: () => "d",
        h: () => "h",
        m: () => "m",
        s: () => "s",
        ms: () => "ms",
      },
    },
});

const options = { largest: 1, round: true };

export function time(time: number) {
    return shortTime(time, options).replace(" ", "");
}