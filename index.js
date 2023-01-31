const dsteem = require('dsteem');

// set up a client to interact with a Steem node
const client = new dsteem.Client('https://api.steemit.com');

// the author and permlink of the post to vote on
const author = 'your_username';
const permlink = 'your_permlink';

// your voting weight, as a percentage of your voting power
const weight = 10000; // 100%

// sign the vote with your account's active key
const privateKey = 'your_active_private_key';
const account = 'your_username';

// build the vote transaction
const vote = [
    'vote',
    {
        voter: account,
        author,
        permlink,
        weight,
    },
];

// sign and broadcast the transaction to the blockchain
client.broadcast.sendOperations([vote], privateKey)
    .then((result) => {
        console.log('Successfully voted on post:', result);
    })
    .catch((error) => {
        console.error('Error voting on post:', error);
    });
