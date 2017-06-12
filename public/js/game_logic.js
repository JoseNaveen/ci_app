function game_logic(Board,Game_Board){
p = Game_Board.p;
c = Board.c;
epiece = Board.epiece;
game_id = Board.game_id;
turn = Board.turn;
var k;
var game_object = new Object();
var white_king_pos = 114,black_king_pos = 30;
var pos = [];
var j;
var white_on_check = 0,black_on_check = 0;
game_object.wkp = white_king_pos;
game_object.bkp = black_king_pos;
game_object.woc = white_on_check;
game_object.boc = black_on_check;
function is_check(tgt){
	//console.log(tgt);
	white_on_check = 0;
	black_on_check = 0;
	for (t = 26; t < 118; t = t + 12) {
		for (i = 0; i < 8; i++) {
			if((p[t+i].piece.type.value != 15 ) && p[t+i].piece.type.value){
			//console.log("hello there");
			k=t + i;
			valid_squares(k);
			//console.log(t+i);
			//if(k===74){
			//console.log(pos,black_king_pos)
			//}
				for (j=0;j<pos.length;j++){
					
					if(white_king_pos === pos[j]){
						white_on_check = 1;
						return 1;
					}
					if(black_king_pos === pos[j]){
						//console.log(black_king_pos);
						//console.log(t+i,pos[j],black_king_pos);
						//console.log("black_on_check");
						black_on_check = 1;
						return 1;
					}
				}
			}			
		}
	}
	return 0;
}
function is_checkmate(){
	valid_squares(white_king_pos)
	if (pos.length)
	{
	return 1
	}
	valid_squares(black_king_pos)
	{
	return 1
	}	
}


displayImage = Game_Board.displayImage;

var col, row;
var move_data_json,
	move_data_object = [];
var notation = ["a", "b", "c", "d", "e", "f", "g", "h"];

function logging(text) {
    $('#logtext').append(text);

}

function valid_squares(src) {
    pos = [];
    //("valid_squares func started");
    //alert(src);
    var s = Number(src);
    var temp;
	//console.log(s);
	if(p[src].piece.type.value === 0){
		return 0;
	}
    if (p[src].piece.type.value === 15) { //king
    if (valid[s + 12]){
	if(((p[s + 12].piece.type.value) === 0) || (p[src].piece.col!=p[s + 12].piece.col)){
    pos.push(s + 12)
	//console.log(pos);
	}
	}
    
    if (valid[s + 12 + 1]){
	if(((p[s + 12 + 1].piece.type.value) === 0) || (p[src].piece.col!=p[s + 12+1].piece.col)){
    pos.push(s + 12+1)
	//console.log(pos);
	}
	}
    if (valid[s + 12 - 1]){
	if(((p[s + 12-1].piece.type.value) === 0) || (p[src].piece.col!=p[s + 12-1].piece.col)){
    pos.push(s + 12-1)
	//console.log(pos);
	}
	}
    if (valid[s + 1]){
	if(((p[s + 1].piece.type.value) === 0) || (p[src].piece.col!=p[s + 1].piece.col)){
    pos.push(s + 1)
	//console.log(pos);
	}
	}
    if (valid[s - 1]){
	if(((p[s -1].piece.type.value) === 0) || (p[src].piece.col!=p[s -1].piece.col)){
    pos.push(s - 1)
	//console.log(pos);
	}
	}
    if (valid[s - 12]){
	if(((p[s - 12].piece.type.value) === 0) || (p[src].piece.col!=p[s - 12].piece.col)){
    pos.push(s - 12)
	//console.log(pos);
	}
	}
    if (valid[s - 12 - 1]){
	if(((p[s -1- 12].piece.type.value) === 0) || (p[src].piece.col!=p[s - 1- 12].piece.col)){
    pos.push(s -1- 12)
	//console.log(pos);
	}
	}
    if (valid[s - 12 + 1]){
	if(((p[s +1- 12].piece.type.value) === 0) || (p[src].piece.col!=p[s +1- 12].piece.col)){
    pos.push(s +1- 12)
	//console.log(pos);
	}
	}
	//console.log(pos.length);
	//console.log(pos);
    return 1;
    }
    if (p[src].piece.type.value === 3) { // for Knight
    if (valid[s + 24 + 1]) {
	if(((p[s + 24 + 1].piece.type.value) === 0) || (p[src].piece.col!=p[s+24+1].piece.col)){
    pos.push(s + 24 + 1)
	//console.log(pos);
	
    }
	}
    
    if (valid[s + 24 - 1]){
	if(((p[s + 24 - 1].piece.type.value) === 0) || (p[src].piece.col != p[s + 24 - 1].piece.col)){
    pos.push(s + 24 - 1)
	//console.log(pos);
    }
	}
	
    if (valid[s - 24 - 1]){
	if(((p[s - 24 - 1].piece.type.value) === 0) || (p[src].piece.col!=p[s-24-1].piece.col)){
    pos.push(s - 24 - 1)
	//console.log(pos);
    }
	}
    if (valid[s - 24 + 1]){
	if(((p[s - 24 + 1].piece.type.value) === 0) || (p[src].piece.col!=p[s-24+1].piece.col)){
    pos.push(s - 24 + 1)
	//console.log(pos);
    }
	}
	
    if (valid[s + 12 + 2]){
	if(((p[s + 12 + 2].piece.type.value) === 0) || (p[src].piece.col!=p[s+12+2].piece.col)){
    pos.push(s + 12 + 2)
	//console.log(pos);
    }
	}
	
	
    if (valid[s + 12- 2]){
	if(((p[s + 12 - 2].piece.type.value) === 0) || (p[src].piece.col!=p[s+12-2].piece.col)){
    pos.push(s + 12 - 2)
	//console.log(pos);
    }
	}
	
	
    if (valid[s - 12 - 2]){
	if(((p[s -12-2].piece.type.value) === 0) || (p[src].piece.col!=p[s-12-2].piece.col)){
    pos.push(s -12-2)
	//console.log(pos);
    }
	}
	
    if (valid[s - 12 + 2]){
	if(((p[s -12+2].piece.type.value) === 0) || (p[src].piece.col!=p[s-12+2].piece.col)){
    pos.push(s -12+2)
	//console.log(pos);
    }
	}
	//console.log(pos.length);
	//console.log(pos)
	
    return 1;
    }
    if (p[src].piece.type.value === 4) {// for Bishop
    	temp =  s - 12 + 1
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				////logging(temp);
				pos.push(temp);
                temp = temp - 12 + 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp =  s - 12 - 1
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				////logging(temp);
				pos.push(temp);
                temp = temp - 12 - 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp =  s + 12 + 1
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				////logging(temp);
				pos.push(temp);
                temp = temp + 12 + 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp =  s + 12 - 1
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				////logging(temp);
				pos.push(temp);
                temp = temp + 12 - 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
		//console.log(pos.length);
		//console.log(pos);
      return 1;
    }
    if (p[src].piece.type.value === 8) { // for queen
    temp = s + 12;
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				////logging(temp);
				pos.push(temp);
                temp = temp + 12;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						////logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp = s + 1;
        

        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp + 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }

        temp = s - 1;
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp - 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp = s - 12;
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp - 12;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        //alert(pos.length);
        temp =  s - 12 + 1
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp - 12 + 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp =  s - 12 - 1
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp - 12 - 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp =  s + 12 + 1
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp + 12 + 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp =  s + 12 - 1
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp + 12 - 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
		//console.log(pos.length);
		//console.log(s,pos);
        
        return 1;
    }
    if (p[src].piece.type.value === 1 && (p[src].piece.col ==='black') ) { //bpawn
    		if ($('#chessboard #' + src).parent().hasClass('rank-2')&&((p[s + 24].piece.type.value) === 0)) {
            //alert(s+24);
            pos.push(s + 24);
        }
        if (valid[s + 12] === 1 &&((p[s + 12].piece.type.value) === 0)) 				{
            pos.push(s + 12);
        }
        if (valid[s + 12 + 1] === 1) {
            if (p[s + 12 + 1].piece.col === 'white') {
                pos.push(s + 12 + 1);
            }
        }
        if (valid[s + 12 - 1] === 1) {
            if (p[s + 12 - 1].piece.col === 'white') {
                pos.push(s + 12 - 1);
            }
        }
		//console.log(pos.length);
		//console.log(pos);
        return 1;
    }    
    if (p[src].piece.type.value === 1) { //for wpawn
        //alert("you clicked on a pawn");
        if ($('#chessboard #' + src).parent().hasClass('rank-7')&&((p[s - 24].piece.type.value) === 0)) {
            //alert(s+24);
            pos.push(s - 24);
        }
        if (valid[s - 12] === 1 &&((p[s - 12].piece.type.value) === 0)) {
            pos.push(s - 12);
        }
        if (valid[s - 12 + 1] === 1) {
            if (p[s - 12 + 1].piece.col === 'black') {
                pos.push(s - 12 + 1);
            }
        }
        if (valid[s - 12 - 1] === 1) {
            if (p[s - 12 - 1].piece.col === 'black') {
                pos.push(s - 12 - 1);
            }
        }
		//console.log(pos.length);
		//console.log(pos);
        return 1;
    }
    if (p[src].piece.type.value === 5) { //for rook
        ////logging("you clicked on rook\n")
        temp = s + 12;
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				////logging(temp);
				pos.push(temp);
                temp = temp + 12;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						////logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp = s + 1;

        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp + 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }

        temp = s - 1;
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp - 1;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        temp = s - 12;
        while (valid[temp] === 1) {

            if (Number(p[temp].piece.type.value) === 0) {
				//logging(temp);
				pos.push(temp);
                temp = temp - 12;
                continue
            }
			else{
					if (p[temp].piece.col != p[src].piece.col) {
						//logging(temp);
						pos.push(temp);
						break;
					}
					break;
				}
            
        }
        //console.log(pos.length);
		//console.log(pos);
        return 1;

    }
}
function validate(src, tgt) {
    //var val = p[src].piece.type.value;
    //var s, t, temp;
    //s = Number(src) + 12;
    //t = Number(src) + 24;
    //temp = pos.length;
    for (i = 0; i < pos.length; i++) {
        if (pos[i] === Number(tgt)) {
            return 1;
        }
    }

}
var move_num = 0;
var board_array = [];
var tP1,tP2;
function move(src, tgt) {
    if (p[tgt].piece.name === '' || (p[tgt].piece.col != p[src].piece.col)) {
        if (validate(src, tgt)) {
            col = $('#chessboard #' + p[src].cell.pos).index();
            row = $('#chessboard #' + p[src].cell.pos).parent().index();
            col = notation[col];
            ////logging(col);
            ////logging(8 - row + " ");
			move_data_object = []
            p[tgt].piece = p[src].piece;
			p[src].piece = epiece;
			p[src].act();
			p[tgt].act();	
			if(p[tgt].piece.type.value === 15){
				if(p[tgt].piece.col ==='white'){
					white_king_pos = Number(tgt);
				}
				else{
					console.log("trying to move black king\n");
					black_king_pos = Number(tgt);
				}
			}
			if( is_check(tgt)){
				if(p[tgt].piece.col === 'white' && white_on_check){
					p[src].piece = p[tgt].piece;
					p[tgt].piece = epiece;
					p[tgt].act();
					p[src].act();
					displayImage(p[src].piece.type.name,src);
					displayImage(p[tgt].piece.type.name,tgt);
					if(p[src].piece.type.value === 15){
						white_king_pos = Number(src);
						}
					return 0;
				}
			
					//return 0;
				
				if(p[tgt].piece.col === 'black' && black_on_check){
					p[src].piece = p[tgt].piece;
					p[tgt].piece = epiece;
					p[tgt].act();
					p[src].act();
					displayImage(p[src].piece.type.name,src);
					displayImage(p[tgt].piece.type.name,tgt);
					if(p[src].piece.type.value === 15){
						black_king_pos = Number(src);
					}
			
					return 0;
				}
				if(1){
					console.log("check");
					}
			}		
			move_num = move_num + 1;
            displayImage(p[src].piece.type.name,src);
            displayImage(p[tgt].piece.type.name,tgt);
            //logging("- ");
            col = $('#chessboard #' + p[tgt].cell.pos).index();
            row = $('#chessboard #' + p[tgt].cell.pos).parent().index();
            col = notation[col];
			//logging(p[tgt].piece.type.name);
            //logging(col);
            //logging(8 - row + " \n");
			move_data_object.push(p[src]);
			move_data_object.push(p[tgt]);
			move_data_json = JSON.stringify(move_data_object);
			////logging(move_data_json);
			//$('div.selectable').unbind('click');
			for (t1=0; t1 < 144 ; t1++) {
				if(valid[t1]){
				if(p[t1].piece.type.value != 0) {
					//p[t1].act();
					t2 = JSON.stringify(p[t1]);
					board_array.push(p[t1]);
					////logging(t2);
				}
				}
			};
			
			$.ajax({
				type: 'POST',
				url: '/game?game_id=' + game_id,
				data: {
						gameid: game_id,
						moveData: JSON.stringify(move_data_object),
						currentBoard: JSON.stringify(board_array),
						move: move_num,
						game_status: 1
					  },
				dataType: 'json',
			})
			$('.circle_green').remove();
            return 1;
        }
    }
    if (p[src].piece.col === p[tgt].piece.col) {
        //logging("target source same team");
        return 0;
    } else {
        return 0;
    }
}

