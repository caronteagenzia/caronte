var host = 'm24.cloudmqtt.com';
var user = 'txyosdvw';
var psw = 'fM6R-UZSkeN3';
var port = 38333;
var canale = 'caronte_tablet';
var clientId = 'tablet';
var client;

var options = {
    userName: user,
    password: psw,
    onSuccess: onConnect,
    onFailure: doFail,
    useSSL: true,
}

function sendMessage(clientId, message) {
	if( !client.isConnected() ){
		console.log('not connected')
		return;
	}

	var preparedMessage = '';
	preparedMessage += '^'+clientId;
	preparedMessage += '^'+message;

	var messaggio = new Paho.Message(preparedMessage);
	messaggio.destinationName = canale;
	client.send(messaggio);
}

function onConnect() {
	console.log('connected')
	sendMessage(clientId, 'connected')
	client.subscribe(canale);
}

function doFail( error ) {
	console.log('fail connect')
}

function arrivoMessaggio( receivedMessage ) {
	console.log(receivedMessage.payloadString)
}

function onMessageDelivered( message ){
	console.log('messaggio inviato: '+message.payloadString)
}

$(document).ready(function(){
	client = new Paho.Client(host, port, "/ws", clientId);
	client.onMessageArrived = arrivoMessaggio;
    client.onMessageDelivered = onMessageDelivered;
	client.connect(options);
})