QUnit.test("Test Valid Squares",function(assert){
	var board=new Create_Board('{"platform":"web","version":"0.1","game_id":' + "1234" + //
			',"my_color":"white","turn":' + "1" + ',"game_status":' + 
			"1" + '}');
	assert.equal(board.isSquareValid(27),1);
	assert.equal(board.isSquareValid(25),0);
	assert.equal(board.isSquareValid(34),0);
	assert.equal(board.isSquareValid(39),1);
	assert.equal(board.isSquareValid(46),0);	
});

QUnit.test("Test Board Object Creation",function(assert){
	var board=new Create_Board('{"platform":"web","version":"0.1","game_id":' + "1234" + //
			',"my_color":"white","turn":' + "1" + ',"game_status":' + 
			"1" + '}');
	var cell_obj,type_obj,piece_obj,par_obj;
	var element;
	cell_obj=new board.cell("black",26);
	assert.equal(cell_obj.clr,"black");
	assert.equal(cell_obj.pos,26);
	type_obj=new board.type(15,"king");
	piece_obj=new board.piece("black",type_obj,"bking");
	par_obj=new board.par(cell_obj,piece_obj);
	element=document.getElementById("27")
	console.log(element);
	var classname;
	assert.equal($('#26').hasClass("black"),0);
	par_obj.act();
	assert.equal($('#26').hasClass("black"),1);
	assert.equal($('#27').hasClass("black"),1);
	assert.equal($('#28').hasClass("black"),0);
	assert.equal($('#29').hasClass("black"),1);	
});
QUnit.test("Populate Piece Module Tests",function(assert){
	var board=new Create_Board('{"platform":"web","version":"0.1","game_id":' + "1234" + //
			',"my_color":"white","turn":' + "1" + ',"game_status":' + 
			"1" + '}');
	var pp=Populate_pieces(board);
	
});