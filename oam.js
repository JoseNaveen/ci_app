/**
 * OAM Module
 */


const ipc=require('node-ipc');
var methods=["init","suspend","disconnect"]
ipc.config.id='oam'
var clients={};

ipc.serverNet(function(){
	ipc.server.on(
			"oam.message",
			function(data,socket){
				clients[data.id]=socket;
				if(data.message="init"){
					ip.server.emit(socket,'client.message',{id:ipc.config.id,
						message:"accepted"});
					}
				});
});