var pr = -1;

function exe1(val1) {
    if (p[val1].piece.type.name === "" && pr == -1) {

        return 4;
    }

    if (pr === -1) {
        pr = val1;
        //alert(val1);
		if(p[val1].piece.col != my_color){
			$('#chessboard #' + val1).toggleClass('selected not-selected');
			pr=-1;
			return 0;
		}
		valid_squares(val1);
        //$('div.selected').toggleClass('selected not-selected');
        //$('.circle_green').remove();	
        if (pos.length > 0) {
            //alert("back");


            for (i = 0; i <= pos.length; i++) {
           //$('#chessboard #' + pos[i]).css("background-color","blue");
                //$('#chessboard #' + pos[i]).html("<div class=\"circle_green\"></div>");
            }
            //return 0;
        }
        return 0;
    } else {
        /*alert(pr);*/
        //alert(val1);
        $('#chessboard #' + pr).toggleClass('selected not-selected');
        if (p[val1].piece.col === p[pr].piece.col) {
            pr = -1;
            $('.circle_green').remove();
            if (exe1(val1) === 4) {
                $('.circle_green').remove();
                return 0;
            } else {
                //$('#chessboard #' + val1).toggleClass('selected not-selected');
                e = val1;
                return 0;
            }
        }

        if (!move(pr, val1)) {
            if (p[val1].piece.type.name === "") {

                $('#chessboard #' + val1).toggleClass('selected not-selected');
                pr = -1;
                $('.circle_green').remove();
                return 1;
            }
			//$('#chessboard #' + val1).toggleClass('selected not-selected');
			
			//$('#chessboard #' + pr1).toggleClass('selected not-selected');
			if (p[val1].piece.col === p[pr].piece.col){
				pr = val1;
			}
			else{
			pr=-1;
			$('#chessboard #' + val1).toggleClass('selected not-selected');
			}
            return 1;
        }

        $('#chessboard #' + val1).toggleClass('selected not-selected');
        $('.circle_green').remove();
        pr = -1;
    }

}
function when_clicked() {
    var u;
    //$('#chessboard #' + e).toggleClass('selected not-selected');
    //$('.circle_green').remove();
    //$('div.selected').toggleClass('selected not-selected');
    //$('.circle_green').remove();
    if ($(this).hasClass('selected')) {

        $('.circle_green').remove();
        $(this).toggleClass('selected not-selected');
        pr = -1;

    } else {
        if (exe1($(this).attr('id')) === 4) {
            $('.circle_green').remove();
            return 0;
        } else {
            $(this).toggleClass('selected not-selected');
            e = $(this).attr('id');
            //$('.circle_green').remove();

            //exe1($(this).attr('id'));
        }
    }
}
if (turn){
$('div.selectable').unbind('click').on('click', when_clicked);
}
function connect() {
        //source = new EventSource("game_stream?game_id=" + game_id);
		source = new EventSource("game_stream");
        source.addEventListener("message", function(event) {
          data = JSON.parse(event.data)
		  p[data[0].cell.pos].piece = data[0].piece;
		  p[data[0].cell.pos].act();
		  p[data[1].cell.pos].piece = data[1].piece;
		  p[data[1].cell.pos].act();
		  if(p[data[1].cell.pos].piece.type.value === 15){
				if( p[data[1].cell.pos].piece.col === 'white'){
					white_king_pos = Number(data[1].cell.pos);
					}
				else{
					black_king_pos = Number(data[1].cell.pos);
					}
			}
		  displayImage(p[data[0].cell.pos].piece.type.name,data[0].cell.pos);
          displayImage(p[data[1].cell.pos].piece.type.name,data[1].cell.pos);
		  $('div.selectable').unbind('click').on('click', when_clicked);
        }, false);

        source.addEventListener("newmove", function(event) {
			data = JSON.parse(event.data);
			
        }, false);

        source.addEventListener("open", function(event) {

	
         }, false);

        source.addEventListener("error", function(event) {
       }, false);
    }
