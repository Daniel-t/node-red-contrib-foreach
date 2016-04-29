
module.exports = function(RED) {

    function _foreach(config) {
        RED.nodes.createNode(this,config);
        var node = this;


        this.on('input', function(msg) {

		for (idx in msg.payload){
			node.send({payload:msg.payload[idx]});
		}
        });
    }
    RED.nodes.registerType("foreach",_foreach);
}

