
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.game = function(req,res){
	res.json('[{"cell":{"clr":"wt","pos":26},"piece":{"type":{"value":5,"name":"brok"},"col":"black","name":"brook1"}},{"cell":{"clr":"bk","pos":27},"piece":{"type":{"value":3,"name":"bknght"},"col":"black","name":"bknght1"}},{"cell":{"clr":"wt","pos":28},"piece":{"type":{"value":4,"name":"bbshp"},"col":"black","name":"bbshp1"}},{"cell":{"clr":"bk","pos":29},"piece":{"type":{"value":8,"name":"bqueen"},"col":"black","name":"bqueen1"}},{"cell":{"clr":"wt","pos":30},"piece":{"type":{"value":15,"name":"bking"},"col":"black","name":"bking1"}},{"cell":{"clr":"bk","pos":31},"piece":{"type":{"value":4,"name":"bbshp"},"col":"black","name":"bbshp2"}},{"cell":{"clr":"wt","pos":32},"piece":{"type":{"value":3,"name":"bknght"},"col":"black","name":"bknght2"}},{"cell":{"clr":"bk","pos":33},"piece":{"type":{"value":5,"name":"brok"},"col":"black","name":"brook2"}},{"cell":{"clr":"bk","pos":38},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn1"}},{"cell":{"clr":"wt","pos":39},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn2"}},{"cell":{"clr":"bk","pos":40},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn3"}},{"cell":{"clr":"wt","pos":41},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn4"}},{"cell":{"clr":"bk","pos":42},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn5"}},{"cell":{"clr":"wt","pos":43},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn6"}},{"cell":{"clr":"bk","pos":44},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn7"}},{"cell":{"clr":"wt","pos":45},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn8"}},{"cell":{"clr":"wt","pos":98},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn1"}},{"cell":{"clr":"bk","pos":99},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn2"}},{"cell":{"clr":"wt","pos":100},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn3"}},{"cell":{"clr":"bk","pos":101},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn4"}},{"cell":{"clr":"wt","pos":102},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn5"}},{"cell":{"clr":"bk","pos":103},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn6"}},{"cell":{"clr":"wt","pos":104},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn7"}},{"cell":{"clr":"bk","pos":105},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn8"}},{"cell":{"clr":"bk","pos":110},"piece":{"type":{"value":5,"name":"wrook"},"col":"white","name":"wrook1"}},{"cell":{"clr":"wt","pos":111},"piece":{"type":{"value":3,"name":"wknght"},"col":"white","name":"wknght1"}},{"cell":{"clr":"bk","pos":112},"piece":{"type":{"value":4,"name":"wbshp"},"col":"white","name":"wbshp1"}},{"cell":{"clr":"wt","pos":113},"piece":{"type":{"value":8,"name":"wqueen"},"col":"white","name":"wqueen"}},{"cell":{"clr":"bk","pos":114},"piece":{"type":{"value":15,"name":"wking"},"col":"white","name":"wking"}},{"cell":{"clr":"wt","pos":115},"piece":{"type":{"value":4,"name":"wbshp"},"col":"white","name":"wbshp2"}},{"cell":{"clr":"bk","pos":116},"piece":{"type":{"value":3,"name":"wknght"},"col":"white","name":"wknght2"}},{"cell":{"clr":"wt","pos":117},"piece":{"type":{"value":5,"name":"wrook"},"col":"white","name":"wrook2"}}]');
}

exports.game_stream = function(req,res){ //server sent streams to communicate between two users
	res.writeHead(200, {"Content-Type":"text/event-stream", "Cache-Control":"no-cache", //
			"Connection":"keep-alive"});
	res.write("retry: 10000\n");
	res.write("event: newmove\n" +
			"data: {\"move_data\": \"hello\"}" + "\n\n");
	req.connection.addListener("close", function () {
		console.log("\n" + "closing connection\n")
	}, false);
};