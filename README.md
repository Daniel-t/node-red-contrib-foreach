# node-red-contrib-foreach
A ForEach node for node red

Assumes that msg.payload is an array (it works if it's an object too, however it probably isn't what you wany) and 
emits a new message with each element as the payload.
