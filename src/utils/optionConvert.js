export const convertTitle = (title) => {
    let convertedTitle = title;

    if (title === "Dijual") {
        convertedTitle = "s";
    } else if (title === "Disewa") {
        convertedTitle = "r";
    } else if (title === "Open House") {
        convertedTitle = "o";
    } else if (title === "Sold By") {
        convertedTitle = "j";
    } else if (title === "Rented By") {
        convertedTitle = "e";
    } else if (title === "For Rent") {
        convertedTitle = "a";
    } else if (title === "For Sale") {
        convertedTitle = "b";
    }

    return convertedTitle;
};
