/**
 * http://usejsdoc.org/
 */
$(document).ready(function(){
	var Board;
	var itemCount = 1;
	var data=0;
	function create(game_object){
		$.getScript('js/create_board.js',function(){
			Board = new Create_Board(game_object);
			$.getScript('js/populate_pieces.js',function(){
				Game_Board = new Populate_pieces(Board);
				$.getScript('js/game_logic.js', function(){
					Logic = new game_logic(Board,Game_Board);
					$('.board-container').fadeIn();
				});
			});			
		});
	}
	create('{"platform":"web","version":"0.1","game_id":' + "1234" + //
			',"my_color":"white","turn":' + "1" + ',"game_status":' + 
			"1" + '}')
	
});