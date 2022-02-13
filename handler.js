'use strict';

const words = require('./words.json');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generate = async (event) => {
    const querystring = event.queryStringParameters;
    const length = Number(querystring?.length) || 5;

    const wordsByLength = words.filter(w => w.length === length);
    const randomWord = getRandomIntInclusive(0, wordsByLength.length - 1);

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                word: wordsByLength[randomWord],
            },
            null,
            2
        ),
    };
};

const verify = async (event) => {
    const word = event.pathParameters.word;
    const wordExists = !!words.find(w => w === word);

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                exists: wordExists,
            },
            null,
            2
        ),
    };
};

module.exports = {
    generate,
    verify,
};

