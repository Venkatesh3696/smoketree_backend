# Address Registration

This is simple api in which name of an user and address is saved in to seperate tables. that is users table and address table.

## Installation

Use the npm to install dependencies.

```bash
npm install
```

## server start

Use the npm command to start server.

```bash
npm start
```

## Usage

## API endpoints

it contains only one functional endpoint

### 1. /register

### request body

```json
{
	"name": "venkatesh",
	"address": "hyderabad"
}
```

the endpoint requires name and address to register.

### successful sample response

```json
{
	"message": "user Registered successfully",
	"addressResults": {
		"fieldCount": 0,
		"affectedRows": 1,
		"insertId": 21,
		"info": "",
		"serverStatus": 2,
		"warningStatus": 0,
		"changedRows": 0
	}
}
```

### insufficient request body

```json
{
	"name": "venkatesh"
}
```

### failed response

```json
{
	"message": "name and address is required!"
}
```
