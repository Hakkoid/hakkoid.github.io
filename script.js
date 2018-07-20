data = {};

data.getCookie = function (name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

data.setCookie = function (name, value, options) {
	options = options || {};

	var expires = options.expires;

	if (typeof expires == "number" && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	}
	if (expires && expires.toUTCString) {
		options.expires = expires.toUTCString();
	}

	value = encodeURIComponent(value);

	var updatedCookie = name + "=" + value;

	for (var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];
		if (propValue !== true) {
			updatedCookie += "=" + propValue;
		}
	}

	document.cookie = updatedCookie;
}

data.deleteCookie = function (name) {
	setCookie(name, "", {
		expires: -1
	})
}

var mySocket = function(location){

	var createSocket = (event) => {

		console.log(event)
		this.socket = new WebSocket("ws://" + location + "/ws");

		this.socket.__self = this;

		this.wskey = event.wskey

		this.socket.onopen = function() {
			this.send(JSON.stringify({type: "joinsocket", data: {wskey: this.__self.wskey}}));

			console.log("Соединение установлено.");
			if(typeof this.__self.onopen == 'function'){this.__self.onopen()};
		};

		this.socket.onclose = function(event) {
			if (event.wasClean) {
				console.log('Соединение закрыто чисто');
			} else {
				console.log('Обрыв соединения');
			}
			console.log('Код: ' + event.code + ' причина: ' + event.reason);
			if(typeof this.__self.onclose == 'function'){this.__self.onclose()};
		};


		var handleMessage = function(event){
			var message = JSON.parse(event.data);
			if(message.isSuccessfulJoin === true){
				this.__self.isSuccessfulJoin = true;
			}else if(message.isSuccessfulJoin === false){
				return
			}

			if(this.__self.isSuccessfulJoin === true && this.__self.events[message.type] && typeof this.__self.events[message.type] == "function"){
				this.__self.events[message.type](message.data);
			}
		}

		this.socket.onmessage = handleMessage;

		this.socket.onerror = function(error) {
			console.log(error);
			if(typeof this.__self.onerror == 'function'){this.__self.onerror()};
		};

		this.emit = function(event, message){
			var message = Object.assign({}, {data: message}, {type: event});

			message = JSON.stringify(message);
			console.log(message)
			this.socket.send(message);
		}
	}

	this.events = []

	this.on = function(event, eventHandler){
		if (typeof eventHandler === "function") {
			this.events[event] = eventHandler.bind(this);
		}
	}

	httpRequest(location, createSocket);

	function httpRequest(location, callback){

		var init = {method: 'POST',  headers: { "Content-Type" : "application/json" }, credentials: 'include', body: "{}"};

		fetch("http://" + location + '/joinsocket', init).then(function(res) { 
			return res.json();})
		.then((res) => {callback(res)})
		.catch(function(error) {
			console.log('There has been a problem with your fetch operation: ' + error.message);
		});
	}



}
