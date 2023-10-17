export const listing = [
    {
        id: 1,
        title: "Semarang Grand City",
        listing: "111111",
        location: "Semarang",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: 2,
        title: "Alam Sutera",
        listing: "08961",
        location: "Serpong",
        image: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]

export const filterId = (id) => {
    return listing.filter((item) => item.id.toString() === id.toString());
}

export const searchByListing = (id) => {
    return listing.filter((item) => item.listing === id);
}