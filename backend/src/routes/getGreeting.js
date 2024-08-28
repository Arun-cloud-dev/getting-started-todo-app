const GREETING = [
    'Helo makalae',
    'vannakam thamzhaaa',
    'Atti Boys List',
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random()* GREETING.length)],
    });
};