if (!!window.EventSource) {
        connect();
}

var board_init='[{"cell":{"clr":"wt","pos":26},"piece":{"type":{"value":5,"name":"brok"},"col":"black","name":"brook1"}},{"cell":{"clr":"bk","pos":27},"piece":{"type":{"value":3,"name":"bknght"},"col":"black","name":"bknght1"}},{"cell":{"clr":"wt","pos":28},"piece":{"type":{"value":4,"name":"bbshp"},"col":"black","name":"bbshp1"}},{"cell":{"clr":"bk","pos":29},"piece":{"type":{"value":8,"name":"bqueen"},"col":"black","name":"bqueen1"}},{"cell":{"clr":"wt","pos":30},"piece":{"type":{"value":15,"name":"bking"},"col":"black","name":"bking1"}},{"cell":{"clr":"bk","pos":31},"piece":{"type":{"value":4,"name":"bbshp"},"col":"black","name":"bbshp2"}},{"cell":{"clr":"wt","pos":32},"piece":{"type":{"value":3,"name":"bknght"},"col":"black","name":"bknght2"}},{"cell":{"clr":"bk","pos":33},"piece":{"type":{"value":5,"name":"brok"},"col":"black","name":"brook2"}},{"cell":{"clr":"bk","pos":38},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn1"}},{"cell":{"clr":"wt","pos":39},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn2"}},{"cell":{"clr":"bk","pos":40},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn3"}},{"cell":{"clr":"wt","pos":41},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn4"}},{"cell":{"clr":"bk","pos":42},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn5"}},{"cell":{"clr":"wt","pos":43},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn6"}},{"cell":{"clr":"bk","pos":44},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn7"}},{"cell":{"clr":"wt","pos":45},"piece":{"type":{"value":1,"name":"bpawn"},"col":"black","name":"bpawn8"}},{"cell":{"clr":"wt","pos":98},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn1"}},{"cell":{"clr":"bk","pos":99},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn2"}},{"cell":{"clr":"wt","pos":100},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn3"}},{"cell":{"clr":"bk","pos":101},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn4"}},{"cell":{"clr":"wt","pos":102},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn5"}},{"cell":{"clr":"bk","pos":103},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn6"}},{"cell":{"clr":"wt","pos":104},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn7"}},{"cell":{"clr":"bk","pos":105},"piece":{"type":{"value":1,"name":"wpawn"},"col":"white","name":"wpawn8"}},{"cell":{"clr":"bk","pos":110},"piece":{"type":{"value":5,"name":"wrook"},"col":"white","name":"wrook1"}},{"cell":{"clr":"wt","pos":111},"piece":{"type":{"value":3,"name":"wknght"},"col":"white","name":"wknght1"}},{"cell":{"clr":"bk","pos":112},"piece":{"type":{"value":4,"name":"wbshp"},"col":"white","name":"wbshp1"}},{"cell":{"clr":"wt","pos":113},"piece":{"type":{"value":8,"name":"wqueen"},"col":"white","name":"wqueen"}},{"cell":{"clr":"bk","pos":114},"piece":{"type":{"value":15,"name":"wking"},"col":"white","name":"wking"}},{"cell":{"clr":"wt","pos":115},"piece":{"type":{"value":4,"name":"wbshp"},"col":"white","name":"wbshp2"}},{"cell":{"clr":"bk","pos":116},"piece":{"type":{"value":3,"name":"wknght"},"col":"white","name":"wknght2"}},{"cell":{"clr":"wt","pos":117},"piece":{"type":{"value":5,"name":"wrook"},"col":"white","name":"wrook2"}}]'

load_init=Game_Board.load_init;
make_Draggables=Game_Board.Make_Draggables;
/**Function to clear the board contents and generate an
empty board
**/

function clear_board(){
 for(i=0;i<144;i++){
    if (Board.valid[i]){
    p[i].piece = epiece;
	p[i].act();
	}
 }
}

$('#clear').click(function(){
 clear_board()
 });

/**Button handler for the clear Button**/
/*  */
  
$('#reset').click(function(){
   data = JSON.parse(board_init);
   clear_board();
   load_init(data);
   make_Draggables();
});

return game_object;

};