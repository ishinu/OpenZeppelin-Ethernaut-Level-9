# OpenZeppelin Ethernaut Level 9

If a contract is not having `fallback()` or `receive()` , it simply means it won't accept your ether, `the easy way`. [ ofcourse there is always a way if you know ;) ] 

Now because in `King.sol` there is a `receive()` which has to go through a condition where previous king will be sent the `msg.value` but if previous king aka `contract` doesn't accept the money, game breaks here itself~!

Here is another implementation of `DOSAttack`, a few repositories back we also went through one.