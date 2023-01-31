const dsteem = require('dsteem');
const { PrivateKey } = require('dsteem');

// set up a client to interact with a Steem node
const client = new dsteem.Client('https://api.steemit.com');

// the author and permlink of the post to vote on
const author = 'realmankwon';
const permlink = 'realmankwon-posting-2023-01-31-19-45';

// your voting weight, as a percentage of your voting power
const weight = 1; // 1%

// sign the vote with your account's ponsting key
const privateKey = 'key';
const account = 'account';

// build the vote transaction
const vote = {
    voter: account,
    author,
    permlink,
    weight: weight * 100,
};
// sign and broadcast the transaction to the blockchain
client.broadcast.vote(vote, PrivateKey.from(privateKey))
    .then((result) => {
        console.log('Successfully voted on post:', result);
    })
    .catch((error) => {
        console.error('Error voting on post:', error);
    });
