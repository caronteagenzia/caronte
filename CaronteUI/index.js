var pnt_sublime_perfezione
var pnt_eterno_riscatto
var pnt_equilibrio_celeste

var current_view
var array_views = [
	'start',
	'domanda-1',
	'domanda-2',
	'domanda-3',
	'domanda-4',
	'domanda-5',
	'domanda-6',
	'domanda-7',
	'final',
	'finalmenu'
];

function showCurrentView(){

		for( var i = 0; i < array_views.length; i++ ){
			if( array_views[i] == array_views[current_view] ){
				$('.'+array_views[i]).removeClass('hidden-view')

				if( array_views[i] != 'final' ){
					// schermata finale
					/*
					sessionStorage.getItem(pnt_sublime_perfezione);
					sessionStorage.getItem(pnt_eterno_riscatto)
					sessionStorage.getItem(pnt_equilibrio_celeste)
					*/
				}

			}
			else{
				$('.'+array_views[i]).addClass('hidden-view')
			}

		}

	}

	var host = 'm24.cloudmqtt.com';
		var user = 'txyosdvw';
		var psw = 'fM6R-UZSkeN3';
		var port = 38333;
		var canale = 'caronte_tablet';
		var clientId = 'tablet';


		function onConnect() {
			client.subscribe(canale);
			sendMessage(clientId, 'tabletindex')
		}

		function sendMessage(clientId, message) {
				if( !client.isConnected() )
					return;

				var preparedMessage = '';
				preparedMessage += '^'+clientId;
				preparedMessage += '^'+message;

				var messaggio = new Paho.Message(preparedMessage);
				messaggio.destinationName = canale;
				client.send(messaggio);
			}

			function arrivoMessaggio( receivedMessage ) {
			}

			function onMessageDelivered( message ){
				console.log('messaggio inviato: '+message.payloadString)
			}

			function doFail( error ) {
				console.log('fail connect')
			}

$(document).ready(function(){

	client = new Paho.Client(host, port, "/ws", clientId);
			client.onMessageArrived = arrivoMessaggio;
		    client.onMessageDelivered = onMessageDelivered;

		    var options = {
		    	userName: user,
		    	password: psw,
		    	onSuccess: onConnect,
		    	onFailure: doFail,
		    	useSSL: true,
		    }

		    client.connect(options);
			console.log(client)

	/*
	sessionStorage.setItem('pnt_sublime_perfezione', pnt_sublime_perfezione);
			sessionStorage.setItem('pnt_eterno_riscatto', pnt_eterno_riscatto);
			sessionStorage.setItem('pnt_equilibrio_celeste', pnt_equilibrio_celeste);
	*/

	if( sessionStorage.getItem('pnt_sublime_perfezione') ){
		console.log('here')
		pnt_sublime_perfezione = sessionStorage.getItem('pnt_sublime_perfezione')
	}

	if( sessionStorage.getItem('pnt_eterno_riscatto') )
		pnt_eterno_riscatto = sessionStorage.getItem('pnt_eterno_riscatto')

	if( sessionStorage.getItem('pnt_equilibrio_celeste') )
		pnt_equilibrio_celeste = sessionStorage.getItem('pnt_equilibrio_celeste')

	pnt_sublime_perfezione = 0
	pnt_eterno_riscatto = 0
	pnt_equilibrio_celeste = 0

	current_view = 0

	showCurrentView()


	$('.ui-btn').on('click', function(){

		current_view++
		showCurrentView()

		if( $(this).parent('.view').hasClass('start') ){

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-1') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-2') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-3') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_sublime_perfezione++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-4') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-5') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-6') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-7') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_equilibrio_celeste++
			}

			console.log('pnt_sublime_perfezione: '+pnt_sublime_perfezione)
			console.log('pnt_eterno_riscatto: '+pnt_eterno_riscatto)
			console.log('pnt_equilibrio_celeste: '+pnt_equilibrio_celeste)

			sessionStorage.setItem('pnt_sublime_perfezione', pnt_sublime_perfezione);
			sessionStorage.setItem('pnt_eterno_riscatto', pnt_eterno_riscatto);
			sessionStorage.setItem('pnt_equilibrio_celeste', pnt_equilibrio_celeste);

			if( ( pnt_sublime_perfezione > pnt_eterno_riscatto ) && ( pnt_sublime_perfezione > pnt_equilibrio_celeste ) ){
				console.log('invia messaggio SUBLIME PERFEZIONE')
				//$('#ending-1').addClass('ending-shown')
				window.location.href = './ending-1.html'
			}

			if( ( pnt_eterno_riscatto > pnt_sublime_perfezione ) && ( pnt_eterno_riscatto > pnt_equilibrio_celeste ) ){
				console.log('ETERNO RISCATTO')
				//$('#ending-2').addClass('ending-shown')
				window.location.href = './ending-2.html'
			}

			if( ( pnt_equilibrio_celeste > pnt_sublime_perfezione ) && ( pnt_equilibrio_celeste > pnt_eterno_riscatto ) ){
				console.log('EQUILIBRIO CELESTE')
				//$('#ending-3').addClass('ending-shown')
				window.location.href = './ending-3.html'
			}

		}

	})

	$('#btn-final').on('click', function(){

		reset()

	})

	function reset(){

		$('.container-risultato').removeClass('ending-shown')

		current_view = 0
		pnt_sublime_perfezione = 0
		pnt_eterno_riscatto = 0
		pnt_equilibrio_celeste = 0
		showCurrentView()
	}

});