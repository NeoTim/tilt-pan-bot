const HttpConfig = {
	deviceName: 'Localhost',
	showDebug: true,
	swimUrl: '192.168.1.74',
	swimPort: 9001,
	dualshock: {
		enabled: true,
		config: 'dualShock3',
		accelerometerSmoothing : true,
		analogStickSmoothing : false
	},
	tiltPan: {
		enabled: true,
		pythonFile: "./../tiltPanHat/nodeBridge.py"
	}
}

module.exports = HttpConfig;